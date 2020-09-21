//fengxf added begin:
cordova.define("org.apache.cordova.headportrait", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {	
		/** 
		 * 文件压缩
		 * 一共2个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		   第三个 :将要调用的类的配置名字 
		   第四个 :调用的方法名 
		   第五个 :传递的参数 
		 */  
		 
		 // id:统一框架id
	     getHeadPortrait: function(successCallback,errorCallback,jid) {
            exec(successCallback, errorCallback,"HeadPortrait","getHeadPortrait",[jid]);
         },		 

    };

});



