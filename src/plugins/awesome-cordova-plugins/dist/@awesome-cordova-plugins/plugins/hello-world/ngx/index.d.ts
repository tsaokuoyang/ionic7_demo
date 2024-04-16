import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Hello World
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { HelloWorld } from '@awesome-cordova-plugins/hello-world/ngx';
 *
 *
 * constructor(private helloWorld: HelloWorld) { }
 *
 * ...
 *
 *
 * this.helloWorld.nativeToast('Hello')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class HelloWorldPlugin extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    nativeToast(arg1: string): Promise<any>;
}
