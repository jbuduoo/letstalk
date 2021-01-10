package com.carrefour.springbootdemo.controller.example;

import javax.servlet.http.HttpServletRequest;
import com.carrefour.springbootdemo.model.ResponseModel;
import com.carrefour.springbootdemo.utilities.HttpRequestUtility;
import org.apache.commons.codec.digest.DigestUtils;

import org.apache.http.NameValuePair;
// import org.apache.http.HttpEntity;
// import org.apache.http.client.ClientProtocolException;
// import org.apache.http.client.methods.CloseableHttpResponse;
// import org.apache.http.client.methods.HttpPost;
// import org.apache.http.client.utils.URIBuilder;
// import org.apache.http.entity.StringEntity;
// import org.apache.http.impl.client.CloseableHttpClient;
// import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
// import org.apache.http.util.EntityUtils;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

// import java.io.IOException;
// import java.net.URI;
// import java.net.URISyntaxException;
import java.util.*;

// 所有方法都回傳數據給瀏覽器，如果回傳是Object則轉換為JSON
@ResponseBody
@Controller
@RequestMapping("/api/v1/oca")
public class OcaController {

    // 取得body, param 的方式 1. 先定義一個model
    @RequestMapping(value = "sign", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getBodyByModel(HttpServletRequest request, 
        @RequestParam(value = "client_id") String client_id,
        @RequestParam(value = "secret") String secret,
        @RequestParam(value = "token") String token,
        @RequestParam(value = "nonce_str") String nonce_str,
        @RequestParam(value = "timestapm") String timestapm) 
        {
            long i = 123;
            return sign(client_id, secret, token, i, nonce_str);
    }

    @RequestMapping(value = "getProfile", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getBodyByModel(HttpServletRequest request)throws Exception{
//    ,   @RequestParam(value = "client_id") String client_id,
//        @RequestParam(value = "secret") String secret,
//        @RequestParam(value = "token") String token) throws Exception 
//        {
        
            String client_id="c4fhcruwmgh6vz7n0l";
            String secret="enhp9thgpxukgvcpa2xkqgah8xe8wxck";
            String token="cbdb2ebc-ffc7-4699-a6cf-322cf10f206b";  

            var timestapm = System.currentTimeMillis();
            var nonce_str = "12345678";
            List<NameValuePair> headers = new ArrayList<NameValuePair>();
            headers.add(new BasicNameValuePair("client_id", client_id));
            headers.add(new BasicNameValuePair("nonce_str", nonce_str));
            headers.add(new BasicNameValuePair("access_token", token));
            headers.add(new BasicNameValuePair("timestamp", Long.toString(timestapm)));
            headers.add(new BasicNameValuePair("sign", sign(client_id, secret, token, timestapm, nonce_str)));
            ResponseModel rtn =  HttpRequestUtility.httpGet("https://ppr-online.carrefour.com.tw/testaccount/api/member/profile", null, headers, "application/json", "");
            if(rtn.code == 200)
            {
                return rtn.body;
            }else{
                return rtn.code;
            }
    }

    @RequestMapping(value = "getPointHis", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getPointHis(HttpServletRequest request, 
        @RequestParam(value = "client_id") String client_id,
        @RequestParam(value = "secret") String secret,
        @RequestParam(value = "token") String token) throws Exception 
        {
        
            var timestapm = System.currentTimeMillis();
            var nonce_str = "12345678";
            List<NameValuePair> headers = new ArrayList<NameValuePair>();
            headers.add(new BasicNameValuePair("client_id", client_id));
            headers.add(new BasicNameValuePair("nonce_str", nonce_str));
            headers.add(new BasicNameValuePair("access_token", token));
            headers.add(new BasicNameValuePair("timestamp", Long.toString(timestapm)));
            headers.add(new BasicNameValuePair("sign", sign(client_id, secret, token, timestapm, nonce_str)));
            ResponseModel rtn =  HttpRequestUtility.httpGet("https://ppr-online.carrefour.com.tw/testaccount/api/member/pointlist", null, headers, "application/json", "");
            if(rtn.code == 200)
            {
                return rtn.body;
            }else{
                return rtn.code;
            }

    }

    public String sign(String client_id, String secret, String token, Long timestapm, String nonce_str){
        String src_str = "access_token=" + token + "&client_id=" + client_id + 
                         "&nonce_str=" + nonce_str + "&timestamp=" + Long.toString(timestapm) + "&key=" + secret;
        System.out.println(src_str);
        return  DigestUtils.sha256Hex(src_str);
        
    }
}



