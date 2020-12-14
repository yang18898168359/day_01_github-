import Vue from "vue";
import Axios from "axios";
// import store from "../store";
import router from "../router";

console.log("213", process.env.NODE_ENV);

var baseURL;
if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:8080";
} else if (process.env.NODE_ENV === "production") {
    baseURL = "http://localhost:3002";
}
//根据环境的不同使用不同的baseurl
// baseURL是axios中路径的公共前缀

const instance = Axios.create({
    baseURL,
    timeout: 20000,
});
//创建axios实例

// 添加请求拦截器
// 只要发送请求的时候就会进行拦截，执行完拦截器里的代码，再放行

// 请求拦截 一般作用是在发送请求的时候携带token
// 如果不放在拦截器里 除了登陆之后的每一次请求都需要写携带token
// 的代码 放在拦截器里 每次请求时拦截器会帮我们自动携带token
instance.interceptors.request.use(
    function(config) {
        // 在发送请求之前把本地存储中存储的token放在header中发送给服务端
        if (localStorage.getItem("token")) {
            config.headers.token = localStorage.getItem("token");
        }
        return config;
        //如果本地存储中有token 就在请求的头信息中携带token 进行请求
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么：如果返回无效token的话就跳转至登录页面
        console.log(response);
        if (response.data.msg === "无效token") {
            router.push({
                name: "login",
            });
        }
        //后台响应拦截 如果发送给后台的token是失效（过期）的，那么这个时候后台会告诉我们token无效了，我们就会跳转回登陆页面重新登陆 如果token正常 就把返回结果给前端
        return response;
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

// 封装http方法，如果请求成功就把请求到的数据return 如果响应失败就执行失败的catch函数
// data是post的传参  params是get的传参
export default function http(url, method, data = {}, params = {}) {
    return instance({
            url,
            data,
            method,
            params,
        })
        .then((res) => {
            console.log(res);
            if (res.status >= 200 && res.status < 300) {
                return res.data;
            } else {
                return Promise.reject(res.data.meta.msg);
            }
        })
        .catch((err) => {
            return Promise.reject(err);
        });
}

// http.js就是封装的一个 axios请求的方法 添加了一个请求拦截 一个响应拦截