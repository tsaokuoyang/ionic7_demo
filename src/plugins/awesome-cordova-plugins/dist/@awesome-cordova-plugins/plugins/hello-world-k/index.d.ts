import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Hello World K
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { HelloWorldK } from '@awesome-cordova-plugins/hello-world-k/ngx';
 *
 *
 * constructor(private helloWorldK: HelloWorldK) { }
 *
 * ...
 *
 *
 * this.helloWorldK.functionName('Hello')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class HelloWorldKPluginOriginal extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    nativeToast(arg1: string): Promise<any>;
}

export declare const HelloWorldKPlugin: HelloWorldKPluginOriginal;