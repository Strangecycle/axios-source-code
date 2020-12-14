// 1、axios 为什么能直接调用并默认为 GET
axios('http://jsonplaceholder.typicode.com/posts', {})
  .then((res) => {
    console.log(res);
  });

