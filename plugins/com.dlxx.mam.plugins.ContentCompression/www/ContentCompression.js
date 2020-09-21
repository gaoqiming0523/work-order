//fengxf added begin:
cordova.define("org.apache.cordova.ContentCompression", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {	
		/** 
		 * 文件压缩
		 * 一共2个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		   第三个 :将要调用的类的配置名字 
		   第四个 :调用的方法名 
		   第五个 :传递的参数 ,图片路径和图片大小
		 */  
        getSmallPicture: function(successCallback,errorCallback,picturePath,size) {
            exec(successCallback, errorCallback, "ContentCompression", "getSmallPicture", [picturePath,size]);
        },
		
		getPicturePath: function(successCallback,errorCallback,imgstr) {
            exec(successCallback, errorCallback, "ContentCompression", "getPicturePath", [imgstr]);
        },		

		readPicture: function(successCallback,errorCallback,imageUrl) {
           // exec(successCallback, errorCallback, "QRCodePlugin", "readPicture", [imageUrl]);
		    exec(successCallback, errorCallback, "ContentCompression", "readPicture", [imageUrl]);
        },		

		identifyPath: function(successCallback,errorCallback,path) {
		    exec(successCallback, errorCallback, "ContentCompression", "identifyPath", [path]);
        }
    };

});




