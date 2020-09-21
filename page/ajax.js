// method 方法名；param 参数；localFlag 是否缓存，cb 成功回掉， errorcb 失败回掉
function ajaxGetJson (method, param, localFlag, cb, errorcb) {	
	if(isIGWEnviroment) { // i国网环境
		var appCode = edftAppCode;
		var serverCode = edftServerCode;
		
		if(!deviceReady) { // cordova插件没加载成功
			onLoadCordova(0, getIGW);
		}
		else { // cordova插件已加载，请求接口
			getIGW();
		}
		function getIGW () {
			navigator.ajax.postJSON(appCode, param, serverCode, function (res) {
			        resHandling(res);
			});
		}
	}
	else {
		$.post(httpUrl,param,function(res) {
				resHandling(res);
		},"json")
	}
	
	
	
}



