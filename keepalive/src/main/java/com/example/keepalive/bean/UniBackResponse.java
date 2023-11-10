package com.example.keepalive.bean;

import org.json.JSONObject;

/**
 * Uni 定义返回结构体
 * */
public class UniBackResponse extends JSONObject {

    public static int RES_SUCCESS = 101;

    public static int RES_ERROR = 500;

    public UniBackResponse(Boolean success, String message, Object data){
        this.success = success;
        if(success){
            this.code = this.RES_SUCCESS;
        }else {
            this.code = this.RES_ERROR;
        }
        this.message = message;
        this.data = data;
    }

    private int code;

    private Object data;

    private String message;

    private Boolean success;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }
}
