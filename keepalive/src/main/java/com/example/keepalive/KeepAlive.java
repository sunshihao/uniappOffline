package com.example.keepalive;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.util.Log;

import com.alibaba.fastjson.JSONObject;
import com.example.keepalive.bean.GlobalParams;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

public class KeepAlive extends UniModule {
    @UniJSMethod(uiThread = true)
    public void sayHi (String name, UniJSCallback callback) {
        if (callback != null) {
            JSONObject data = new JSONObject();
            data.put("re", "Hi " + name);
            callback.invoke(data);
        }
    }

    /**
     * 测试主程序调用
     * */
    @UniJSMethod(uiThread = true)
    public void startServiceNew (Activity activity) {

        Log.i("sssh", "999999999999999");

        new GlobalParams().setActivity(activity);


        Log.i("-------", "XXXXX");
        Intent intent = new Intent(activity, ForegroundService.class);
        activity.startService(intent);
    }
}