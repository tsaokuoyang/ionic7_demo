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
var HelloWorldKPluginOriginal = /** @class */ (function (_super) {
    __extends(HelloWorldKPluginOriginal, _super);
    function HelloWorldKPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldKPluginOriginal.prototype.nativeToast = function (arg1) { return cordova(this, "nativeToast", {}, arguments); };
    HelloWorldKPluginOriginal.pluginName = "HelloWorldKPlugin";
    HelloWorldKPluginOriginal.plugin = "cordova-plugin-hello_world_k";
    HelloWorldKPluginOriginal.pluginRef = "cordova.plugins.HelloWorldKPlugin";
    HelloWorldKPluginOriginal.repo = "";
    HelloWorldKPluginOriginal.install = "";
    HelloWorldKPluginOriginal.installVariables = [];
    HelloWorldKPluginOriginal.platforms = ["Android"];
    return HelloWorldKPluginOriginal;
}(AwesomeCordovaNativePlugin));
var HelloWorldKPlugin = new HelloWorldKPluginOriginal();
export { HelloWorldKPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaGVsbG8td29ybGQtay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLHVDQUFtRyxNQUFNLCtCQUErQixDQUFDOztJQWtDekcscUNBQTBCOzs7O0lBZS9ELHVDQUFXLGFBQUMsSUFBWTs7Ozs7Ozs7NEJBN0QxQjtFQThDdUMsMEJBQTBCO1NBQXBELGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgSGVsbG8gV29ybGQgS1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSGVsbG9Xb3JsZEsgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaGVsbG8td29ybGQtay9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlbGxvV29ybGRLOiBIZWxsb1dvcmxkSykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuaGVsbG9Xb3JsZEsuZnVuY3Rpb25OYW1lKCdIZWxsbycpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSGVsbG9Xb3JsZEtQbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1oZWxsb193b3JsZF9rJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkhlbGxvV29ybGRLUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkS1BsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMSB7c3RyaW5nfSBTb21lIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHBhcmFtIGFyZzIge251bWJlcn0gQW5vdGhlciBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICAvKlxuICBAQ29yZG92YSgpXG4gIGZ1bmN0aW9uTmFtZShhcmcxOiBzdHJpbmcsIGFyZzI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuICAqL1xuICBAQ29yZG92YSgpXG4gIG5hdGl2ZVRvYXN0KGFyZzE6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG59XG4iXX0=