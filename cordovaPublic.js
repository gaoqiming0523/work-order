// cordova 方法

var mam = {
	navigator: navigator
};
// 标识cordova环境是否准备好,初始值为false
var deviceReady = false;
var pageType;
var cb;
// 页面加载时执行onLoadCordova(window.onload)方法,开始加载cordova。
function onLoadCordova(type, cb) { 		// 	type: 0 非首页	 1首页
	if(isIGWEnviroment){
		pageType = type;
		document.addEventListener("deviceready", onDeviceReady, false);
	}
	// cordova加载完成，调用设备信息。
	function onDeviceReady() {
		deviceReady = true; 
//		getDeviceInfo(cb);
		getUserInfo(cb);
		screenControl(1); 					// 锁定屏幕方向 竖屏1
		setTooBar(0); 			// 隐藏移动门户的toolBar
	}
}



// 隐藏移动门户的toolBar
function setTooBar(pageType) {		// type: 0 隐藏   1 显示
	mam.navigator.appmenu.setTooBar(setTooBarcallback, pageType);
}
// 设置全屏成功
function setTooBarcallback(obj) {
//	alert("全屏设置成功 " + JSON.stringify(obj));
}

// 设置横屏竖屏
function screenControl(type) {		//type  0 横屏	1竖屏 	2默认显示
	mam.navigator.appmenu.screenControl(screenControlcallback, type);
}
// 横竖屏设置成功
function screenControlcallback(obj) {
//	alert("设置横竖屏成功 " + JSON.stringify(obj));
}

// 调用获取设备信息插件
function getDeviceInfo(cb){
//	alert("调用获取设备信息插件 ");
	mam.navigator.devicemanage.getDevice(getDeviceInfoCallBack);
	//  设备信息插件调用成功
	function getDeviceInfoCallBack(v){
		function setData () {
			var json = JSON.stringify(v);
			var deviceID = v.deviceID;
			setLoc(localName + 'Device', { deviceID : deviceID});
		}
		setData();
		cb();
	//	alert("getJson插件调用成功: "+json);
	//	v.model;		//设备型号
	//	v.platform;		//手机系统
	//	v.version;		//手机系统版本
	//	v.deviceID;		//设备ID
	//	v.interStatus;	//网络状态
	//	v.portalType;	//平台类型 0 门户 1一点通
	//	v.deviceMAC;	//设备mac地址
	}

}

function getUserInfo (cb) {
	// uexIGWUser.getActiveUser(function (error, data) {
	//        alert(data+"\nand error = "+error);
	// });
	var olduserInfo=getLoc(localName+'UserInfo');
	mam.navigator.loadconfig.getUserInfo(function(msg) {
		function setData () {
			if(olduserInfo){
				
			}else{
				var userInfo = {
					userId: msg.nameCode, 	// 用户名称id （同名称）
					//areaId: msg.areaId,		// 用户所属单位节点
					userCode: msg.userId,		// 用户id
					userName: msg.name,			// 用户名称 
					deptCode: msg.baseOrgId,		// 单位id
					name: msg.baseOrgName,	// 单位名称
					deptAll: [{deptCode: msg.baseOrgId,name: msg.baseOrgName,}]
				};
				setLoc(localName + 'UserInfo', userInfo);
			}
		}
		setData();
		cb();
	});
}

//获取用户信息
//正式环境 9OoQLnJ9y64
//测试环境 seuUwLBxGfg 或 123456  或 1
function getToken(cb){
	mam.navigator.accessToken.getToken(SMA_code, "1", function getTokenCb(obj) {
		console.log(obj)
		let tokens = "";
		if (obj.code == "0") {
			if (obj.msg != "") {
				tokens = obj.msg;
			} else {
				mam.navigator.notification.alert("令牌获取失败", function() {}, '提示');
				return;
			}
		}
		let param1 = {
			"fun_code": "5",
			"serviceTK": tokens
		}
		mam.navigator.ajax.postJSON(SMA_code, {"isc":"111","param1": JSON.stringify(param1)}, SMA_serverCode, function getusermess(res) {
			console.log("用户信息为：" + JSON.stringify(res));
			cb();
		});
	},getTokensb)
}
function getTokensb(obj){
	switch (obj.code) {
		case "-l":
			mam.navigator.notification.alert("参数异常",function(){},"提示");
			break;
		case "-2":
			mam.navigator.notification.alert("获取临时令牌失败",function(){},"提示");
			break;
		case "-3":
			mam.navigator.notification.alert("用户认证失效,请退出重新登录i国网",function(){},"提示");
			break;
	}
}



