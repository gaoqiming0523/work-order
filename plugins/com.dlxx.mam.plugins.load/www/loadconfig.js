// file: lib/common/plugin/loadconfig.js
//Stanley Chan added begin:
cordova.define("org.apache.cordova.loadconfig", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {
	
		/** 
		 * 一共5个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		   第三个 :将要调用的类的配置名字(在config.xml中配置 稍后在下面会讲解) 
		   第四个 :调用的方法名(一个类里可能有多个方法 靠这个参数区分) 
		   第五个 :传递的参数  以json的格式 
		 */  
        loginsession: function(appType, getInfoCallback) {
//            var _appType = (count || 10);
		alert("loadconfig → loginsession");
			console.log("loadconfig → loginsession");
            exec(getInfoCallback, null, "loadconfig", "loginsession", [appType]);
        },

		 //
		getUserInfo: function(getInfoCallback) {
			console.log("loadconfig → getUserInfo");
            exec(getInfoCallback, null, "loadconfig", "getUserInfo", []);
        },

        messageInfo: function(getMsgCallback) {
			exec(getMsgCallback, null, "loadconfig", "messageInfo", []);
        },
		
		getOtherInfo: function(getInfoCallback) {
			exec(getInfoCallback, null, "loadconfig", "getOtherInfo", []);
        },
		
		getInnerInfo: function(getInfoCallback) {
			exec(getInfoCallback, null, "loadconfig", "getInnerUserInfo", []);
        },

		 //
		getUserInfoNEW: function(getInfoCallback) {
			console.log("loadconfig → getUserInfo");
            exec(getInfoCallback, null, "NewLoadConfig", "getUserInfo", []);
        },
		accountLogin: function(successCallback,errcallback) {
			console.log("loadconfig → getUserInfo");
            exec(successCallback,errcallback, "NewLoadConfig", "accountLogin", []);
        },
		loginAuth: function(successCallback,errcallback) {
			console.log("loadconfig → getUserInfo");
            exec(successCallback,errcallback, "NewLoadConfig", "loginAuth", []);
        }

    };

});
//Stanley Chan added end


