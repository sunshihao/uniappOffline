package com.example.keepalive;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Build;
import android.preference.PreferenceManager;
import android.provider.Settings;
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

    /**7
     * 测试主程序调用
     * */
    @UniJSMethod(uiThread = true)
    public void startServiceNew (UniJSCallback callback) {

        // 开启通知
        this.startService(callback);

        // 自启权限申请 成功
//        this.startAutostartSetting();

        // 忽略电池 成功
//        this.ignoreBattery();
    }

    @UniJSMethod(uiThread = true)
    public void startService (UniJSCallback callback) {
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

    /**
     * 忽略电池
     * */
    @UniJSMethod(uiThread = true)
    public void ignoreBattery(){
        Context context = mWXSDKInstance.getContext();
        String packageName = context.getPackageName();
        Intent intent = new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS);
        intent.setData(Uri.parse("package:"+packageName));
        ((Activity) context).startActivityForResult(intent, 1);
    }

    /**
     * 自启动
     * */
    @UniJSMethod(uiThread = true)
    public void startAutostartSetting(){
        Context context = mWXSDKInstance.getContext();
        context.startActivity(this.getAutostartSettingIntent(context));
    }

    public Intent getAutostartSettingIntent(Context context){
        ComponentName componentName = null;

        String brand = Build.MANUFACTURER;

        Intent intent = new Intent();

        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        String packageName = context.getPackageName();

        if(brand.toLowerCase() == "samsung"){
            componentName = new ComponentName("com.samsung.android.sm",
                    "com.samsung.android.sm.app.dashboard.SmartManagerDashBoardActivity");
        }else if(brand.toLowerCase() == "yulong" || brand.toLowerCase() == "360" ){
            componentName = new ComponentName(   "com.yulong.android.coolsafe",
                    "com.yulong.android.coolsafe.ui.activity.autorun.AutoRunListActivity");
        }else if(brand.toLowerCase() == "oneplus"){
            componentName = new ComponentName(    "com.oneplus.security",
                    "com.oneplus.security.chainlaunch.view.ChainLaunchAppListActivity");
        }else if(brand.toLowerCase() == "letv"){

            intent.setAction("com.letv.android.permissionautoboot");
            intent.setAction("android.settings.APPLICATION_DETAILS_SETTINGS");
            intent.setData(Uri.fromParts("package", packageName, null));
        }else if(brand.toLowerCase() == "huawei" || brand.toLowerCase() == "honor"){
            componentName = new ComponentName(
                    "com.huawei.systemmanager",
                    "com.huawei.systemmanager.appcontrol.activity.StartupAppControlActivity"
            );
        }else if(brand.toLowerCase() == "xiaomi" || brand.toLowerCase() == "redmi"){
            componentName = new ComponentName(
                    "com.miui.securitycenter",
                    "com.miui.permcenter.autostart.AutoStartManagementActivity"
            );
        }else if(brand.toLowerCase() == "vivo"){
            componentName = new ComponentName(
                    "com.iqoo.secure",
                    "com.iqoo.secure.ui.phoneoptimize.AddWhiteListActivity"
            );
        }else if(brand.toLowerCase() == "oppo" || brand.toLowerCase() == "realme"){
            componentName = new ComponentName(
                    "com.coloros.oppoguardelf",
                    "com.coloros.powermanager.fuelgaue.PowerUsageModelActivity"
            );
        }else if(brand.toLowerCase() == "meizu"){
            componentName =
                   new ComponentName("com.meizu.safe", "com.meizu.safe.permission.SmartBGActivity");
        }else {
            intent.setAction("android.settings.APPLICATION_DETAILS_SETTINGS");
            intent.setData(Uri.fromParts("package", packageName, null));
        }
        intent.setComponent(componentName);
        return intent;
    }
}