/*************************************	暂未用	**********************************/
// 添加事件监听
function loadListener () {
	addEventListener('load', function() {
	//	console.log("横竖屏监听");
		orientationChange();
		window.onorientationchange = orientationChange;
	});
}
// 判断屏幕是否旋转
function orientationChange() {
	switch(window.orientation) {　　
		case 0:
			alert("肖像模式 0,screen-width: " + screen.width + "; screen-height:" + screen.height);
			break;　　
		case -90:
			alert("左旋 -90,screen-width: " + screen.width + "; screen-height:" + screen.height);
			break;　　
		case 90:
			alert("右旋 90,screen-width: " + screen.width + "; screen-height:" + screen.height);
			break;　　
		case 180:
			alert("风景模式 180,screen-width: " + screen.width + "; screen-height:" + screen.height);　　
			break;
	};
};
//退出app
function IGWGoBack(){
	if(isIGWEnviroment){
		ajaxGetJson("logoutInfo", {}, false, function(res){
			mam.navigator.appmenu.exitApp();
		})
	}
}
//后退 按钮监听
function hback() {
	if ("iOS" == devicePlatform) {
		mam.navigator.appmenu.setBackButton(null, null, "0");
	}
	document.removeEventListener('backbutton', hback);
	 //以下三种，可根据当前页面需求，使用不同方法。
	 //第一种：直接退出当前应用
		/**mam.navigator.appmenu.exitApp();**/
	//第二种：返回上一页
		/**history.go(-1);**/
	//第三种：自定义跳转页面
		window.location.href = "view/gateway.html";
}


/**
 *	名称：回退按钮 开关
 *	方法名称：setBackButton 
 *	适用平台：移动门户 、(电力一点通 暂时不可用)
 *	负责人：
 *	开发日期：
 *	版本：1.1
 *	参数说明：
 *			backType: 0代表不可返回，1代表可以返回
 *	回调说明：
 *		successCallback
 *		errorCallback
 *	方法说明：
 *		页面加载时执行onLoad方法，
 *		deviceReady 标识cordova环境是否准备好,初始值为false
 *		onDeviceReady 表示cordova加载完毕
 **/
/**
 *调用此插件，客户端及移动门户title 回退按钮失效
 *成功回调 与 失败退到
 **/
function pageBackOFF() {
	alert("回退按钮失效，禁止回退");
	mam.navigator.appmenu.setBackButton(successCallback, errorCallback, '0');
	alert("回退按钮已经失效");

}

function pageBackON() {
	alert("回退按钮放开，允许回退");
	mam.navigator.appmenu.setBackButton(successCallback, errorCallback, '1');
	alert("允许回退");

}

function successCallback() {
	alert("successCallback");

}

function errorCallback() {
	alert("errorCallback");

}

/****************************************下载电子书**************************************************/

var localPath;
var urlname;
// var fileName;
// var fileUrl;
// 下载
function download(downloadUrl, appCode, appservercode,urlnamex) {
	$('.ezineDownStatus').html('开始下载...');
	//alert('开始下载');
	// fileUrl = fileurl;
	urlname=urlnamex;
	localPath = '/e-zine/';
	// localPath = '/page/e-zine';
	// fileName = filename;
	//alert('download:' + downloadUrl + '-------------filename:' + fileName + '-------------localPath:' + localPath + '-------------appcode：' + appcode + '-------------appsevercode:' + appservercode );
	// mam.navigator.down.sd_download(fileDownloadCallback, downloaderrorcb, downloadUrl,  urlname+'.zip', localPath, appCode, appservercode);
	fileDownload(appCode,downloadUrl,localPath,urlname,urlname);
}
//新下载
function fileDownload(appCode,downLoadUrl,saveUrl,fileName,fileCode)
{
	var appServerCode ='download';
	var urlType  = 0;
	var fileSize   ='10000';
	var fileStatus  ='0';	

	console.log(
	" 应用编码= "+ appCode +
	"\r\n 应用服务编码= "+ appServerCode +
	"\r\n 下载类型= "+ urlType +
	"\r\n 下载URL= " + downLoadUrl+
	"\r\n 保存url= " + saveUrl +
	"\r\n 文件名称= " + urlname+'.zip' +
	"\r\n 应用名称= " + '蒙东统计' +
	"\r\n 文件大小= " + fileSize +
	"\r\n 文件状态= " + fileStatus +
	"\r\n 文件编码= " + fileCode );
	mam.navigator.appfilemanage.fileDownload(fileDownloadCallback,appCode,appServerCode,urlType,downLoadUrl,saveUrl,urlname+'.zip','蒙东统计',fileSize,fileStatus,urlname);
}
// //删除缓存
function removefiles()
{
	// console.log(" 应用编码 "+'JSINTPSP'+"\r\n 文件  "+['测试']);
	var ezines=getLoc(localName+'ezines');
	var ezinesName=[];
	if(ezines){
		for(var i=0;i<ezines.length;i++){
			ezinesName.push(ezines[i][0]);
		}
	}else{
		alertModel("暂无缓存电子书");
	}
	mam.navigator.appfilemanage.rmFiles(rmcallback,'MDINTSMA',ezinesName);
}
function rmcallback(obj)
{
	localStorage.removeItem(localName+"ezines");
	alertModel("电子书缓存已清空！");
	// console.log(JSON.stringify(obj));
}
// //已经下载文件信息
// function removeMessage()
// {
// 	mam.navigator.appfilemanage.getFileInfo2(getFileInfoCallback,'JSINTPSP');
// }
// function getFileInfoCallback(obj){
// 	console.log(obj);
// }

