import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var TensorFlowLitePlugin = /** @class */ (function (_super) {
    __extends(TensorFlowLitePlugin, _super);
    function TensorFlowLitePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TensorFlowLitePlugin.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    TensorFlowLitePlugin.prototype.unLoad = function () { return cordova(this, "unLoad", {}, arguments); };
    TensorFlowLitePlugin.prototype.classify = function (text) { return cordova(this, "classify", {}, arguments); };
    TensorFlowLitePlugin.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TensorFlowLitePlugin, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    TensorFlowLitePlugin.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TensorFlowLitePlugin });
    TensorFlowLitePlugin.pluginName = "TensorFlowLitePlugin";
    TensorFlowLitePlugin.plugin = "cordova-plugin-tensorflow-lite";
    TensorFlowLitePlugin.pluginRef = "tensorflowlite";
    TensorFlowLitePlugin.repo = "https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    TensorFlowLitePlugin.install = "ionic cordova plugin add https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    TensorFlowLitePlugin.installVariables = [];
    TensorFlowLitePlugin.platforms = ["Android"];
    TensorFlowLitePlugin = __decorate([], TensorFlowLitePlugin);
    return TensorFlowLitePlugin;
}(AwesomeCordovaNativePlugin));
export { TensorFlowLitePlugin };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TensorFlowLitePlugin, decorators: [{
            type: Injectable
        }], propDecorators: { load: [], unLoad: [], classify: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVuc29yZmxvdy1saXRlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBbUcsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBa0N0Ryx3Q0FBMEI7Ozs7SUFPbEUsbUNBQUk7SUFTSixxQ0FBTTtJQVNOLHVDQUFRLGFBQUMsSUFBVztzSEF6QlQsb0JBQW9COzBIQUFwQixvQkFBb0I7Ozs7Ozs7O0lBQXBCLG9CQUFvQixrQkFBcEIsb0JBQW9COytCQTlDakM7RUE4QzBDLDBCQUEwQjtTQUF2RCxvQkFBb0I7NEZBQXBCLG9CQUFvQjtrQkFEaEMsVUFBVTs4QkFRVCxJQUFJLE1BU0osTUFBTSxNQVNOLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIHRlbnNvcmZsb3cgTGl0ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgdGVuc29yZmxvd0xpdGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdGVuc29yZmxvdy1saXRlJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0ZW5zb3JmbG93TGl0ZTogdGVuc29yZmxvd0xpdGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnRlbnNvcmZsb3dMaXRlLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVGVuc29yRmxvd0xpdGVQbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10ZW5zb3JmbG93LWxpdGUnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAndGVuc29yZmxvd2xpdGUnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdGVycnlsaTA5MjUvY29yZG92YS1wbHVnaW4tdGVuc29yZmxvdy1saXRlJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS90ZXJyeWxpMDkyNS9jb3Jkb3ZhLXBsdWdpbi10ZW5zb3JmbG93LWxpdGUnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlbnNvckZsb3dMaXRlUGx1Z2luIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBURiBMaXRlIG1vZGVsLCBkaWN0aW9uYXJ5IGFuZCBsYWJlbHMuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9hZCB0aGUgVEYgTGl0ZSB0byBmcmVlIHVwIHJlc291cmNlcy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5Mb2FkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGFzc2lmeSBhbiBpbnB1dCBzdHJpbmcgYW5kIHJldHVybnMgdGhlIGNsYXNzaWZpY2F0aW9uIHJlc3VsdHMuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsYXNzaWZ5KHRleHQ6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=