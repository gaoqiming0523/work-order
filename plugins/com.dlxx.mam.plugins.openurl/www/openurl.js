cordova.define("org.apache.cordova.openurl", function (require, exports, module) {

  var exec = require('cordova/exec')

  module.exports = {
    /** 
 * 打开URL
 *
 */
    openInSafari: function (url,onSuccess,onError) {
      exec(onSuccess, onError, "openurl", "openInSafari", [url]);
    }
  };
});
