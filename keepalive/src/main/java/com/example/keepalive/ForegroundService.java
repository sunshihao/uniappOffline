package com.example.keepalive;

import android.app.Activity;
import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;

import androidx.annotation.Nullable;

import com.example.keepalive.bean.GlobalParams;

import java.util.Timer;
import java.util.TimerTask;

// 可执行前台服务
public class ForegroundService extends Service {

    private Timer timer;

    Activity activity = new GlobalParams().getActivity();;

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        new ForegroundNotification().startForeground(this, activity);

        this.timer = new Timer();

        this.timer.schedule(new TimerTask() {
            @Override
            public void run() {
                Log.d("ForegroundService", "Timer task ${logInt++}");
            }
        }, 0L, 1000L);

    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if(intent == null){
            return START_NOT_STICKY;
        }

        new ForegroundNotification().startForegroundIfNeed(this, activity);

        // TODO 难为我胖虎

        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();

        Log.d("ForegroundService", "onDestroy: $timer");

        this.timer.cancel();
        new ForegroundNotification().stopForeground(this);
    }
}
