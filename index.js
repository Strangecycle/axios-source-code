/**
 * 问题 1、axios 为什么能直接调用并默认为 GET 和直接传入 config
 *  look from here: lib/axios
 */
/* axios('http://jsonplaceholder.typicode.com/posts', {}).then((res) => {
  console.log(res);
});
axios({
  url: 'http://jsonplaceholder.typicode.com/posts',
  method: 'get',
}).then((res) => {
  console.log(res);
}); */


/**
 * 问题 2、axios.get/post/put...('url', config)  又是如何？
 *  look from here: lib/core/Axios
 */
/* axios.get('http://jsonplaceholder.typicode.com/posts').then((res) => {
  console.log(res);
});
axios.get('http://jsonplaceholder.typicode.com/posts').then((res) => {
  console.log(res);
}); */


/**
 * 问题 3、axios.create() 用于创建一个实例，它是如何记住你传入的 config，比如 baseURL, timeout 并应用于该实例所有请求的
 *  look from here: lib/core/Axios
 */
/* const axiosInstance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
  timeout: 5000
});
axiosInstance.get('/posts').then((res) => {
  console.log(res);
}); */


/**
 * 问题 4、axios.interceptors 拦截器到底是怎么做到的？
 *  look from here: lib/core/Axios
 */
axios.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {}
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {}
);

axios('http://jsonplaceholder.typicode.com/posts', {});
