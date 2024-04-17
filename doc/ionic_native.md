# Ionic Native Developer Guide

[Ionic Native Developer Guide](https://github.com/ionic-team/ionic-native-google-maps/blob/master/DEVELOPER.md)

# 建立插件包裝器
首先，讓我們從模板建立一個新的插件包裝器開始。
```
// Call this command, and replace PluginName with the name of the plugin you wish to add
// Make sure to capitalize the first letter, or use CamelCase if necessary.
 
gulp plugin:create -n PluginName

// add -m flag to get a minimal template to start with
gulp plugin:create -m -n PluginName
```

運行上面的命令將建立一個新目錄
src/@ionic-native/plugins/plugin-name/，
其中包含一個檔案：index.ts.
該檔案是所有插件定義所在的位置。

讓我們來看看現有的 Geolocation 外掛程式包裝器，
看看 Ionic Native 外掛程式的內容（為了清楚起見，註解已被刪除）：

```
@Plugin({
  plugin: 'cordova-plugin-geolocation',
  pluginRef: 'navigator.geolocation'
})
@Injectable()
export class Geolocation {

  @Cordova()
  getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> { return; }

  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch'
  })
  watchPosition(options?: GeolocationOptions): Observable<Geoposition> { return; }
}
```

## 插件類別 Plugin Class
首先也是最重要的，我們想要建立一個代表我們插件的類，在本例中為 Geolocation。
```
@Injectable()
class Geolocation {

}
```

### Class Metadata
接下來，我們需要指定有關此插件的一些資訊。 Ionic Native 以TypeScript編寫，並使用稱為裝飾器(decorators)的功能。長話短說，裝飾器允許我們使用聲明性語法修改或添加資訊到類別和屬性中。

例如，@Plugin裝飾器將有關插件的資訊新增到我們的 Geolocation 類別中：
```
@Plugin({
  plugin: 'cordova-plugin-geolocation',
  pluginRef: 'navigator.geolocation'
})
@Injectable()
export class Geolocation {

}
```
這裡，plugin是npm上的插件包的名稱，調用時使用cordova plugin add。

pluginRefwindow指的是底層 Cordova 插件通常暴露的位置。例如，對於 Cordova Geolocation 插件，通常您會進行類似 的調用window.navigator.geolocation.getCurrentPosition({}, success, error)，因此pluginRef在本例中為navigator.geolocation。


## Ionic Native Decorators

### Plugin

用於包裝主插件類別, 以及將使用裝飾器
@Cordova 或 CordovaProperty 的任何其他類別的裝飾器。
此裝飾器接受以下配置：

- pluginName：插件名稱，這應該與類別名稱匹配
- plugin：插件的 NPM 包，或 Github URL（如果 NPM 不可用）。
- pluginRef：外掛程式物件引用。範例：「cordova.file」。
- repo：插件的 Github 儲存庫 URL
- install：（選用）安裝指令。這用於插件具有自訂安裝命令（採用變數）的情況。
- platforms：指示支援的平台的字串陣列。

### Cordova

在執行之前檢查插件和方法是否可用。預設情況下，
裝飾器會包裝函數的回調並傳回一個 Promise。
此裝飾器採用以下配置選項：

- observable：設定為 true 以傳回 Observable
- clearFunction：清除我們傳回的 observable 的方法的名稱(非必要)
- clearWithArgs：如果設定了clearFunction，則可以使用它。
	將其設為 true 可以使用初始函數中使用的相同參數呼叫clearFunction。
- sync：如果方法應原樣傳回值而不用 Observable/Promise 包裝，則設為 true 。
- callbackOrder ：如果成功回呼和錯誤回呼是此方法的前兩個參數，則設定為 reverse 。
- callbackStyle：如果外掛程式有一個具有節點樣式的回呼（例如：function(err, result){}），
		則設定為 node，
		或者如果回呼是物件的一部分，則設定為 object
- successName：成功函數屬性名稱。如果callbackStyle 設定為object，則必須設定此項。
- errorName：錯誤函數屬性名稱。如果callbackStyle 設定為object，則必須設定此項。
- successIndex：為成功回呼函數設定自訂索引。如果設定了callbackOrder 或callbackStyle，則此方法不起作用。
- errorIndex：為錯誤回呼函數設定自訂索引。如果設定了callbackOrder 或callbackStyle，則此方法不起作用。
- eventObservable：設為 true 以傳回包裝事件偵聽器的 observable
- event : 事件名稱，如果 eventObservable 設定為 true 則必須設定
- element : 附加事件監聽器的元素，這是可選的，預設為window
- otherPromise：如果包裝的方法回傳一個承諾，則設為 true
- platform：指示支援平台的字串陣列。如果支援的平台與插件的支援平台不匹配，請指定此項目。

[補充資料: Observable vs Promise](https://angular.io/guide/comparing-observables)

### 範例：

```
@Cordova()
someMethod(): Promise<any> { return; }

@Cordova({ sync: true })
syncMethod(): number { }
```

## CordovaProperty
在取得/設定屬性值之前檢查插件和屬性是否存在
(Checks if the plugin and property exist before getting/setting the property's value)

### 範例：
```
@CordovaProperty
someProperty: string;
```

## CordovaCheck
在執行自訂寫入方法之前檢查插件是否存在。
預設情況下，該方法將傳回一個承諾(promise)，如果插件不可用，該承諾將拒絕並顯示錯誤。此包裝器接受兩個可選配置：

Checks if the plugin exists before performing a custom written method. By default, the method will return a promise that will reject with an error if the plugin is not available. This wrapper accepts two optional configurations:

- observable: 設定為 true 以在插件不可用時傳回空的 Observable
- sync: 設定為 true 如果外掛程式不可用則不回傳任何內容

### 範例：
```
@CordovaCheck()
someMethod(): Promise<any> {
  // anything here will only run if the plugin is available
}
```

## CordovaFunctionOverride
Wrap a stub function in a call to a Cordova plugin, checking if both Cordova and the required plugin are installed.

### 範例：
```
@CordovaFunctionOverride()
someMethod(): Observable<any> { return; }
```
