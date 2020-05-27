/*
PROG2430: Programming Mobile Web Applications I
HKFeedbackA2
Created by: Heuijin Ko
*/
function HKToggleShowHide(where) {
    if(where == "Add"){
        if ($("#HKchkAddRating").prop("checked"))
            $("#HKAddRatingGroup").show();
        else{
            $("#HKtxtFoodQuality").val(0)
            $("#HKtxtService").val(0)
            $("#HKtxtValue").val(0)
            $("#HKtxtHKOverallRating").val("")
            HKDoValidate_Rating();
            $("#HKAddRatingGroup").hide();
        }
    }
    else
    {
        if ($("#HKchkAddRatingEdit").prop("checked"))
            $("#HKAddRatingEditGroup").show();
        else{
            $("#HKtxtFoodQualityEdit").val(0)
            $("#HKtxtServiceEdit").val(0)
            $("#HKtxtValueEdit").val(0)
            $("#HKtxtHKOverallRatingEdit").val("")
            HKDoValidate_EditRating();
            $("#HKAddRatingEditGroup").hide();
        }
    }
}

function HKCalculateRate(where) {
    let FQ, Svc, Val;
    if(where == "Add"){
        FQ = Number($("#HKtxtFoodQuality").val());
        Svc = Number($("#HKtxtService").val());
        Val = Number($("#HKtxtValue").val());

        $("#HKtxtHKOverallRating").val(HKGetCalculateRate(FQ, Svc, Val) + "%");
    }
    else{
        FQ = Number($("#HKtxtFoodQualityEdit").val());
        Svc = Number($("#HKtxtServiceEdit").val());
        Val = Number($("#HKtxtValueEdit").val());

        $("#HKtxtHKOverallRatingEdit").val(HKGetCalculateRate(FQ, Svc, Val) + "%");
    }
}

function HKupdateTypesDropdown() {
    var options = [];

    $("#HKtxtEmail").val(localStorage.getItem("DefaultEmail"));


    $("#HKtxtBizName").val("");
    $("#HKtxtComments").val("");
    $("#HKtxtReviewDate").val("");
    $("#HKtxtFoodQuality").val("0");
    $("#HKtxtService").val("0");
    $("#HKtxtValue").val("0");
    $("#HKchkAddRating").prop("checked", false);
    $("#HKchkAddRating").checkboxradio("refresh");
    $("#HKAddRatingGroup").hide();

    function callback(tx, results){
        var htmlCode = "";
        for(var i = 0; i < results.rows.length; i++)
        {
            var row = results.rows.item(i);
            if(row['name'] == 'Others') {
                htmlCode += "<option value='" + row['id'] + "' selected>" + row['name'] + "</option>";
            }
            else{
                htmlCode += "<option value='" + row['id'] + "'>" + row['name'] + "</option>";
            }
        }

        $("#HKcmbType").html(htmlCode).selectmenu("refresh");
    }

    HKType.HKselectAll(options, callback);
}
// Insert a review
function HKaddFeedback() {
    if(HKDoValidate_HKAddForm()){
        console.info("Form is Valid");
        var bizName = $("#HKtxtBizName").val();
        var type = $("#HKcmbType").val();
        var email = $("#HKtxtEmail").val();
        var comments = $("#HKtxtComments").val();
        var reviewDate = $("#HKtxtReviewDate").val();
        var hasRating = $("#HKchkAddRating").prop("checked");
        var rating1 = $("#HKtxtFoodQuality").val();
        var rating2 = $("#HKtxtService").val();
        var rating3 = $("#HKtxtValue").val();

        if(hasRating == false){
            rating1 = rating2 = rating3 = null;
        }

        var options = [bizName, type, email, comments, reviewDate, hasRating, rating1, rating2, rating3];
        function callback(){
            alert("New Feedback Added");
            $(location).prop("href", "#HKViewFeedbackPage");
        }

        HKReview.HKinsert(options, callback);
    }
    else{
        console.error("Form is invalid");
    }
}

// Task 5: Review list, retrieves all review
function HKgetReviews() {
    var options = [];
    function callback(tx, results) {
        var htmlCode = "";

        for(var i = 0; i < results.rows.length; i++){
            var row = results.rows.item(i);

            var overAll = (row['hasRating'] == 'true')?
                HKGetCalculateRate(row['rating1'], row['rating2'], row['rating3']) : 0;

            htmlCode +=
                "<li>" +
                "   <a data-role='button' data-row-id=" + row['id'] + " href='#' >" +
                "       <h3>Business Name: " + row['businessName'] + "</h3>" +
                "       <p>Reviewer Email: " + row['reviewerEmail'] + "</p>" +
                "       <p>Comments: " + row['reviewerComments'] + "</p>" +
                "       <p>Overall Rating: " + overAll + "</p>" +
                "   </a>" +
                "</li>" ;
        }
        /* var lv = $("#HKFeedbackList");
         lv = lv.html(htmlCode);
         lv.listview("refresh");*/

        $("#HKFeedbackList").html(htmlCode).listview("refresh");

        $("#HKFeedbackList a").on("click", HKClickHandler);
        function HKClickHandler() {
            var id = $(this).attr("data-row-id");
            localStorage.setItem("id", id);
            $(location).prop("href", "#HKModifyFeedbackPage");
        }
    }

    HKReview.HKselectAll(options, callback);
}

