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

function HKSaveFeedback() {
    if(HKDoValidate_HKAddForm()){
        console.info("Form is Valid");
    }
    else{
        console.info("Form is Invalid");
    }
}

function HKUpdateFeedback() {
    if(HKDoValidate_HKModifyForm()){
        console.info("Form is Valid");
    }
    else{
        console.info("Form is Invalid");
    }
}

function HKSaveDefaultEmailToLocalStorage() {
    HKSetDataToLocalStorage($("#HKtxtDefaultEmail").val());
    alert("Default reviewer email saved.")
}

function HKClearDatabase() {
    localStorage.removeItem("DefaultEmail");
}