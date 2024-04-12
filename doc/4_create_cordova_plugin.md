# Cordova Plugin Native 部分

參考: [5 分鐘創建 Cordova Plugin 教學，超完整手把手開發環境範例](https://www.blogbrb.com/posts/skillshare/create-cordova-plugin-5-minutes/)

[Cordova Custom Plugin easy than expected with ionic wrapper](https://medium.com/@martinchuka/cordova-custom-plugin-easy-than-expected-with-ionic-wrapper-51d8c8bb082c)

```
sudo npm i -g plugman
```

創建一個 cordova plugin 專案，參數--name 會成為資料夾名稱以及 java class name

```
cd ./src/plugins
plugman create --name StandSitPlugin --plugin_id "cordova-plugin-standsit-plugin" --plugin_version 0.0.1
```

cd 到 cordova plugin 專案目錄下，
並加上 android 平台支持

```
cd StandSitPlugin
plugman platform add --platform_name android
```

建立 package.json 檔案，並輸入相關資訊 (.代表當前目錄)

```
plugman createpackagejson .
```

實際狀況:

```
(base) yang:StandSitPlugin$ plugman createpackagejson .
EACCES: permission denied, open '/usr/lib/node_modules/plugman/node_modules/cordova-lib/src/plugman/defaults.json'
(base) yang:StandSitPlugin$ sudo plugman createpackagejson .
[sudo] password for yang:
name: (cordova-plugin-standsit-plugin)
version: (0.0.1)
description: Stand Sit Judge
git repository:
author: Yang
license: (ISC)
About to write to ./src/plugins/StandSitPlugin/package.json:

{
  "name": "cordova-plugin-standsit-plugin",
  "version": "0.0.1",
  "description": "Stand Sit Judge",
  "cordova": {
    "id": "cordova-plugin-standsit-plugin",
    "platforms": [
      "android"
    ]
  },
  "keywords": [
    "ecosystem:cordova",
    "cordova-android"
  ],
  "author": "Yang",
  "license": "ISC"
}


Is this OK? (yes)

```

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
ionic cordova platform add android@12
```

# Cordov Plugin 官網說明

官網: [Create a Plugin](https://cordova.apache.org/docs/en/12.x/guide/hybrid/plugins/index.html)

## Plugin 安裝方式

### 透過 GitHub

以 Plugin 的 GitHub 網址:

```
cordova plugin add https://github.com/apache/cordova-plugin-device
```

### 透過 npm

如果插件發佈到 npm，則該指令也可以接收套件名稱作為參數：

```
cordova plugin add https://github.com/apache/cordova-plugin-device
```

## Device plugin 的 plugin.xml

```
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="cordova-plugin-device" version="0.2.3">
    <name>Device</name>
    <description>Cordova Device Plugin</description>
    <license>Apache 2.0</license>
    <keywords>cordova,device</keywords>
    <js-module src="www/device.js" name="device">
        <clobbers target="device" />
    </js-module>
    <platform name="ios">
        <config-file target="config.xml" parent="/*">
            <feature name="Device">
                <param name="ios-package" value="CDVDevice"/>
            </feature>
        </config-file>
        <header-file src="src/ios/CDVDevice.h" />
        <source-file src="src/ios/CDVDevice.m" />
    </platform>
</plugin>
```

- 最上層的 plugin 標籤的 id 屬性，通常遵循 cordova-plugin-{plugin name}架構，並與插件的 npm 套件名稱相符。
- js-module 標記指定 [common JavaScript interface](https://cordova.apache.org/docs/en/12.x/guide/hybrid/plugins/index.html#the-javascript-interface) 的路徑。
- platform 標籤指定對應的平台 native code。本例中為 ios。
- config-file 標籤封裝了一個 feature 標籤，該標籤將會被注入到特定於平台的 config.xml 檔案中，以使平台能夠識別附加的程式碼庫。
- header-file 標籤和 source-file 標籤指定庫組件文件的路徑。

## JavaScript 介面

JavaScript 介面提供了前端接口，這使得它可能是插件中最重要的部分。
您可以根據自己的喜好建立插件的 JavaScript，但需要 cordova.exec 使用以下語法進行呼叫，以與原生平台進行通訊：

```
cordova.exec(function(winParam) {},
             function(error) {},
             "service",
             "action",
             ["firstArgument", "secondArgument", 42, false]);
```

以下是每個參數的工作原理：

- function(winParam) {}：成功回呼函數。假設您的 exec 呼叫成功完成，該函數將與您傳遞給它的任何參數一起執行。

- function(error) {}：錯誤回呼函數。如果操作未成功完成，則函數將使用可選的錯誤參數執行。

- "service"：原生端呼叫的 service 名稱。這對應於原生類別( native class )，有關該類的更多信息，請參閱下面列出的原生指南。

- "action"：在原生端呼叫的 action 名稱。這通常對應於原生類別方法( native class method )。請參閱下面列出的原生指南。

- [/* arguments */]：要傳遞到原生環境的參數陣列。

## JavaScript 範例

此範例顯示了實作插件 JavaScript 介面的一種方法：

```
window.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [str]);
};
```

在此範例中，插件將自身 window 作為 echo 函數附加的對象，
插件使用者將如下呼叫該函數：

```
window.echo("echome", function(echoValue) {
    alert(echoValue == "echome"); // should alert true.
});
```

查看傳遞給 cordova.exec 函數的最後三個參數。

- 第一個呼叫 Echo 服務，一個類別名稱。
- 第二個請求 echo action，這是該類別中的一個方法。
- 第三個是包含 echo 字串的參數數組，它是 window.echo 函數的第一個參數。

傳入的成功回呼 exec 只是對 的回呼函數的參考 window.echo。如果原生平台觸發錯誤回調，它只需呼叫成功回調並向其傳遞預設字串。

## 原生介面

一旦為插件定義了 JavaScript，您就需要使用至少一種原生實作對其進行補充。
以下列出了每個平台的詳細信息，每個平台都基於上面的簡單 Echo 插件範例構建：

- 安卓插件
- iOS 外掛
- Windows 外掛

## 在開發過程中測試插件

在開發過程中手動測試插件最簡單的方法
是照常建立 Cordova 應用程式
並使用以下--link 選項新增插件：

```
cordova plugin add ../path/to/my/plugin/relative/to/project --link
```

這將創建一個符號連結，而不是複製插件文件，
這使您能夠處理插件，
然後只需重建應用程式即可使用您的變更。

## 使用 Plugman 驗證插件

您可以使用該 plugman 工具程式，檢查插件是否針對每個平台正確安裝。
plugman 使用以下 node 指令安裝：

```
npm install -g plugman
```

您需要一個有效的應用程式來源目錄，例如預設 CLI 產生的專案之中包含的最上層 www 目錄，
如: "建立您的第一個應用程式指南"中所述。

然後執行以下命令來測試 iOS 依賴項是否正確載入：

```
plugman install --platform ios --project /path/to/my/project/www --plugin /path/to/my/plugin
```

有關 plugman 選項的詳細信息，請參閱使用 Plugman 管理插件。
有關如何實際調試插件的信息，請參閱上面列出的每個平台的原生介面。

## 發布插件

您可以將外掛程式發佈到任何 npmjs 基於註冊表的註冊表，
但建議的註冊表是 npm 註冊表。
其他開發人員可以使用 plugman Cordova CLI 自動安裝您的 plugin。

要將外掛程式發佈到 npm，您需要執行以下步驟：

- 安裝 plugmanCLI：

```
$ npm install -g plugman
```

- package.json 為您的外掛程式建立一個檔案：

```
$ plugman createpackagejson /path/to/your/plugin
```

- 發布它：

```
$ npm adduser # 當你還沒有帳號的時候
$ npm publish /path/to/your/plugin
```

有關 npm 使用的更多詳細信息，
請參閱 npm 文檔網站上的發布 npm 套件。

## 與插件搜尋整合

若要在 [Cordova 插件搜尋](https://cordova.apache.org/plugins/) 中顯示插件，
請在發布之前將關鍵字 ecosystem:cordova 新增至插件的 package.json 檔案。

若要指示對特定平台的支持，請將格式中的關鍵字新增 cordova-<platformName>至 中的關鍵字清單 package.json。 Plugman 的 createpackagejson 命令會為您完成此操作，但如果您沒有使用它來生成 package.json，您應該手動編輯它，如下所示。

例如，對於支援 Android、iOS 和 Windows 的插件，其中的關鍵字 package.json 應包括：

```
"keywords": [
"ecosystem:cordova",
"cordova-android",
"cordova-ios",
"cordova-windows"
]
```

有關 package.json 的更詳細範例，請查看 [cordova-plugin-device 的 package.json 檔案](https://github.com/apache/cordova-plugin-device/blob/master/package.json)。

## 指定 Cordova 依賴項

Cordova 6.1.0 新增了將插件的 Cordova 相關依賴項指定為插件 package.json 檔案的一部分的支援。
插件可能會列出多個版本的依賴項，以便在 Cordova CLI 選擇從 npm 取得的插件版本時為它提供指導。
CLI 將選擇與本地專案安裝的平台和插件以及本地 Cordova CLI 版本相容的最新版本的插件。
如果沒有相容的外掛程式版本，CLI 將警告使用者有關失敗的要求，並回退到取得最新版本的舊行為。

此功能旨在最終取代 plugin.xml 中的 engines 元素。列出依賴項是確保您的外掛程式
在從 npm 取得時不會出現損壞或導致建置錯誤的好方法。
如果最新版本的插件與項目不相容，CLI 將為應用程式開發人員提供未滿足的項目要求列表，
以便他們了解不相容性並可以更新其項目以支援您的插件。
這使您的外掛程式能夠響應重大更改，
而不必擔心對舊平台和外掛程式進行建置的開發人員感到困惑。

若要為外掛程式指定與 Cordova 相關的依賴項，請變更 engines 中的元素 package.json 以包含 cordovaDependencies 具有下列結構的物件：

```
"engines": {
    "cordovaDependencies": {
        PLUGIN_VERSION: {
            DEPENDENCY: SEMVER_RANGE,
            DEPENDENCY: SEMVER_RANGE,
            ...
        },
        ...
    }
}
```

- PLUGIN_VERSION 指定您的插件的版本。
  它應該遵循 npm 的 semver 套件定義的單一版本的語法或上限（見下文）
  DEPENDENCY 可能是以下其中之一：
  - Cordova CLI："cordova"
  - Cordova 平台："cordova-android"、"cordova-ios"、"cordova-windows"等。
  - 另一個 Cordova 插件："cordova-plugin-camera"等等。
- SEMVER_RANGE 應遵守 npm 的 semver 套件定義的範圍語法

_注意_： Cordova 平台 DEPENDENCY 指的是 Cordova 平台，而不是作業系統，即 cordova-androidAndroid 作業系統。

您 cordovaDependencies 可以列出任意數量的 PLUGIN_VERSION 要求
和任意數量的 DEPENDENCY 限制。
沒有列出依賴項的插件版本
將被假定具有與 PLUGIN_VERSION 下面列出的最高版本相同的依賴項資訊。

例如，考慮以下條目：

```
"engines": {
    "cordovaDependencies": {
        "1.0.0": { "cordova-android": "<3.0.0"},
        "2.1.0": { "cordova-android": ">4.0.0"}
    }
}
```

假設最低條目以下的所有插件版本（本例中為 1.0.0）沒有依賴項。
1.0.0 和 2.1.0 之間的任何版本的插件都假定具有與版本 1.0.0 相同的依賴項（cordova-android 版本低於 3.0.0）。
這使您可以僅 cordovaDependencies 在發生重大更改時更新您的資訊。

## 上限

除了單一版本之外，PLUGIN*VERSIONincordovaDependencies 還可以指定上限來修改插件舊版的條目。
當 a 中發生重大變更 DEPENDENCY 並且必須為不支援它的所有舊版本外掛程式新增約束時，這非常有用。
這些界限應該寫成後面跟著<單一 semver 版本（*不是任意範圍！\_）。
這將應用 DEPENDENCY 給定版本低於指定版本的所有插件版本的任何值。
例如，考慮以下條目：

```
"engines": {
    "cordovaDependencies": {
        "0.0.1":  { "cordova-ios": ">1.0.0" },
        "<1.0.0": { "cordova-ios": "<2.0.0" },
        "<2.0.0": { "cordova-ios": "<5.0.0" }
    }
}
```

這裡我們指定一個插件版本（0.0.1）和兩個限制 cordova-ios 的上限（<1.0.0 和 <2.0.0）。
兩個上限不會覆蓋 0.0.1 的約束，它們在評估時透過 AND 組合。
當 CLI 檢查專案的 cordova-ios 版本時，將評估插件版本 0.0.1 的限制將是這三個的組合：

```
    cordova-ios >1.0.0 AND cordova-ios <2.0.0 AND cordova-ios <5.0.0
```

請注意，唯一 PLUGIN_VERSION 允許的值是單一版本或上限；不支援其他 semver 範圍。
