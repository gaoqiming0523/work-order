//zhouq80 added begin:
cordova.define("org.apache.cordova.downloadKnowledge", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {	
		
        down: function(successCallback,errorCallback,url,fileName,localPath,appcode,appservercode) {
            exec(successCallback, errorCallback, "DownloadKnowledge", "startDownload", [url,fileName,localPath,appcode,appservercode]);
        },
        sd_download: function(successCallback,errorCallback,url,fileName,localPath,appcode,appservercode) {
            exec(successCallback, errorCallback, "DownloadKnowledge", "sd_download", [url,fileName,localPath,appcode,appservercode]);
        },
        pg_open: function(successCallback,errorCallback,fileName,localPath) {
            exec(successCallback, errorCallback, "DownloadKnowledge", "pg_openfile", [fileName,localPath]);
        },

		openByThirdPartyApp: function(successCallback,errorCallback,path) {
            exec(successCallback, errorCallback, "DownloadKnowledge", "openByThirdPartyApp",[path]);
        }
    };

});
//zhouq80 added end