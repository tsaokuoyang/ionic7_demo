import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name tensorflow Lite
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { tensorflowLite } from '@awesome-cordova-plugins/tensorflow-lite';
 *
 *
 * constructor(private tensorflowLite: tensorflowLite) { }
 *
 * ...
 *
 *
 * this.tensorflowLite.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class tensorflowLiteOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Load the TF Lite model, dictionary and labels.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    load(): Promise<any>;
    /**
     * Unload the TF Lite to free up resources.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    unLoad(): Promise<any>;
    /**
     * Classify an input string and returns the classification results.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    classify(text: string): Promise<any>;
}

export declare const tensorflowLite: tensorflowLiteOriginal;