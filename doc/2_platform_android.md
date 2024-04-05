# 產生 ionic android platform

```
cd ~/github/ionic7_demo/src/aTabs7
ionic cordova platform add android@12
```

## 偵錯連線
```
adb pair ip:port code
adb connect ip:port
```

### 查看連線裝置
```
adb devices
```


## 偵錯 Live Reload 開發
```
ionic cordova run android --device -l
```
按 Ctrl+C 可以中止執行


## 打包 APK

### 預設為 debug mode
```
ionic cordova build android
```

### 打包上架
(需先建立加密程式用的 keystore )
```
ionic cordova build android --release --prod
```

