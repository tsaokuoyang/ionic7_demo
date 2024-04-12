# Ionic plugin js 部分開發

參考文件: [Awesome Cordova Plugins](https://github.com/danielsogl/awesome-cordova-plugins/blob/master/README.md)
前身為 @ionic-native

## git 複製 awesome-cordova-plugins

```
mkdir ./src/plugins
cd ./src/plugins
git clone https://github.com/danielsogl/awesome-cordova-plugins
```

移除掉其他 plugins(若不移除, 他會全部重新編譯, 比較耗時),

```
rm -Rf ./awesome-cordova-plugins/src/@awesome-cordova-plugins/plugins/*
```

## 安裝編譯工具

```
cd awesome-cordova-plugins
npm install
npm install @awesome-cordova-plugins/core --save
sudo npm install -g gulp-cli
```

## 以 cordova-plugin-tensorflow-lite 為例 (別人寫好的 Cordova plugin)

### 下載 cordova-plugin-tensorflow-lite

```
cd ../
git clone https://github.com/terryli0925/cordova-plugin-tensorflow-lite
rm -Rf ./cordova-plugin-tensorflow-lite/.git
```

檢視 ./cordova-plugin-tensorflow-lite/www/tensorflowlite.js 內容:

```
module.exports = {
  load: function (successCallback, errorCallback) {
    cordova.exec(
      successCallback,
      errorCallback,
      'TensorFlowLitePlugin',
      'load',
      []
    );
  },
  unLoad: function (successCallback, errorCallback) {
    cordova.exec(
      successCallback,
      errorCallback,
      'TensorFlowLitePlugin',
      'unLoad',
      []
    );
  },
  classify: function (text, successCallback, errorCallback) {
    cordova.exec(
      successCallback,
      errorCallback,
      'TensorFlowLitePlugin',
      'classify',
      [text]
    );
  }
};

```

### 產生 ionic 所需的 TypeScript :

```
cd ./src/plugins/awesome-cordova-plugins

gulp plugin:create -m -n tensorflowLite
```

依照 tensorflowlite.js
填寫 tensorflowLite.ts:

```
@Plugin({
  pluginName: 'TensorFlowLitePlugin',
  plugin: 'cordova-plugin-tensorflow-lite', // npm package name, example: cordova-plugin-camera
  pluginRef: 'tensorflowLite', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/terryli0925/cordova-plugin-tensorflow-lite', // the github repository URL for the plugin
  install: 'ionic cordova plugin add cordova-plugin-tensorflow-lite', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class tensorflowLite extends AwesomeCordovaNativePlugin {

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
  unload(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


  /**
   * Classify an input string and returns the classification results.
   * @param {string} text
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  classify( text:string ): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
```

編譯:

```
npm run build
```

將會產出相關 ionic 用的 plugin code:

```
./src/plugins/awesome-cordova-plugins/dist/@awesome-cordova-plugins/plugins/tensorflow-lite
```

## 安裝上述 plugin 進 ionic App

# 產生測試用的 App

## 產生測試用的 ionic StandAlone Tabs 專案

```
cd ./src/plugins
ionic start testApp tabs --type=angular --cordova
```

```
? Would you like to build your app with NgModules or Standalone Components?
 Standalone components are a new way to build with Angular that simplifies the way you build your app.
 To learn more, visit the Angular docs:
 https://angular.io/guide/standalone-components

 (Use arrow keys)
  NgModules
❯ Standalone
```

```
cd testApp
ionic cordova platform add android@12
```

## 在開發過程中測試 Plugin

在開發過程中手動測試插件最簡單的方法
是照常建立 Cordova 應用程式
並使用以下--link 選項新增插件：

```
ionic cordova plugin add ../plugins/awesome-cordova-plugins/dist/@awesome-cordova-plugins/plugins/tensorflow-lite --link
```

這樣會將建立一個符號連結，而不是複製 Plugin 檔案，
這使您能夠直接在 App 中直接以原生環境修改 Plugin 程式碼。
