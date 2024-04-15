package cordova.plugin.hello_world;

import android.widget.Toast;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class HelloWorldPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("nativeToast")) {
            // String message = args.getString(0);
            // this.coolMethod(message, callbackContext);
            this.nativeToast();
            return true;
        }
        return false;
    }
/*
    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
*/
    private void nativeToast() {
      Toast.makeText(
                      webView.getContext(),
                      "Hello World Cordova Plugin",
                      Toast.LENGTH_SHORT)
                      .show();
    }

}
