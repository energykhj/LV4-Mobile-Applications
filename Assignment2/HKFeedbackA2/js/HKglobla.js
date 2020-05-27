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
    HKSaveFeedback();
}

function HKUpdate_Click() {
    HKUpdateFeedback();
}

function HKSaveDefaultEmail_Click() {
    HKSaveDefaultEmailToLocalStorage();
}

function HKbtnClearDatabase_Click() {
    HKClearDatabase();
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
    $("#HKbtnSaveDefault").on("click", HKSaveDefaultEmail_Click);
    $("#HKbtnClearDatabase").on("click", HKbtnClearDatabase_Click);
}

$(document).ready(function () {
    HKInit();
})

