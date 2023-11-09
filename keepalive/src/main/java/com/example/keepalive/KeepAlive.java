package com.example.keepalive;

import android.app.Activity;
import android.content.Context;
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

    GlobalParams globalParams = new GlobalParams();

    public Context context;

    // 对外开发获取activity
    @UniJSMethod(uiThread = true)
    public Activity getActivity(){
//        Log.i("aaa", this.globalParams.getActivity().toString());
        if(this.globalParams.getActivity()!=null){
            return this.globalParams.getActivity();
        }else {
            Activity activity = (Activity)mUniSDKInstance.getContext();
            Log.i("getActivity", activity.toString());
            return activity;
        }
    }

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
    public void startServiceNew (UniJSCallback callback) {
        try{
            Context activity = (Activity)mWXSDKInstance.getContext();

            this.context = mWXSDKInstance.getContext();

            Log.i("activity", activity.toString());

            Intent intent = new Intent(activity, ForegroundService.class);

            activity.startService(intent);

            if (callback != null) {
                JSONObject data = new JSONObject();
                data.put("code", 1001);
                data.put("success", true);
                callback.invoke(data);
            }
        }catch (Error e){
            Log.e( "e---", e.toString());
            if (callback != null) {
                JSONObject data = new JSONObject();
                data.put("code", 1002);
                data.put("success", false);
                data.put("error", e.toString());
                callback.invoke(data);
            }
        }
    }
}