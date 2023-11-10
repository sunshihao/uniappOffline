package com.example.keepalive;

import android.app.Activity;
import android.app.ActivityManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;
import com.alibaba.fastjson.JSONObject;
import com.example.keepalive.bean.UniBackResponse;
import com.example.keepalive.service.ForegroundService;
import com.example.keepalive.utils.AutoStartSettingIntent;
import com.example.keepalive.utils.ServiceHelper;

import java.util.List;
import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

/**
 * Uniapp Android Alive 入口
 * */
public class KeepAlive extends UniModule {

    public Context context;

    /**
     * 基础联通性测试
     * */
    @UniJSMethod(uiThread = true)
    public void sayHi (String name, UniJSCallback callback) {
        UniBackResponse uniBackResponse;
        if (callback != null) {
            uniBackResponse = new UniBackResponse(true, "Hello word! Hi " + name, null);
            callback.invoke(uniBackResponse);
        }
    }

    /**
     * 测试程序入口
     * */
    @UniJSMethod(uiThread = true)
    public void startCS (UniJSCallback callback) {
        // 开启通知
        this.startService(callback);
        // 自启权限申请 成功
        // this.startAutostartSetting();
        // 忽略电池 成功
        // this.ignoreBattery();
    }

    /**
     * 开启前台服务
     * */
    @UniJSMethod(uiThread = true)
    public void startService (UniJSCallback callback) {
        UniBackResponse uniBackResponse;
        try{
            Context context = (Activity)mWXSDKInstance.getContext();
            Intent intent = new Intent(context, ForegroundService.class);
            context.startService(intent);
            if (callback != null) {
                uniBackResponse = new UniBackResponse(true, "前台服务开启成功", null);
                callback.invoke(uniBackResponse);
            }
        }catch (Error e){
            Log.e( "e", e.toString());
            if (callback != null) {
                uniBackResponse = new UniBackResponse(false, e.toString(), null);
                callback.invoke(uniBackResponse);
            }
        }
    }

    /**
     * 移除通知栏 但服务仍然存在
     * */
    @UniJSMethod(uiThread = true)
    public void removeNotification (UniJSCallback callback) {
        ServiceHelper.cancelNotice = true;
        this.startService(callback);
    }

    /**
     * 忽略电池
     * */
    @UniJSMethod(uiThread = true)
    public void ignoreBattery(UniJSCallback callback){
        UniBackResponse uniBackResponse;
        try{
            Context context = mWXSDKInstance.getContext();
            String packageName = context.getPackageName();
            Intent intent = new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS);
            intent.setData(Uri.parse("package:"+packageName));
            ((Activity) context).startActivityForResult(intent, 1);
            if (callback != null) {
                uniBackResponse = new UniBackResponse(true, "忽略电池计划成功", null);
                callback.invoke(uniBackResponse);
            }
        }catch (Error e){
            Log.e( "e", e.toString());
            if (callback != null) {
                uniBackResponse = new UniBackResponse(false, e.toString(), null);
                callback.invoke(uniBackResponse);
            }
        }
    }

    /**
     * 打开自启动权限设置页
     * */
    @UniJSMethod(uiThread = true)
    public void startAutostartSetting(UniJSCallback callback){
        UniBackResponse uniBackResponse;
        try{
            Context context = mWXSDKInstance.getContext();
            context.startActivity(AutoStartSettingIntent.getAutostartSettingIntent(context));
            // TODO 自启动权限检测及权限检测查看 对应警告
            if (callback != null) {
                uniBackResponse = new UniBackResponse(true, "自启动权限设置打开成功", null);
                callback.invoke(uniBackResponse);
            }
        }catch (Error e){
            Log.e( "e", e.toString());
            if (callback != null) {
                uniBackResponse = new UniBackResponse(false, e.toString(), null);
                callback.invoke(uniBackResponse);
            }
        }
    }

    /**
     * 锁后台并隐藏
     * */
    @UniJSMethod(uiThread = true)
    public void hideBackground(Boolean hide){
        // 获取上下文
        Context context = mWXSDKInstance.getContext();
        List<ActivityManager.AppTask> appTasks;
        ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);

        // TODO 语法检测
        appTasks = activityManager.getAppTasks();

        if(activityManager != null && appTasks.isEmpty() == false){
            appTasks.get(0).setExcludeFromRecents(hide);
        }
    }

    /**
     * 无障碍
     * */
    public void startAccessibilitySetting(UniJSCallback callback){
        UniBackResponse uniBackResponse;
        try{
            Context context = mWXSDKInstance.getContext();
            Intent intent = new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS);
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(intent);
            if (callback != null) {
                uniBackResponse = new UniBackResponse(true, "无障碍权限设置打开成功", null);
                callback.invoke(uniBackResponse);
            }
        }catch (Error e){
            Log.e( "e", e.toString());
            if (callback != null) {
                uniBackResponse = new UniBackResponse(false, e.toString(), null);
                callback.invoke(uniBackResponse);
            }
        }
    }

}