// Task 6 Modify Feedback
function HKshowCurrentReview() {
    var id = localStorage.getItem("id");
    var options = [id];
    var optionsType = [];
    var typeID;

    function callback(tx, results) {
        var row = results.rows.item(0);
        $("#");
        $("#HKtxtBizNameEdit").val(row['businessName']);
        $("#HKtxtEmailEdit").val(row['reviewerEmail']);
        $("#HKtxtCommentsEdit").val(row['reviewerComments']);
        $("#HKtxtReviewDateEdit").val(row['reviewDate']);

        console.info("hasRating in show one: " + row['hasRating']);
        if(row['hasRating'] == 'true'){
            $("#HKchkAddRatingEdit").prop("checked", true);
            $("#HKchkAddRatingEdit").checkboxradio("refresh");
            HKToggleShowHide("view");

            $("#HKtxtFoodQualityEdit").val(row['rating1']);
            $("#HKtxtServiceEdit").val(row['rating2']);
            $("#HKtxtValueEdit").val(row['rating3']);

            var overall = HKGetCalculateRate(row['rating1'], row['rating2'], row['rating3']);
            $("#HKtxtHKOverallRatingEdit").val(overall);
        }
        else{
            $("#HKchkAddRatingEdit").prop("checked", false);
            $("#HKchkAddRatingEdit").checkboxradio("refresh");
            HKToggleShowHide("view");

            $("#HKtxtFoodQualityEdit").val(0);
            $("#HKtxtServiceEdit").val(0);
            $("#HKtxtValueEdit").val(0);

            $("#HKtxtHKOverallRatingEdit").val(null);
        }
        typeID = row['typeId'];
    }

    function callbackType(tx, results){
        var htmlCode = "";
        for(var k = 0; k < results.rows.length; k++)
        {
            var row = results.rows.item(k);
            if(row['id'] == typeID) {
                htmlCode += "<option value='" + row['id'] + "' selected>" + row['name'] + "</option>";
            }
            else{
                htmlCode += "<option value='" + row['id'] + "'>" + row['name'] + "</option>";
            }
        }

        $("#HKcmbTypeEdit").html(htmlCode).selectmenu("refresh");
    }

    HKReview.HKselect(options, callback);
    HKType.HKselectAll(optionsType, callbackType);
}

// Task 6 Update Feedback
function HKupdateFeedback() {
    if(HKDoValidate_HKModifyForm()){
        console.info("Form is Valid");

        var id = localStorage.getItem("id");
        var bizName = $("#HKtxtBizNameEdit").val();
        var type = $("#HKcmbTypeEdit").val();
        var email = $("#HKtxtEmailEdit").val();
        var comments = $("#HKtxtCommentsEdit").val();
        var reviewDate = $("#HKtxtReviewDateEdit").val();
        var hasRating = $("#HKchkAddRatingEdit").prop("checked");
        var rating1 = $("#HKtxtFoodQualityEdit").val();
        var rating2 = $("#HKtxtServiceEdit").val();
        var rating3 = $("#HKtxtValueEdit").val();

        if(hasRating == false){
            rating1 = rating2 = rating3 = null;
        }

        var options = [bizName, type, email, comments, reviewDate, hasRating, rating1, rating2, rating3, id];
        function callback(){
            alert("Feedback Updated successfully");
            $(location).prop("href", "#HKViewFeedbackPage");
        }

        HKReview.HKupdate(options, callback);
    }
    else{
        console.info("Form is Invalid");
    }
}

// Task 6 Delete Feedback
function HKdeleteFeedback() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback(){
        alert("Feedback Deleted successfully");
        $(location).prop("href", "#HKViewFeedbackPage");
    }

    HKReview.HKdelete(options, callback);
}

// Task 7 Update Setting page
function HKClearDatabase() {
    var result = confirm("Really want to clear database?");
    try{
        if(result){
            DB.HKDropTables();
            alert("Database cleared");
        }
    }
    catch (e){
        alert(e);
    }
    // localStorage.removeItem("DefaultEmail");
}

function HKSaveDefaultEmailToLocalStorage() {
    HKSetDataToLocalStorage($("#HKtxtDefaultEmail").val());
    alert("Default reviewer email saved.")
}


