'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var tensorflowLite = /** @class */ (function (_super) {
    tslib.__extends(tensorflowLite, _super);
    function tensorflowLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tensorflowLite.prototype.load = function () { return core.cordova(this, "load", {}, arguments); };
    tensorflowLite.prototype.unLoad = function () { return core.cordova(this, "unLoad", {}, arguments); };
    tensorflowLite.prototype.classify = function (text) { return core.cordova(this, "classify", {}, arguments); };
    tensorflowLite.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: tensorflowLite, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    tensorflowLite.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: tensorflowLite });
    tensorflowLite.pluginName = "TensorFlowLitePlugin";
    tensorflowLite.plugin = "cordova-plugin-tensorflow-lite";
    tensorflowLite.pluginRef = "tensorflowLite";
    tensorflowLite.repo = "https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    tensorflowLite.install = "ionic cordova plugin add https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    tensorflowLite.installVariables = [];
    tensorflowLite.platforms = ["Android"];
    tensorflowLite = tslib.__decorate([], tensorflowLite);
    return tensorflowLite;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: tensorflowLite, decorators: [{
            type: i0.Injectable
        }], propDecorators: { load: [], unLoad: [], classify: [] } });

exports.tensorflowLite = tensorflowLite;
