package com.carrefour.springbootdemo.controller.example;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.carrefour.springbootdemo.model.kktestModel;
import com.carrefour.springbootdemo.utilities.HttpRequestUtility;

import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
//import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

// 所有方法都回傳數據給瀏覽器，如果回傳是Object則轉換為JSON
@ResponseBody
@Controller
@RequestMapping("/kk")
public class TestController {

    // 取得body, param 的方式 1. 先定義一個model
    @RequestMapping(value = "body-model", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getBodyByModel(HttpServletRequest request, @RequestParam(value = "id") String id,
        @RequestParam(value = "name") String name,
        @RequestBody kktestModel body) {

        return "param.id: " + id + ", param.name:" + name + ", body.id:" + body.id + ", body.name:" + body.name;
    }

    // 取得body, param 的方式 2. 用map物件
    @RequestMapping(value = "/body-map", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getBodyByMap(HttpServletRequest request, @RequestBody Map<String, Object> body) {

        return "by map. id:" + body.get("id") + ", name:" + body.get("name");
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object httpGet(HttpServletRequest request, @RequestBody Map<String, Object> body) {
        
        return null;
    }

    @RequestMapping(value = "/post", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object httpPost(HttpServletRequest request, @RequestBody String body)
            throws ClientProtocolException, IOException, URISyntaxException {               
        URIBuilder builder = new URIBuilder();
        builder.setScheme("https").setHost("postman-echo.com").setPath("post")
        .addParameter("aa", "123");
        URI uri = builder.build();
        HttpPost httpPost = new HttpPost(uri);
 
        List<NameValuePair> params = new ArrayList<NameValuePair>();
        params.add(new BasicNameValuePair("username", "John"));
        params.add(new BasicNameValuePair("password", "pass"));
        
        String json = body;//"{id:11, name:KK}";
        StringEntity entity = new StringEntity(json);
        httpPost.setEntity(entity);
        httpPost.setHeader("Accept", "application/json");
        httpPost.setHeader("Content-type", "application/json");
        
        CloseableHttpClient client = HttpClients.createDefault();
        CloseableHttpResponse response = client.execute(httpPost);
        HttpEntity rtnEty = response.getEntity();
        return  EntityUtils.toString(rtnEty);
    }
    
    @RequestMapping(value = "/post2", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object httpPost2(HttpServletRequest request, @RequestBody String body)
            throws Exception { 
        List<NameValuePair> params = new ArrayList<NameValuePair>();
        params.add(new BasicNameValuePair("username", "John"));
        params.add(new BasicNameValuePair("password", "pass"));

        List<NameValuePair> headers = new ArrayList<NameValuePair>();
        headers.add(new BasicNameValuePair("h-username", "John"));
        headers.add(new BasicNameValuePair("h-password", "pass"));
        HttpEntity ent =  HttpRequestUtility.httpPost("https://postman-echo.com/post", headers, params, "application/json", body);
        return EntityUtils.toString(ent);
    }

    @RequestMapping(value = "/get2", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object httpGet2(HttpServletRequest request, @RequestBody String body)
            throws Exception { 
        List<NameValuePair> params = new ArrayList<NameValuePair>();
        params.add(new BasicNameValuePair("username", "John"));
        params.add(new BasicNameValuePair("password", "pass"));

        List<NameValuePair> headers = new ArrayList<NameValuePair>();
        headers.add(new BasicNameValuePair("h-username", "John"));
        headers.add(new BasicNameValuePair("h-password", "pass"));
        String ent = null;// HttpRequestUtility.httpGet("https://postman-echo.com/get", headers, params, "", body);
        return ent;
    }
    
    //讀檔案範例
    public Object parseFile(String path){
        List<kktestModel> arr = new ArrayList<kktestModel>();

        return arr;
    }
}



