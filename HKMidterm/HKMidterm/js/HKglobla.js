/*
PROG2430: Programming Mobile Web Applications I
Take home midterm exam
Created by: Heuijin Ko
Revision: Mar 27, 2020
*/

// call Regiser
function HKRegister_Click() {
    HKRegister();
}

// call calculate total
function HKCalculate_Click() {
    HKCalculateTotal();
}

// call validate
function HKValidate_Click() {
    HKValidate();
}

function HKInit(){
    $("#HKbtnRegister").on("click", HKRegister_Click);
    $("#HKbtnCalculate").on("click", HKCalculate_Click);
    $("#HKbtnValidate").on("click", HKValidate_Click);
}

$(document).ready(function () {
    HKInit();
})

