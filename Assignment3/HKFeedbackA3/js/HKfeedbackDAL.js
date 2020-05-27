/**
 * File Name: HKfeedbackDAL.js
 *
 * Revision History:
 *       Heejin Ko, 2020-03-19 : Created
 */

var HKReview = {
    HKinsert: function(options, callback){
        function txFunction(tx){
            var sql ="INSERT INTO review (" +
                            "businessName, "+
                            "typeId, "+
                            "reviewerEmail, "+
                            "reviewerComments, "+
                            "reviewDate, "+
                            "hasRating, "+
                            "rating1, "+
                            "rating2, "+
                            "rating3) " +
                    "VALUES(" +
                            "?, ?, ?, ?, ?, ?, ?, ?, ?);";
            tx.executeSql(sql, options, callback, HKErrorHandler);
        }

        function successTransaction(){
            console.info("Success: transaction successful");
        }
        db.transaction(txFunction, HKErrorHandler, successTransaction);
    },
    HKselectAll: function (options, callback) {
        function txFunction(tx){
            var sql ="SELECT * FROM review;";

            tx.executeSql(sql, options, callback, HKErrorHandler);
        }

        function successTransaction(){
            console.info("Success: Select All review successful");
        }
        db.transaction(txFunction, HKErrorHandler, successTransaction);
    },
    HKselect: function (options, callback) {
        function txFunction(tx){
            var sql ="SELECT * FROM review WHERE id = ?;";

            tx.executeSql(sql, options, callback, HKErrorHandler);
        }

        function successTransaction(){
            console.info("Success: select successful");
        }
        db.transaction(txFunction, HKErrorHandler, successTransaction);
    },
    HKupdate: function (options, callback) {
        function txFunction(tx){
            var sql ="UPDATE review SET businessName=?, " +
                                       "typeId=?, " +
                                       "reviewerEmail=?, " +
                                       "reviewerComments=?, " +
                                       "reviewDate=?, " +
                                       "hasRating=?, " +
                                       "rating1=?, " +
                                       "rating2=?, " +
                                       "rating3=? " +
                                    "WHERE id=?;";

            tx.executeSql(sql, options, callback, HKErrorHandler);
        }

        function successTransaction(){
            console.info("Success: update successful");
        }
        db.transaction(txFunction, HKErrorHandler, successTransaction);
    },
    HKdelete: function (options, callback) {
        function txFunction(tx){
            var sql ="DELETE FROM review WHERE id=?;";

            tx.executeSql(sql, options, callback, HKErrorHandler);
        }

        function successTransaction(){
            console.info("Success: delete successful");
        }
        db.transaction(txFunction, HKErrorHandler, successTransaction);
    }
};

var HKType = {
    HKselectAll: function (options, callback) {
        function txFunction(tx){
            var sql ="SELECT * FROM type;";
            tx.executeSql(sql, options, callback, HKErrorHandler);
        }

        function successTransaction(){
            console.info("Success: Select All type successful");
        }
        db.transaction(txFunction, HKErrorHandler, successTransaction);
    }
};