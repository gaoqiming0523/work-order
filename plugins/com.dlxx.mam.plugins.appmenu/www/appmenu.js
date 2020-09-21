//fengxf added begin:
cordova.define("org.apache.cordova.appmenu", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {	
		/** 
		 * 一共5个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		   第三个 :将要调用的类的配置名字
		   第四个 :调用的方法名(一个类里可能有多个方法 靠这个参数区分) 
		   第五个 :传递的参数  以json的格式 
		 */  
        addMenu: function(successCallback,errorCallback,menuType,menuName,callBackMethod) {
            exec(successCallback, errorCallback, "AppMenu", "addMenu", [menuType,menuName,callBackMethod]);
        },		
		exitApp: function(successCallback,errorCallback) {
            exec(successCallback, errorCallback, "AppMenu", "exitApp", []);
        },
		// hback：自定义类型: 0代表不可返回，1代表可以返回
		setBackButton: function(successCallback,errorCallback,backType) {
			exec(successCallback, errorCallback, "AppMenu", "setBackButton", [backType]);
       },
		// 
		setTooBar: function(successCallback,parame) {
			exec(successCallback, null, "AppMenu", "setTooBar", [parame]);
       },
		// 
		screenControl: function(successCallback,parame) {
			exec(successCallback, null, "AppMenu", "screenControl", [parame]);
       }


    };

});

    
