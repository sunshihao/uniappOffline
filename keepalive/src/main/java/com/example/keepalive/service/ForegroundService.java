package com.example.keepalive.service;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;

import androidx.annotation.Nullable;

import com.example.keepalive.utils.ForegroundNotification;
import com.example.keepalive.utils.ServiceHelper;

import java.util.Timer;
import java.util.TimerTask;

// 可执行前台服务
public class ForegroundService extends Service {

    private Timer timer;

    private int logInt = 0;

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        new ForegroundNotification().startForeground(this);

        this.timer = new Timer();

        this.timer.schedule(new TimerTask() {
            @Override
            public void run() {
                Log.d("ForegroundService", "Timer task " + logInt++);
            }
        }, 0L, 1000L);

    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if(intent == null){
            //服务被系统kill掉之后重启进来的
            return START_NOT_STICKY;
        }
        new ForegroundNotification().startForegroundIfNeed(this);
        if (ServiceHelper.cancelNotice) {
            Log.d("ForegroundService", "onStartCommand: CancelNoticeService");
            Intent intentCancel = new Intent(this, CancelNoticeService.class);
            startService(intentCancel);
        }
        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.d("ForegroundService", "onDestroy: " + this.timer);
        this.timer.cancel();
        new ForegroundNotification().stopForeground(this);
    }
}
