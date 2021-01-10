package com.carrefour.springbootdemo.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.*;

// 所有方法都回傳數據給瀏覽器，如果回傳是Object則轉換為JSON
@ResponseBody
@Controller
public class HelloController  extends TimerTask{
    
    String[]googleMeet={"https://meet.google.com/uks-ejza-rrk",
                        "https://reurl.cc/Dv1vWe",
                        "https://meet.google.com/baw-fstx-xbt",
                        "https://meet.google.com/ecw-udsq-mzt",
                        "https://meet.google.com/kir-ddof-wve",
                        "https://meet.google.com/ejb-pdsr-bwo",
                        "https://meet.google.com/uhs-tjzz-bbs",
                        "https://meet.google.com/csu-nrjp-yqx",
                        "https://meet.google.com/igv-skby-kga"};

    int num;
    public void run(){
		if(num%2==1){
            num++;
            System.out.println("num"+num);
        }
    }
    
    @RequestMapping(value = "/hello3")
    public void hello3(HttpServletResponse response) throws IOException {
        if(num>googleMeet.length){  
            num=0;
        }else{
            num=num+1;
            // if(num%2==1){
            //     //設定計時器
            //     //第一個參數為"欲執行的工作",會呼叫對應的run() method
            //     //第二個參數為程式啟動後,"延遲"指定的毫秒數後"第一次"執行該工作
            //     //第三個參數為每間隔多少毫秒執行該工作
        	// 	timer.schedule(new HelloController(),10000, 10);

            // }
            System.out.println("num"+num);
        }
        response.sendRedirect(googleMeet[num/2]);

    }
    @RequestMapping(value = "/hello")
    public String hello() throws IOException {
        return "hello jacky";

    }
}
