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

var TensorFlowLitePlugin = /** @class */ (function (_super) {
    tslib.__extends(TensorFlowLitePlugin, _super);
    function TensorFlowLitePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TensorFlowLitePlugin.prototype.load = function () { return core.cordova(this, "load", {}, arguments); };
    TensorFlowLitePlugin.prototype.unLoad = function () { return core.cordova(this, "unLoad", {}, arguments); };
    TensorFlowLitePlugin.prototype.classify = function (text) { return core.cordova(this, "classify", {}, arguments); };
    TensorFlowLitePlugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TensorFlowLitePlugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TensorFlowLitePlugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TensorFlowLitePlugin });
    TensorFlowLitePlugin.pluginName = "TensorFlowLitePlugin";
    TensorFlowLitePlugin.plugin = "cordova-plugin-tensorflow-lite";
    TensorFlowLitePlugin.pluginRef = "tensorflowlite";
    TensorFlowLitePlugin.repo = "https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    TensorFlowLitePlugin.install = "ionic cordova plugin add https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    TensorFlowLitePlugin.installVariables = [];
    TensorFlowLitePlugin.platforms = ["Android"];
    TensorFlowLitePlugin = tslib.__decorate([], TensorFlowLitePlugin);
    return TensorFlowLitePlugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TensorFlowLitePlugin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { load: [], unLoad: [], classify: [] } });

exports.TensorFlowLitePlugin = TensorFlowLitePlugin;
