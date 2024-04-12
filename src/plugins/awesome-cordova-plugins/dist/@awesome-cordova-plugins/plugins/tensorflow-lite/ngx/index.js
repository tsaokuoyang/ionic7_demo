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
var tensorflowLite = /** @class */ (function (_super) {
    __extends(tensorflowLite, _super);
    function tensorflowLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tensorflowLite.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    tensorflowLite.prototype.unLoad = function () { return cordova(this, "unLoad", {}, arguments); };
    tensorflowLite.prototype.classify = function (text) { return cordova(this, "classify", {}, arguments); };
    tensorflowLite.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: tensorflowLite, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    tensorflowLite.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: tensorflowLite });
    tensorflowLite.pluginName = "TensorFlowLitePlugin";
    tensorflowLite.plugin = "cordova-plugin-tensorflow-lite";
    tensorflowLite.pluginRef = "tensorflowLite";
    tensorflowLite.repo = "https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    tensorflowLite.install = "ionic cordova plugin add https://github.com/terryli0925/cordova-plugin-tensorflow-lite";
    tensorflowLite.installVariables = [];
    tensorflowLite.platforms = ["Android"];
    tensorflowLite = __decorate([], tensorflowLite);
    return tensorflowLite;
}(AwesomeCordovaNativePlugin));
export { tensorflowLite };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: tensorflowLite, decorators: [{
            type: Injectable
        }], propDecorators: { load: [], unLoad: [], classify: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVuc29yZmxvdy1saXRlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBbUcsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBa0M1RyxrQ0FBMEI7Ozs7SUFPNUQsNkJBQUk7SUFTSiwrQkFBTTtJQVNOLGlDQUFRLGFBQUMsSUFBVztnSEF6QlQsY0FBYztvSEFBZCxjQUFjOzs7Ozs7OztJQUFkLGNBQWMsa0JBQWQsY0FBYzt5QkE5QzNCO0VBOENvQywwQkFBMEI7U0FBakQsY0FBYzs0RkFBZCxjQUFjO2tCQUQxQixVQUFVOzhCQVFULElBQUksTUFTSixNQUFNLE1BU04sUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgdGVuc29yZmxvdyBMaXRlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyB0ZW5zb3JmbG93TGl0ZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy90ZW5zb3JmbG93LWxpdGUnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbnNvcmZsb3dMaXRlOiB0ZW5zb3JmbG93TGl0ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMudGVuc29yZmxvd0xpdGUuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUZW5zb3JGbG93TGl0ZVBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRlbnNvcmZsb3ctbGl0ZScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd0ZW5zb3JmbG93TGl0ZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90ZXJyeWxpMDkyNS9jb3Jkb3ZhLXBsdWdpbi10ZW5zb3JmbG93LWxpdGUnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL3RlcnJ5bGkwOTI1L2NvcmRvdmEtcGx1Z2luLXRlbnNvcmZsb3ctbGl0ZScsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgdGVuc29yZmxvd0xpdGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIFRGIExpdGUgbW9kZWwsIGRpY3Rpb25hcnkgYW5kIGxhYmVscy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogVW5sb2FkIHRoZSBURiBMaXRlIHRvIGZyZWUgdXAgcmVzb3VyY2VzLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bkxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG4gIFxuICAvKipcbiAgICogQ2xhc3NpZnkgYW4gaW5wdXQgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBjbGFzc2lmaWNhdGlvbiByZXN1bHRzLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGFzc2lmeSh0ZXh0OnN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxufVxuIl19