package com.example.keepalive.utils;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;

/**
 * 自启动机型对应Intent
 * */
public class AutoStartSettingIntent {

    public static Intent getAutostartSettingIntent(Context context){
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
