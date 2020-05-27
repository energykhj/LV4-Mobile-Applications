/*
PROG2430: Programming Mobile Web Applications I
HKFeedbackA2
Created by: Heuijin Ko
*/
function HKChkAddRating_changed() {
    HKToggleShowHide("Add");
}

function HKChkAddRatingEdit_changed() {
    HKToggleShowHide("Edit");
}

function HKRateCalculate() {
    HKCalculateRate("Add");
}

function HKEditRateCalculate() {
    HKCalculateRate("Edit");
}

function HKSave_Click() {
    HKaddFeedback();
}

function HKUpdate_Click() {
    HKupdateFeedback();
}

function HKSaveDefaultEmail_Click() {
    HKSaveDefaultEmailToLocalStorage();
}

function HKbtnClearDatabase_Click() {
    HKClearDatabase();
}

function HKAddFeedbackPage_show() {
    HKupdateTypesDropdown();
}

function HKViewFeedbackPage_show() {
    HKgetReviews();
}

function HKModifyFeedbackPage_show() {
    HKshowCurrentReview();
}

function HKDelete_Click() {
    HKdeleteFeedback();
}

function HKInit(){
    $("#HKAddRatingGroup").hide();
    $("#HKchkAddRating").on("change", HKChkAddRating_changed);
    $("#HKtxtFoodQuality").on("change", HKRateCalculate);
    $("#HKtxtService").on("change", HKRateCalculate);
    $("#HKtxtValue").on("change", HKRateCalculate);

    $("#HKAddRatingEditGroup").hide();
    $("#HKchkAddRatingEdit").on("change", HKChkAddRatingEdit_changed);
    $("#HKtxtFoodQualityEdit").on("change", HKEditRateCalculate);
    $("#HKtxtServiceEdit").on("change", HKEditRateCalculate);
    $("#HKtxtValueEdit").on("change", HKEditRateCalculate);

    $("#HKbtnSave").on("click", HKSave_Click);
    $("#HKbtnUpdate").on("click", HKUpdate_Click);
    $("#HKbtnDelete").on("click", HKDelete_Click);

    $("#HKbtnSaveDefault").on("click", HKSaveDefaultEmail_Click);
    $("#HKbtnClearDatabase").on("click", HKbtnClearDatabase_Click);

    $("#HKAddFeedbackPage").on("pageshow", HKAddFeedbackPage_show);
    $("#HKViewFeedbackPage").on("pageshow", HKViewFeedbackPage_show);
    $("#HKModifyFeedbackPage").on("pageshow", HKModifyFeedbackPage_show);
}

$(document).ready(function () {
    HKInit();
    HKInitDB();
})


function HKInitDB(){
    console.info("Creating Database...");
    try{
        DB.HKCreateDatabase();
        if (db){
            console.info("Creating Tables.....");
            DB.HKCreateTables();
        }
        else{
            console.error("Error: cannot create tables: Database is not available");
        }
    }
    catch(e){
        console.error("Error: (Fatal) Error in HKInitDB(). Cannot proceed");
    }
}

