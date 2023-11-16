package com.example.keepalive.service;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.location.LocationListener;
import android.location.LocationManager;
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

    private LocationManager locationManager;


    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        Context context = this;

        new ForegroundNotification().startForeground(this);

        this.timer = new Timer();

        String kPackage = getPackageName();
        Intent launchIntent = getPackageManager().getLaunchIntentForPackage(kPackage);
        String className = launchIntent.getComponent().getClassName();
        Log.i("----", className);
        Class clazz = null;

        try {
            clazz = Class.forName(className);
        } catch (Error | ClassNotFoundException e) {

        }


//        if (ActivityCompat.checkSelfPermission(clazz, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED)
//        {
//            // 申请权限
//            ActivityCompat.requestPermissions(clazz, new String[] {Manifest.permission.ACCESS_FINE_LOCATION}, 100);
//        }

        Class finalClazz = clazz;
        this.timer.schedule(new TimerTask() {
            @Override
            public void run() {
                locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);

                Log.d("9090", locationManager.toString());

                String kPackage = getPackageName();
                Intent launchIntent = getPackageManager().getLaunchIntentForPackage(kPackage);
                String className = launchIntent.getComponent().getClassName();
                Log.i("----", className);
                Class clazzIn = null;

                try {
                    clazzIn = Class.forName(className);
                } catch (Error | ClassNotFoundException e) {

                }

                // 启动位置请求
                // LocationManager.GPS_PROVIDER GPS定位
                // LocationManager.NETWORK_PROVIDER 网络定位
                // LocationManager.PASSIVE_PROVIDER 被动接受定位信息
//                if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
//                    // TODO: Consider calling
//                    //    ActivityCompat#requestPermissions
//                    // here to request the missing permissions, and then overriding
//                    //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
//                    //                                          int[] grantResults)
//                    // to handle the case where the user grants the permission. See the documentation
//                    // for ActivityCompat#requestPermissions for more details.
//                    return;
//                }
                locationManager.requestLocationUpdates(LocationManager.PASSIVE_PROVIDER, 0L, (float) 0, (LocationListener) context);


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
