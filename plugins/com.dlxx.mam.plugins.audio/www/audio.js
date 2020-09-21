//zhouq80 added begin:
cordova.define("org.apache.cordova.audio", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {	
		/** 
		 * 一共5个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		 */  

        startRecordAudio: function(successCallback,errorCallback) {
			//alert("startRecordAudio");
            exec(successCallback, errorCallback, "audio", "startRecordAudio",[]);
        },
/** 
		 * 一共5个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		   第三个 :path 文件保存在本地的路径，例如：lujing/mmm.mp4
		 */  
		finishRecordAudio: function(successCallback,errorCallback) {
			//alert("finishRecordAudio");
            exec(successCallback, errorCallback, "audio", "finishRecordAudio",[]);
        }
    };

});
//zhouq80 added end