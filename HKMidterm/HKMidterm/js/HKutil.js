/*
PROG2430: Programming Mobile Web Applications I
Take home midterm exam
Created by: Heuijin Ko
Revision: Mar 27, 2020
*/

// RegisterForm Validate
function HKDoValidate_HKRegisterForm() {
    var form = $("#HKRegisterForm");
    form.validate({
        rules: {
            HKtxtUserName: {
                required: true,
                minlength: 3
            },
            HKtxtFullName: {
                required: true,
                rangelength: [5, 20]
            },
            HKtxtEmail: {
                required: true,
                email: true,
                HKemailcheck: true
            },
            HKtxtPasswd:{
                required: true,
                minlength: 8,
                HKpasswordcheck: true
            },
            HKtxtVerifyPasswd:{
                required: true,
                equalTo: "#HKtxtPasswd"
            }
        },
        messages: {
            HKtxtUserName: {
                required: "You must enter Username",
                minlength: "Username must be at least 3 characters long"
            },
            HKtxtFullName: {
                required: "You must enter full name",
                rangelength: "Full name must be 5-20 characters long"
            },
            HKtxtEmail: {
                required: "You must enter Email address",
                email: "Please enter a valid email",
                HKemailcheck: "You must enter a conestoga email"
            },
            HKtxtPasswd: {
                required: "You must enter Password",
                minlength:"Password must be at least 8 characters long",
                HKpasswordcheck: "Password must contain at least 1 digit and 1 Capital letter"
            },
            HKtxtVerifyPasswd: {
                required: "You must re-enter password",
                equalTo: "Password must match"
            }
        }
    });

    return form.valid();
}

jQuery.validator.addMethod("HKpasswordcheck",
    function(value, element){
        var regex = /([A-Za-z\d]*[A-Z]+[A-Za-z\d]*[\d]+[A-Za-z\d]*)|([A-Za-z\d]*[\d]+[A-Za-z\d]*[A-Z]+[A-Za-z\d]*)/;
        return this.optional(element) || regex.test(value);
    },
    "Our custom password checker"
);

jQuery.validator.addMethod("HKemailcheck",
    function (value, element) {
        var regex = /^.+@conestogac.on.ca$/;
        return this.optional(element) || regex.test(value);
    },
    "Our custom email checker"
);

// PurchaseForm Validate
function HKDoValidate_HKPurchaseForm() {
    var form = $("#HKPurchaseForm");
    form.validate({
        rules: {
            HKtxtBookTitle: {
                required: true,
                minlength: 5,
                maxlength: 15
            },
            HKtxtUnitPrice: {
                required: true,
                range: [10, 50]
            },
            HKtxtQuantity: {
                required: true,
                range: [5, 10]
            }
        },
        messages: {
            HKtxtBookTitle: {
                required: "You must enter Book title",
                minlength: "Book title must be at least 5 characters long",
                maxlength: "Book title must be at most 15 characters long"
            },
            HKtxtUnitPrice: {
                required: "You must enter Unit price",
                range: "Unit price must be within 10-50"
            },
            HKtxtQuantity: {
                required: "You must enter quantity",
                range: "Quantity must be within 5-10"
            }
        }
    });

    return form.valid();
}