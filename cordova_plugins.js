cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
	{
		    "file": "plugins/com.dlxx.mam.plugins.accessToken/www/accessToken.js",  
		    "id": "org.apache.cordova.accessToken",
		    "merges": [
		        "navigator.accessToken"
		    ]
	},
    {  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/filelocalInstall.js",  
        "id": "org.apache.cordova.dlfileInstall",  
        "clobbers": ["navigator.dlfileInstall"]
	},
	{
		"file": "plugins/com.dlxx.mam.plugins.requestheader/www/requestheader.js",  
		"id": "org.apache.cordova.requestheader",
		"merges": [
			"navigator.ajax"
		]
    },
	 {  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/filetransfer.js",  
        "id": "org.apache.cordova.dlfiletransfer",  
        "clobbers": [  
			"navigator.dlfiletransfer" 
         ]
     },
	{  
        "file": "plugins/com.dlxx.mam.plugins.load/www/loadconfig.js",  
        "id": "org.apache.cordova.loadconfig",  
        "merges": [  
			"navigator.loadconfig" 
        ]  
    },
	{
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/FileTransferError.js",  
        "id": "org.apache.cordova.DLFileTransferError",  
        "clobbers": [  
			"DLFileTransferError"
        ]  
    },
    {
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/FileInstallError.js",  
        "id": "org.apache.cordova.DLFileInstallError",  
        "clobbers": [  
			"DLFileInstallError"
        ]  
    },
    {  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/filebreakpointtransfer.js",  
        "id": "org.apache.cordova.dlfilebreakpointtransfer",  
        "clobbers": [  
			"navigator.dlfilebreakpointtransfer"
         ]
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/forward.js",  
        "id": "org.apache.cordova.forward",  
 		"merges": [
            "navigator.forward"
        ]
    },
    {  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/ForwardConstants.js",
        "id": "org.apache.cordova.ForwardConstants",
 		"clobbers": [
            "DLForwardConstants"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
	    {
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverHandle.js",
        "id": "org.apache.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureAudioOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureAudioOptions",
        "clobbers": [
            "CaptureAudioOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureImageOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureImageOptions",
        "clobbers": [
            "CaptureImageOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureVideoOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureVideoOptions",
        "clobbers": [
            "CaptureVideoOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureError.js",
        "id": "org.apache.cordova.media-capture.CaptureError",
        "clobbers": [
            "CaptureError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/MediaFileData.js",
        "id": "org.apache.cordova.media-capture.MediaFileData",
        "clobbers": [
            "MediaFileData"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/MediaFile.js",
        "id": "org.apache.cordova.media-capture.MediaFile",
        "clobbers": [
            "MediaFile"
        ]
    },{
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    //此对象虽然提供了但是没有在任何平台被使用,所以这边注释了[下面clobbers真正的值还未找到]
//    {
//        "file": "plugins/org.apache.cordova.media-capture/www/ConfigurationData.js",
//        "id": "org.apache.cordova.media-capture.capture",
//        "clobbers": [
//            "ConfigurationData"
//        ]
//    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/capture.js",
        "id": "org.apache.cordova.media-capture.capture",
        "clobbers": [
            "navigator.device.capture"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media/www/MediaError.js",
        "id": "org.apache.cordova.media.MediaError",
        "clobbers": [
            "window.MediaError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media/www/Media.js",
        "id": "org.apache.cordova.media.Media",
        "clobbers": [
            "window.Media"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
        "id": "org.apache.cordova.file.DirectoryEntry",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryReader.js",
        "id": "org.apache.cordova.file.DirectoryReader",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Entry.js",
        "id": "org.apache.cordova.file.Entry",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/File.js",
        "id": "org.apache.cordova.file.File",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileEntry.js",
        "id": "org.apache.cordova.file.FileEntry",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileError.js",
        "id": "org.apache.cordova.file.FileError",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileReader.js",
        "id": "org.apache.cordova.file.FileReader",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileSystem.js",
        "id": "org.apache.cordova.file.FileSystem",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
        "id": "org.apache.cordova.file.FileUploadOptions",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadResult.js",
        "id": "org.apache.cordova.file.FileUploadResult",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileWriter.js",
        "id": "org.apache.cordova.file.FileWriter",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Flags.js",
        "id": "org.apache.cordova.file.Flags",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
        "id": "org.apache.cordova.file.LocalFileSystem",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Metadata.js",
        "id": "org.apache.cordova.file.Metadata",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ProgressEvent.js",
        "id": "org.apache.cordova.file.ProgressEvent",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/requestFileSystem.js",
        "id": "org.apache.cordova.file.requestFileSystem",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
        "id": "org.apache.cordova.file.resolveLocalFileSystemURI",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/android/FileSystem.js",
        "id": "org.apache.cordova.file.androidFileSystem",
        "merges": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/netTrafficStat.js",
        "id": "org.apache.cordova.netTrafficStat",
        "merges": [
            "navigator.netTrafficStat"
        ]
    },
	{
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/watchTraffic.js",
        "id": "org.apache.cordova.watchTraffic",
        "merges": [
            "navigator.watchTraffic"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },{  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/vfs.js",  
        "id": "org.apache.cordova.vfs",  
        "merges": [  
            "navigator.vfs"  
        ]  
    },
	{
          "file": "plugins/com.dlxx.mam.plugins.downloadKnowledge/www/downloadKnowledge.js",
          "id": "org.apache.cordova.downloadKnowledge",
          "merges": [
              "navigator.down"
          ]
     },{ 
			  //下载打开
			"file": "plugins/com.dlxx.mam.plugins.downloadfilebyurl/www/downloadFileByUrl.js",
			"id": "org.apache.cordova.downloadfilebyurl",
			"merges": [
				"navigator.downloadfilebyurl"
			]
	},{
		"file": "plugins/com.dlxx.mam.plugins.contactUtils/www/contactUtils.js",  
		"id": "org.apache.cordova.contactUtils",
		"merges": [
			"navigator.contactUtils"
		]
	},{
		"file": "plugins/com.dlxx.mam.plugins.gatheringLocation/www/gatheringLocation.js",  
		"id": "org.apache.cordova.gatheringLocation",
		"merges": [
			"navigator.openSwitch"
		]
	},
	/**
	*	名称：地图定位（GPS）
	*	适用平台：移动门户、电力一点通
	*	负责人：
	*	维护日期：2017-2-20
	*	版本：
	**/		
    {
        "file": "plugins/com.dlxx.mam.plugins.gps/www/gps.js",  
        "id": "org.apache.cordova.gps",
        "merges": [
            "navigator.gps"
        ]
    },
	/**
	*	名称：户号绑定插件
	*	适用平台：移动门户
	*	负责人：侯与涛
	*	开发日期：2017-2-14
	*	版本：1.0
	**/			
	{  
        "file": "plugins/com.dlxx.mam.plugins.accountsys/www/accountsys.js",
        "id": "org.apache.cordova.accountsys",
        "merges": [  
            "mam.navigator.accountsys"
        ]  
    },
	/**
	*	名称：获取设备信息插件
	*	适用平台：移动门户、一点通
	*	负责人：
	*	开发日期：2017-4-23
	*	版本：1.1
	*	更新说明：2017/6/27新增 指纹识别方法
	**/
	{  
        "file": "plugins/com.dlxx.mam.plugins.devicemanage/www/devicemanage.js",
        "id": "org.apache.cordova.devicemanage",
        "merges": [  
            "mam.navigator.devicemanage"
        ]  
     },
	/**
	*	名称：文件上传下载优化
	*	适用平台：移动门户、一点通
	*	负责人：
	*	开发日期：2017-6-09
	*	版本：1.0
	**/
	{  
        "file": "plugins/com.dlxx.mam.plugins.appfilemanage/www/appfilemanage.js",
        "id": "org.apache.cordova.appfilemanage",
        "merges": [  
            "navigator.appfilemanage"
        ]  
    }, 
	/**
	*	名称：企信插件（仅内部使用）
	*	适用平台：移动门户 
	*	负责人：
	*	开发日期：
	*	版本：1.0
	**/
    {
        "file": "plugins/com.dlxx.mam.plugins.MultiuserChat/www/MultiuserChat.js",  
        "id": "org.apache.cordova.MultiuserChat",
        "merges": [
            "navigator.MultiuserChat"
        ]
    },
	/**
	*	名称：企信信息
	*	适用平台：移动门户 
	*	负责人：
	*	开发日期：
	*	版本：1.0
	**/
	{
        "file": "plugins/com.dlxx.mam.plugins.chatpage/www/chatpage.js",  
        "id": "org.apache.cordova.chatpage",
        "merges": [
            "navigator.chatpage"
        ]
    },
	/**
	*	名称：企信用户头像
	*	适用平台：移动门户 
	*	负责人：
	*	开发日期：
	*	版本：1.0
	**/
	{
        "file": "plugins/com.dlxx.mam.plugins.headportrait/www/headportrait.js",  
        "id": "org.apache.cordova.headportrait",
        "merges": [
            "navigator.headportrait"
        ]
    },

	/**
	*	名称：图片处理
	*	适用平台：移动门户 
	*	负责人：Lee
	*	开发日期：2017/6/27
	*	版本：1.1
	*   更新说明：2017/6/27新增 读取图片二维码方法
	**/
	{
        "file": "plugins/com.dlxx.mam.plugins.ContentCompression/www/ContentCompression.js",  
        "id": "org.apache.cordova.ContentCompression",
        "merges": [
            "mam.navigator.ContentCompression"
        ]
    },
	/**
	*	名称：按钮监听
	*	适用平台：移动门户 
	*	负责人：Lee
	*	开发日期：2017/7/21
	*	版本：1.1
	*   更新说明：2017/7/21 更新 新增android监听回退按钮方法
	**/
	{
		"file": "plugins/com.dlxx.mam.plugins.appmenu/www/appmenu.js",  
		"id": "org.apache.cordova.appmenu",
		"merges": [
			"navigator.appmenu"
		]
    },
	/**
	*	名称：音频录制 aac
	*	适用平台：移动门户 
	*	负责人：
	*	开发日期：2016/7/21
	*	版本：1.1
	*   更新说明：2016/7/21 更新 新增android/ios 录制aac音频插件
	**/
    {
        "file": "plugins/com.dlxx.mam.plugins.audio/www/audio.js",  
        "id": "org.apache.cordova.audio",
        "merges": [
            "navigator.audio"
        ]
    },
	/**
	*	名称：文件上传
	*	适用平台：移动门户 电力一点通
	*	负责人：
	*	开发日期：2015 以前
	*	版本：1.0
	*   更新说明：无
	**/
	{
		"file": "plugins/com.dlxx.mam.plugins.toappserverupload/www/fileupload.js",
		"id": "org.apache.cordova.toappserverupload",
		"merges": [
			"navigator.appupload"
		]
	},
	/**
    *   名称：选择多张图片插件
    *   适用平台：移动门户
    **/
    {
        "file": "plugins/com.dlxx.mam.plugins.ImageSelectPlugin/www/ImageSelectPlugin.js",  
        "id": "org.apache.cordova.ImageSelectPlugin",
        "merges": [
            "navigator.ImageSelectPlugin"
        ]
    },
    /**
    *   名称：本地数据库访问
    *   适用平台：移动门户  一点通
    **/
    {
        "file": "plugins/com.dlxx.mam.plugins.SQLiteCordovaPlugin/www/SQLiteCordovaPlugin.js",  
        "id": "org.apache.cordova.SQLiteCordovaPlugin",
        "merges": [
            "navigator.SQLiteCordovaPlugin"
        ]
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/selectMusic.js",  
        "id": "org.apache.cordova.selectMusic",  
        "merges": [
            "navigator.selectMusic"
        ]
    },
	/**
    *   名称：IOS 打开第三方应用
    *   适用平台：移动门户  一点通
    **/
	{  
        "file": "plugins/com.dlxx.mam.plugins.openurl/www/openurl.js",  
        "id": "org.apache.cordova.openurl",  
        "merges": [
            "navigator.openURL"
        ]
    },
	/**
    *   名称：分享 微信、微信朋友圈
    *   适用平台：移动门户  一点通
    **/
	{  
        "file": "plugins/com.dlxx.mam.plugins.share/www/share.js",  
        "id": "org.apache.cordova.share",  
        "merges": [
            "navigator.share"
        ]
    }, 
	/**
    *   名称：水印
    *   适用平台：移动门户 一点通
    **/
    {
        "file": "plugins/com.dlxx.mam.plugins.watermark/www/watermark.js",  
        "id": "org.apache.cordova.watermark",
        "merges": [
            "navigator.watermark"
        ]
    }, 
	/**
    *   名称：微应用跳转
    *   适用平台：移动门户 一点通
    **/
    {
        "file": "plugins/com.dlxx.mam.plugins.go/www/microApp.js",  
        "id": "org.apache.cordova.go",
        "merges": [
            "navigator.go"
        ]
    }


];
	/**
	*	此段无需修改
	**/
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.camera": "0.2.8",
    "org.apache.cordova.console": "0.2.7",
    "org.apache.cordova.contacts": "0.2.9",
    "org.apache.cordova.device": "0.2.8",
    "org.apache.cordova.device-motion": "0.2.6",
    "org.apache.cordova.device-orientation": "0.3.5",
    "org.apache.cordova.dialogs": "0.2.6",
    "org.apache.cordova.file": "1.0.1",
    "org.apache.cordova.file-transfer": "0.4.2",
    "org.apache.cordova.geolocation": "0.3.6",
    "org.apache.cordova.globalization": "0.2.6",
    "org.apache.cordova.inappbrowser": "0.3.3",
    "org.apache.cordova.media": "0.2.9",
    "org.apache.cordova.media-capture": "0.2.8",
    "org.apache.cordova.network-information": "0.2.7",
    "org.apache.cordova.splashscreen": "0.2.7",
    "org.apache.cordova.vibration": "0.3.7"
}
// BOTTOM OF METADATA
});