var exec = require('cordova/exec');
/*
exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'HelloWorldKPlugin', 'coolMethod', [arg0]);
};
*/
exports.nativeToast = function (arg0, success, error) {
	 exec(
		success,
		error,
	   'HelloWorldKPlugin',
	   'nativeToast',
		[arg0]
		);
};