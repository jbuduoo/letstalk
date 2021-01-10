package com.carrefour.springbootdemo.controller.example;

import org.apache.http.Header;
//import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
//import org.apache.http.util.EntityUtils;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;

// 所有方法都回傳數據給瀏覽器，如果回傳是Object則轉換為JSON
@ResponseBody
@Controller
public class VpcController {
    Logger logger = LoggerFactory.getLogger(VpcController.class);

    @RequestMapping("/vpc/filecenter")
    public Map<String, Object> test() {

        org.apache.http.client.HttpClient httpClient= HttpClients.createDefault();
        HttpResponse httpResponse = null;
        Map<String, Object> result = new HashMap<String, Object>();
        HttpGet httpGet=new HttpGet("http://10.142.254.3/");
//        HttpGet httpGet=new HttpGet("https://www.carrefour.com.tw/console/api/v1/system/configs");

        try{

            long startTime = System.currentTimeMillis();
            httpResponse = httpClient.execute(httpGet);
            long elapsedTime = System.currentTimeMillis() - startTime;

            result.put("elapsedTime", elapsedTime);

//            HttpEntity httpEntity=httpResponse.getEntity();
//            if(httpEntity!=null){
//                result= EntityUtils.toString(httpEntity,"utf-8");
//            }
            //Header[] headers = httpResponse.getHeaders("X-Client-IP");
            for (Header header : httpResponse.getAllHeaders()) {
                logger.info(header.getName() + '=' + header.getValue());
                result.put(header.getName(), header.getValue());
            }
//            String[] clientIp = new String[headers.length];


//            result.put("X-Client-IP", clientIp);
//            result.put("X-Vm", new String[httpResponse.getHeaders("X-Vm").length]);
            return result;
        }catch (IOException e){
            e.printStackTrace();
        }

        return  result;
    }
}
