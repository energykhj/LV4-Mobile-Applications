/*
PROG2430: Programming Mobile Web Applications I
Take home midterm exam
Created by: Heuijin Ko
Revision: Mar 27, 2020
*/

// Validate for register form
function HKRegister() {
    if(HKDoValidate_HKRegisterForm()){
        console.info("Register form validated successfully");

        // registered information console out
        console.info("User name: " + $("#HKtxtUserName").val());
        console.info("Full name: " + $("#HKtxtFullName").val());
        console.info("Email address: " + $("#HKtxtEmail").val());
        console.info("Password: " + $("#HKtxtPasswd").val());
        console.info("Verify password: " + $("#HKtxtVerifyPasswd").val());

        // registerd information store localstorage
        localStorage.setItem("emailAddress", $("#HKtxtEmail").val());
        localStorage.setItem("fullName", $("#HKtxtFullName").val());
        localStorage.setItem("userName", $("#HKtxtUserName").val());
        localStorage.setItem("password", $("#HKtxtPasswd").val());
    }
    else{
        console.info("Register form validation failed");
    }
}

// Calculate for purchase page
function HKCalculateTotal() {
    var up = Number($("#HKtxtUnitPrice").val());
    var qty = Number($("#HKtxtQuantity").val());

    $("#HKtxtTotal").val(up * qty);
}

// Validate for purchase form
function HKValidate() {
    if(HKDoValidate_HKPurchaseForm()){
        console.info("Purchase form validated successfully");

        var bookType = ($("#HKrdoEBook").prop("checked") == true)? "eBook" : "HardCopy";
        console.info("Order date: " + $("#HKtxtOrderDate").val());
        console.info("Book title: " + $("#HKtxtBookTitle").val());
        console.info("Book type: " + bookType);
        console.info("Unit price: " + $("#HKtxtUnitPrice").val());
        console.info("Quantity: " + $("#HKtxtQuantity").val());
        console.info("Total: " + $("#HKtxtTotal").val());
    }
    else{
        console.info("Purchase form validation failed");
    }
}