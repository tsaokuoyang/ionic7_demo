
[How to write Cordova Plugins](https://medium.com/ionic-and-the-mobile-web/how-to-write-cordova-plugins-864e40025f2)

[Build your first Cordova plugin for Ionic Native](https://medium.com/@sangkhim/build-your-first-cordova-plugin-for-ionic-native-38d29a170145)

[Creating a Cordova Android Plugin in Kotlin](https://medium.com/the-web-tub/creating-a-cordova-android-plugin-in-kotlin-dc76df9106bf)

[Android Plugin Development Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/plugin.html)


[How to return data from activity to Cordova plugin](https://stackoverflow.com/questions/27898617/how-to-return-data-from-activity-to-cordova-plugin)


```
cp -R dist/@awesome-cordova-plugins/plugins/hello-world ../testApp/node_modules/@awesome-cordova-plugins/
cp -R dist/@awesome-cordova-plugins/plugins/hello-world-k ../testApp/node_modules/@awesome-cordova-plugins/
cp -R dist/@awesome-cordova-plugins/plugins/tensorflow-lite ../testApp/node_modules/@awesome-cordova-plugins/

cordova plugin add ../HelloWorldPlugin --link
cordova plugin add ../HelloWorldKPlugin --link
cordova plugin add ../cordova-plugin-tensorflow-lite --link
```