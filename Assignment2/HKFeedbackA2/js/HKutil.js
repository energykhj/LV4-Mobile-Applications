/*
PROG2430: Programming Mobile Web Applications I
HKFeedbackA2
Created by: Heuijin Ko
*/

// Calculate rate
function HKGetCalculateRate(food, svc, val) {
    let OverallRate = (food+svc+val) * 100 / 15;
    return OverallRate;
}
// AddForm Validate
function HKDoValidate_HKAddForm() {
    var form = $("#HKAddForm");
    form.validate({
        rules: {
            HKtxtBizName: {
                required: true,
                rangelength: [2, 20]
            },
            HKtxtEmail: {
                required: true,
                email: true,
                HKemailcheck: true
            },
            HKtxtReviewDate: {
                required: true
            },
            HKtxtFoodQuality: {
                HKrangecheck: true
            },
            HKtxtService: {
                HKrangecheck: true
            },
            HKtxtValue: {
                HKrangecheck: true
            }
        },
        messages: {
            HKtxtBizName: {
                required: "Business name is required",
                rangelength: "Business Name must be 2 - 20 characters long"
            },
            HKtxtEmail: {
                required: "you must enter an email",
                email: "Please enter a valid email address",
                HKemailcheck: "Email must be a Conestoga email"
            },
            HKtxtReviewDate: {
                required: "Review date name is required"
            },
            HKtxtFoodQuality: {
                HKrangecheck: "Food Quality must be between 0 and 5"
            },
            HKtxtService: {
                HKrangecheck: "Service must be between 0 and 5"
            },
            HKtxtValue: {
                HKrangecheck: "Value must be between 0 and 5"
            }
        }
    });

    return form.valid();
}
// Email Validate
jQuery.validator.addMethod("HKemailcheck",
    function (value, element) {
        var regex = /^.+@conestogac.on.ca$/;
        return this.optional(element) || regex.test(value);
    },
    "Our custom email checker"
);
// Rating range validate, to prevent decimal
jQuery.validator.addMethod("HKrangecheck",
    function (value, element) {
        var regex = /^[0-5]$/;
        return this.optional(element) || regex.test(value);
    },
    "HK custom range checker"
    );
// ModifyForm Validate
function HKDoValidate_HKModifyForm() {
    var form = $("#HKModifyForm");
    form.validate({
        rules: {
            HKtxtBizNameEdit: {
                required: true,
                rangelength: [2, 20]
            },
            HKtxtEmailEdit: {
                required: true,
                email: true,
                HKemailcheck: true
            },
            HKtxtReviewDateEdit: {
                required: true
            },
            HKtxtFoodQualityEdit: {
                HKrangecheck: true
            },
            HKtxtServiceEdit: {
                HKrangecheck: true
            },
            HKtxtValueEdit: {
                HKrangecheck: true
            }
        },
        messages: {
            HKtxtBizNameEdit: {
                required: "Business name is required",
                rangelength: "Business Name must be 2 - 20 characters long"
            },
            HKtxtEmailEdit: {
                required: "you must enter an email",
                email: "Please enter a valid email address",
                HKemailcheck: "Email must be a Conestoga email"
            },
            HKtxtReviewDateEdit: {
                required: "Review date is required"
            },
            HKtxtFoodQualityEdit: {
                HKrangecheck: "Food Quality must be between 0 and 5"
            },
            HKtxtServiceEdit: {
                HKrangecheck: "Service must be between 0 and 5"
            },
            HKtxtValueEdit: {
                HKrangecheck: "Value must be between 0 and 5"
            }
        }
    });
}
// Rating initialize for addform
function HKDoValidate_Rating() {
    var form = $("#HKAddForm");
    form.validate({
        rules: {
            HKtxtFoodQuality: {
                range: [0, 5]
            },
            HKtxtService: {
                range: [0, 5]
            },
            HKtxtValue: {
                range: [0, 5]
            }
        },
        messages: {
            HKtxtFoodQuality: {
                range: "Food Quality must be between 0 and 5"
            },
            HKtxtService: {
                range: "Service must be between 0 and 5"
            },
            HKtxtValue: {
                range: "Value must be between 0 and 5"
            }
        }
    });
    return form.valid();
}
// Rating initialize for Modifyform
function HKDoValidate_EditRating() {
    var form = $("#HKModifyForm");
    form.validate({
        rules: {
            HKtxtFoodQualityEdit: {
                range: [0, 5]
            },
            HKtxtServiceEdit: {
                range: [0, 5]
            },
            HKtxtValueEdit: {
                range: [0, 5]
            }
        },
        messages: {
            HKtxtFoodQualityEdit: {
                range: "Food Quality must be between 0 and 5"
            },
            HKtxtServiceEdit: {
                range: "Service must be between 0 and 5"
            },
            HKtxtValueEdit: {
                range: "Value must be between 0 and 5"
            }
        }
    });
}
// Set eMail address to local storage
function HKSetDataToLocalStorage(email) {
    localStorage.setItem("DefaultEmail", email);
}
