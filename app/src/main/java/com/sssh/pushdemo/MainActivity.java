package com.sssh.pushdemo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;


//import com.example.keepalive.KeepAlive;
import com.example.keepalive.KeepAlive;
import com.sssh.keepalive.R;

//import com.netease.nimlib.sdk.NIMClient;
//import com.netease.nimlib.sdk.Observer;
//import com.netease.nimlib.sdk.lifecycle.SdkLifecycleObserver;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        new KeepAlive().startServiceNew(this);

//        NIMClient.getService(SdkLifecycleObserver.class).observeMainProcessInitCompleteResult(new Observer<Boolean>() {
//            @Override
//            public void onEvent(Boolean aBoolean) {
//                if (aBoolean != null && aBoolean) {
//                    // 主进程初始化完毕，可以开始访问数据库
//
//                }
//            }
//        }, true);

    }
}