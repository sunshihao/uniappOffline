package com.example.keepalive;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.service.notification.StatusBarNotification;
import android.util.Log;

import androidx.core.app.NotificationCompat;

import com.taobao.weex.common.WXModule;

import io.dcloud.feature.uniapp.UniSDKInstance;
import io.dcloud.feature.uniapp.common.UniModule;

public class ForegroundNotification extends KeepAlive {

    private String CHANNEL_FOREGROUND = "foreground-notification";
    private Service service = null;
    private int NOTICE_ID = 2333;

    private Context context;


//    ForegroundNotification(Context context){
//        this.context = context;
//    }
    private void createChannelIfNeeded(Context context){

        // 创建创建通知渠道 https://developer.android.com/develop/ui/views/notifications/channels?hl=zh-cn#java
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            NotificationChannel foregroundChannel = new NotificationChannel(this.CHANNEL_FOREGROUND, "前台服务", NotificationManager.IMPORTANCE_MIN);

            foregroundChannel.setShowBadge(false);
            foregroundChannel.enableLights(false);
            foregroundChannel.enableVibration(false);
            foregroundChannel.setLockscreenVisibility(Notification.VISIBILITY_SECRET);

            // 切换成JAVA写法
            NotificationManager notificationManager = context.getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(foregroundChannel);
        }
    }

    // 变更为传入指定的activity
    public void startForeground(Service service){

        this.service = service;
        createChannelIfNeeded(service);

//        UniSDKInstance uniSDKInstance = new UniSDKInstance();
//        Context xcontext = uniSDKInstance.getContext();

//        Activity activity = (Activity) this.mWXSDKInstance.getContext();
//
//        Log.i("aaaxxx22", activity + "");
//
//        Log.i("aaaxxx", xcontext + "");
//
//        Log.i("aaaxxx111", this.context + "");

        // 居然是這樣

        PendingIntent pendingIntent = PendingIntent.getActivity(service,0, new Intent(service, service.getClass()), PendingIntent.FLAG_UPDATE_CURRENT);

        Notification notification = new NotificationCompat.Builder(service, this.CHANNEL_FOREGROUND).setContentText("提示内容")
                .setContentIntent(pendingIntent)
                .setLocalOnly(true)
                .setPriority(NotificationCompat.PRIORITY_MIN)
                .setCategory(NotificationCompat.CATEGORY_SERVICE)
                .setVisibility(NotificationCompat.VISIBILITY_SECRET)
                .setOngoing(true)
                .setShowWhen(false)
                .build();

        service.startForeground(this.NOTICE_ID, notification);

    }

    public void stopForeground(Service service){
        NotificationManager manager = (NotificationManager)service.getSystemService(Service.NOTIFICATION_SERVICE);
        // TODO 难为我胖虎
        manager.cancel(this.NOTICE_ID);
        service.stopForeground(true);
    }

    public void startForegroundIfNeed(Service service){
        NotificationManager manager = (NotificationManager)service.getSystemService(Service.NOTIFICATION_SERVICE);
        boolean needStart = true;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            for (StatusBarNotification activeNotification : manager.getActiveNotifications()) {
                if(activeNotification.getId() == this.NOTICE_ID){
                    needStart = false;
                }
            }
        }

        if (needStart) {
            this.startForeground(service);
        }
    }
}
