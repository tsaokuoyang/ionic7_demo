var exec = require('cordova/exec');
/*
exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'HelloWorldPlugin', 'coolMethod', [arg0]);
};
*/
exports.nativeToast = function (arg0, success, error) {
	 exec(
		success,
		error,
	   'HelloWorldPlugin',
	   'nativeToast',
		[arg0]
		);
};