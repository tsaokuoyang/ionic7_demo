package cordova.plugin.hello_world_k;

import android.widget.Toast;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class toast a string called from JavaScript.
 */
class HelloWorldKPlugin : CordovaPlugin() {

    override fun execute(action: String, args: JSONArray, callbackContext: CallbackContext): Boolean {
        if (action == "nativeToast") {
            try {
                val message: String = args.getString(0)
                nativeToast(message, callbackContext)
                callbackContext.success()
                return true
            } catch (e: JSONException) {
                e.printStackTrace()
                callbackContext.error("JSON Exception")
                return false
            }
        }
        return false
    }

    private fun nativeToast(message: String, callbackContext: CallbackContext) {
        Toast.makeText(webView.getContext(), message, Toast.LENGTH_SHORT).show()
    }

}
