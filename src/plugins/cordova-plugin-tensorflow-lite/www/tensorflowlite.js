var exec = require('cordova/exec');

module.exports = {
  load: function (successCallback, errorCallback) {
    exec(
      successCallback,
      errorCallback,
      'TensorFlowLitePlugin',
      'load',
      []
    );
  },
  unLoad: function (successCallback, errorCallback) {
    exec(
      successCallback,
      errorCallback,
      'TensorFlowLitePlugin',
      'unLoad',
      []
    );
  },
  classify: function (text, successCallback, errorCallback) {
    exec(
      successCallback,
      errorCallback,
      'TensorFlowLitePlugin',
      'classify',
      [text]
    );
  }
};
