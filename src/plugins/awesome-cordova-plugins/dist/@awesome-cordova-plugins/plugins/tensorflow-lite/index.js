var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var TensorFlowLitePluginOriginal = /** @class */ (function (_super) {
    __extends(TensorFlowLitePluginOriginal, _super);
    function TensorFlowLitePluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TensorFlowLitePluginOriginal.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    TensorFlowLitePluginOriginal.prototype.unLoad = function () { return cordova(this, "unLoad", {}, arguments); };
    TensorFlowLitePluginOriginal.prototype.classify = function (text) { return cordova(this, "classify", {}, arguments); };
    TensorFlowLitePluginOriginal.pluginName = "TensorFlowLitePlugin";
    TensorFlowLitePluginOriginal.plugin = "cordova-plugin-tensorflow-lite";
    TensorFlowLitePluginOriginal.pluginRef = "tensorflowlite";
    TensorFlowLitePluginOriginal.repo = "https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    TensorFlowLitePluginOriginal.install = "ionic cordova plugin add https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    TensorFlowLitePluginOriginal.installVariables = [];
    TensorFlowLitePluginOriginal.platforms = ["Android"];
    return TensorFlowLitePluginOriginal;
}(AwesomeCordovaNativePlugin));
var TensorFlowLitePlugin = new TensorFlowLitePluginOriginal();
export { TensorFlowLitePlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVuc29yZmxvdy1saXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sdUNBQW1HLE1BQU0sK0JBQStCLENBQUM7O0lBa0N0Ryx3Q0FBMEI7Ozs7SUFPbEUsbUNBQUk7SUFTSixxQ0FBTTtJQVNOLHVDQUFRLGFBQUMsSUFBVzs7Ozs7Ozs7K0JBdkV0QjtFQThDMEMsMEJBQTBCO1NBQXZELG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgdGVuc29yZmxvdyBMaXRlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyB0ZW5zb3JmbG93TGl0ZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy90ZW5zb3JmbG93LWxpdGUnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbnNvcmZsb3dMaXRlOiB0ZW5zb3JmbG93TGl0ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMudGVuc29yZmxvd0xpdGUuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUZW5zb3JGbG93TGl0ZVBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRlbnNvcmZsb3ctbGl0ZScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd0ZW5zb3JmbG93bGl0ZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90ZXJyeWxpMDkyNS9jb3Jkb3ZhLXBsdWdpbi10ZW5zb3JmbG93LWxpdGUnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL3RlcnJ5bGkwOTI1L2NvcmRvdmEtcGx1Z2luLXRlbnNvcmZsb3ctbGl0ZScsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVuc29yRmxvd0xpdGVQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIFRGIExpdGUgbW9kZWwsIGRpY3Rpb25hcnkgYW5kIGxhYmVscy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogVW5sb2FkIHRoZSBURiBMaXRlIHRvIGZyZWUgdXAgcmVzb3VyY2VzLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bkxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIENsYXNzaWZ5IGFuIGlucHV0IHN0cmluZyBhbmQgcmV0dXJucyB0aGUgY2xhc3NpZmljYXRpb24gcmVzdWx0cy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xhc3NpZnkodGV4dDpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==