function fileDownloadCallback(obj) { // 下载成功回调
	$('.ezineDownStatus').html('下载中...');
//	alert('下载成功');
//	alert('下载成功' + JSON.stringify(obj));
	if(obj.fileStatus=="3"){
		decompression();
	}
}

function downloaderrorcb() { // 下载失败回调
//	alert('下载失败');
}

//  解压
function decompression() {
	$('.ezineDownStatus').html('解压中....');
//	alert('开始解压');
	// var zipPath ='page/e-zine/' + urlname + '.zip';
	var zipPath ='';
	if(phoneType()=='ios'){
		zipPath ='../蒙东统计/e-zine/'+urlname+'.zip';
	}else if(phoneType()=='android'){
		zipPath ='../../e-zine/'+urlname+'.zip';
	}else{
		
	}
	mam.navigator.appfilemanage.decompression(decsuccess, deerrorback, zipPath);
}

function decsuccess(obj) {
	// alert(JSON.stringify(obj));
	// alert('解压成功');
	setEzineLocal();
}

function deerrorback(obj) {
	if (obj.code == 0) {
		setEzineLocal();
		// alert('解压成功');
	}
	else {
		// alert('解压失败');
	}
	
}

function setEzineLocal() {
	$('.ezineDownStatus').html('完成下载，正在打开...');
	// alert('解压完成')
	if(localStorage.getItem('ezineLocal')) {
		var ezineData = JSON.parse(localStorage.getItem('ezineLocal'));
		if(ezineData[urlname]){
			var itemData = ezineData[urlname];
		}
		else {
			var itemData = [];
		}
	}
	else {
		var ezineData = {};
		var itemData = [];
	}
	
	itemData.push(urlname);
	ezineData[urlname] = itemData;
	localStorage.setItem('ezineLocal', JSON.stringify(ezineData));
	// ezineSrc = '../e-zine/'+urlname+'/index.html';
	var ezineSrc='';
	if(phoneType()=='ios'){
		ezineSrc = '../../../蒙东统计/e-zine/'+urlname+'/index.html';
	}else if(phoneType()=='android'){
		ezineSrc = '../../../../../e-zine/'+urlname+'/index.html';
	}else{
		
	}
	var ezines=[];
	if(getLoc(localName+'ezines')){
		ezines=getLoc(localName+'ezines');
	}
	ezines.push([urlname,ezineSrc]); 
	setLoc(localName+'ezines', ezines);
	$('.ezineDownStatus').hide();
	$("#dlMainList").children("iframe").remove();
	var iframeBlock='<iframe style="width:100%;height:100%;border:0;fontSize:'+font+'px;" src="'+ezineSrc+'"></iframe>';
	$("#dlMainList").append(iframeBlock);
	// $('.ezineIframe').attr('src', ezineSrc);
	// $('.ezineIframe').attr('src', $('.ezineIframe').attr('src'));
	// $('.ezineDownStatus').hide();
	// $('.ezineIframe').show();
//	alert(ezineSrc);
//	alert('打开完成')
};
	

//坐标系调用
function locationMethod(){
	mam.navigator.gps.getLocation(successCallback,errorCallback,"bd09ll");
}
function successCallback(v){
	alertModel('坐标信息获取成功'+JSON.stringify(v));
}
function errorCallback(e){
	alertModel("坐标信息获取失败"+JSON.stringify(e));	
}

   





