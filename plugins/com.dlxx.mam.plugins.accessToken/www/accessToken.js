// file: lib/common/plugin/loadconfig.js
//Stanley Chan added begin:
cordova.define("org.apache.cordova.accessToken", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {
	
		/** 
		 * 一共5个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		   第三个 :原生插件名
		   第四个 :调用的方法名
		   第五个 :传递的参数  以json的格式 
		 */  
		getToken: function(appcode,certificate,successCallback,errcallback) {
			console.log('getToken');
		    exec(successCallback,errcallback, "getTK", "get", [appcode,certificate]);
        }

    };

});
//Stanley Chan added end


