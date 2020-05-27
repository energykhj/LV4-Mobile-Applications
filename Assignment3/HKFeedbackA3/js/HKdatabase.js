/**
 * File Name: database.js
 *
 * Revision History:
 *       Heejin Ko 2020-03-19 : Created
 */

var db;

function HKErrorHandler(tx, error) {
    console.error("SQL Error: " + tx + " ( " + error.code + ") --" + error.message);
}

var DB = {
    HKCreateDatabase: function () {
        var shortName = "HKFeedbackDB";
        var version = "1.0";
        var displayName = "DB for HKFeedback Assignment3";
        var dbSize = 2 * 1024 * 1024;

        function HKdbCreateSuccess(){
            console.info("Success: Database creation successful");
        }
        db = openDatabase(shortName, version, displayName, dbSize, HKdbCreateSuccess)
    },

    HKCreateTables: function () {
        function HKtxFunction(tx){
            var dropSql = "DROP TABLE IF EXISTS type;";

            var typeSql = "CREATE TABLE IF NOT EXISTS type(" + //"if not exists" is impor
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(20) NOT NULL); ";

            var typeInsert1 = "INSERT INTO type (name) VALUES ('Asian');";
            var typeInsert2 = "INSERT INTO type (name) VALUES ('Canadian');";
            var typeInsert3 = "INSERT INTO type (name) VALUES ('Others');";

            var reviewSql = "CREATE TABLE IF NOT EXISTS review(" + //"if not exists" is impor
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "businessName VARCHAR(30) NOT NULL," +
                "typeId INTEGER NOT NULL," +
                "reviewerEmail VARCHAR(50)," +
                "reviewerComments TEXT," +
                "reviewDate DATE," +
                "hasRating VARCHAR(1)," +
                "rating1 INTEGER," +
                "rating2 INTEGER," +
                "rating3 INTEGER," +
                "FOREIGN KEY(typeId) REFERENCES type(id)); ";

            var options = [];

            function HKSuccessCreateReview() {
                console.info("Success: Review table creation successful");
            }
            function HKSuccessInsert() {
                console.info("Success: Type insert successful");
            }
            function HKSuccessCreateType() {
                console.info("Success: Type table creation successful");
            }
            function HKSuccessDropTable(){
                console.info("Success: Drop table successful");
            }
            tx.executeSql(dropSql, options, HKSuccessDropTable, HKErrorHandler);
            tx.executeSql(typeSql, options, HKSuccessCreateType, HKErrorHandler);
            tx.executeSql(typeInsert1, options, HKSuccessInsert, HKErrorHandler);
            tx.executeSql(typeInsert2, options, HKSuccessInsert, HKErrorHandler);
            tx.executeSql(typeInsert3, options, HKSuccessInsert, HKErrorHandler);
            tx.executeSql(reviewSql, options, HKSuccessCreateReview, HKErrorHandler);
        }
        function HKSuccessTransaction(){
            console.info("Success: transaction successful");
        }
        db.transaction(HKtxFunction, HKErrorHandler, HKSuccessTransaction);
    },

    HKDropTables: function () {
        function HKtxFunction(tx){
            var dropTypeSql = "DROP TABLE IF EXISTS type; ";
            var dropRevieeSql = "DROP TABLE IF EXISTS review; ";

            var options = [];
            function successReviewType() {
                console.info("Success: Review Ttble dropped successful");
            }
            function successDropType(){
                console.info("Success: Type table dropped successful");
            }

            tx.executeSql(dropTypeSql, options, successDropType, HKErrorHandler);
            tx.executeSql(dropRevieeSql, options, successReviewType, HKErrorHandler);
        }
        function HKSuccessTransaction(){
            console.info("Success: transaction successful");
        }
        db.transaction(HKtxFunction, HKErrorHandler, HKSuccessTransaction);}
};