package com.example.keepalive.service;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.os.SystemClock;
import android.util.Log;
import androidx.annotation.Nullable;
import com.example.keepalive.utils.ForegroundNotification;

/**
 * 启用两个service，共享同一个NotificationID，并且将他们同时置为前台状态，
 * 此时会出现两个前台服务，但通知管理器里只有一个关联的通知。
 * 这时我们在其中一个服务中调用 stopForeground(true)，
 * 这个服务前台状态会被取消，同时状态栏通知也被移除。另外一个服务并没有受到影响，还是前台服务状态，但是此时，状态栏通知已经没了！
 * 其oom_adj值还是没变的
 * */
public class CancelNoticeService extends Service {
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {

        Service that = this;

        if(intent == null){
            return START_NOT_STICKY;
        }

        new ForegroundNotification().startForeground(this);

        new Thread(new Runnable() {
            @Override
            public void run() {
                SystemClock.sleep(1000);
                Log.d("ForegroundService", "CancelNoticeService onStartCommand: CancelNoticeService" );
                new ForegroundNotification().stopForeground(that);
            }
        }).start();

        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.d("ForegroundService", "onDestroy: CancelNoticeService");
    }
}
