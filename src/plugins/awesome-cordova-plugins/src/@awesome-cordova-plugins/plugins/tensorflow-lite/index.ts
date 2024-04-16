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
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

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
@Plugin({
  pluginName: 'TensorFlowLitePlugin',
  plugin: 'cordova-plugin-tensorflow-lite', // npm package name, example: cordova-plugin-camera
  pluginRef: 'tensorflowlite', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/terryli0925/cordova-plugin-tensorflow-lite', // the github repository URL for the plugin
  install: 'ionic cordova plugin add https://github.com/terryli0925/cordova-plugin-tensorflow-lite', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class TensorFlowLitePlugin extends AwesomeCordovaNativePlugin {

  /**
   * Load the TF Lite model, dictionary and labels.
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  load(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Unload the TF Lite to free up resources.
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  unLoad(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Classify an input string and returns the classification results.
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  classify(text:string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
