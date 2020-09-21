//fengxf added begin:
cordova.define("org.apache.cordova.share", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {	
		/** 
		 * 
		 * 一共5个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		   第三个 :将要调用的类的配置名字(在config.xml中配置 稍后在下面会讲解) 
		   第四个 :调用的方法名(一个类里可能有多个方法 靠这个参数区分) 
		   第五个 :传递的参数  以json的格式 
		 */  
		// addr：点击分享而跳转的地址；share_title:分享的标题；share_description：分享的描述；
        shareToWX: function(successCallback,errorCallback,addr,share_title,share_description,icon) {
            exec(successCallback, errorCallback, "Share", "shareToWX",[addr,share_title,share_description,icon]);
        },
		
		// addr：点击分享而跳转的地址；share_title:分享的标题；share_description：分享的描述；
		shareToWXCircle: function(successCallback,errorCallback,addr,share_title,share_description,icon) {
            exec(successCallback, errorCallback, "Share", "shareToWXCircle",[addr,share_title,share_description,icon]);
        },
		
		// share_description：分享地址的描述；share_addr：分享地址(用于阅读与点击链接)
		shareToYX: function(successCallback,errorCallback,share_description,share_addr) {
            exec(successCallback, errorCallback, "Share", "shareToYX",[share_description,share_addr]);
        },
		
		// share_description：分享地址的描述；share_addr：分享地址(用于阅读与点击链接)
		shareToSina: function(successCallback,errorCallback,share_description,share_addr) {
            exec(successCallback, errorCallback, "Share", "shareToSina",[share_description,share_addr]);
        },
		
		// share_description：分享地址的描述；share_addr：分享地址(用于阅读与点击链接)
		shareToQQ: function(successCallback,errorCallback,share_description,share_addr) {
            exec(successCallback, errorCallback, "Share", "shareToQQ",[share_description,share_addr]);
        },
		// share_app：分享应用的名称;share_addr:分享地址(用于扫描下载)
		dimension: function(successCallback,errorCallback,share_app,share_addr) {
            exec(successCallback, errorCallback, "Share", "dimension",[share_app,share_addr]);
        },
		
		
    };

});
//fengxf added end


