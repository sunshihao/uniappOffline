package com.example.keepalive;

import android.util.Log;

import com.alibaba.fastjson.JSONObject;

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
//    @UniJSMethod(uiThread = true)
    public void test (String name) {
        Log.i("name", name);
    }
}