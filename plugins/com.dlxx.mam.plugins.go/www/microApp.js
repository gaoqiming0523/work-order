 cordova.define("org.apache.cordova.go", function (require, exports, module) {

    var exec = require('cordova/exec');

    module.exports = {
       
        // appCode: 应用编码
        microApp: function (successCallback, errorCallback, appCode) {
            exec(successCallback, errorCallback, "go", "microApp", [appCode]);
        }

}});



