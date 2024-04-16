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

var HelloWorldPlugin = /** @class */ (function (_super) {
    tslib.__extends(HelloWorldPlugin, _super);
    function HelloWorldPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldPlugin.prototype.nativeToast = function (arg1) { return core.cordova(this, "nativeToast", {}, arguments); };
    HelloWorldPlugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HelloWorldPlugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HelloWorldPlugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HelloWorldPlugin });
    HelloWorldPlugin.pluginName = "HelloWorldPlugin";
    HelloWorldPlugin.plugin = "cordova-plugin-hello_world";
    HelloWorldPlugin.pluginRef = "cordova.plugins.HelloWorldPlugin";
    HelloWorldPlugin.repo = "";
    HelloWorldPlugin.install = "";
    HelloWorldPlugin.installVariables = [];
    HelloWorldPlugin.platforms = ["Android"];
    HelloWorldPlugin = tslib.__decorate([], HelloWorldPlugin);
    return HelloWorldPlugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HelloWorldPlugin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { nativeToast: [] } });

exports.HelloWorldPlugin = HelloWorldPlugin;
