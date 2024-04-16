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
@Plugin({
  pluginName: 'HelloWorldKPlugin',
  plugin: 'cordova-plugin-hello_world_k',
  pluginRef: 'cordova.plugins.HelloWorldKPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HelloWorldKPlugin extends AwesomeCordovaNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  /*
  @Cordova()
  functionName(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  */
  @Cordova()
  nativeToast(arg1: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
