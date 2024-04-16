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

var HelloWorldKPlugin = /** @class */ (function (_super) {
    tslib.__extends(HelloWorldKPlugin, _super);
    function HelloWorldKPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldKPlugin.prototype.nativeToast = function (arg1) { return core.cordova(this, "nativeToast", {}, arguments); };
    HelloWorldKPlugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HelloWorldKPlugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HelloWorldKPlugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HelloWorldKPlugin });
    HelloWorldKPlugin.pluginName = "HelloWorldKPlugin";
    HelloWorldKPlugin.plugin = "cordova-plugin-hello_world_k";
    HelloWorldKPlugin.pluginRef = "cordova.plugins.HelloWorldKPlugin";
    HelloWorldKPlugin.repo = "";
    HelloWorldKPlugin.install = "";
    HelloWorldKPlugin.installVariables = [];
    HelloWorldKPlugin.platforms = ["Android"];
    HelloWorldKPlugin = tslib.__decorate([], HelloWorldKPlugin);
    return HelloWorldKPlugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HelloWorldKPlugin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { nativeToast: [] } });

exports.HelloWorldKPlugin = HelloWorldKPlugin;
