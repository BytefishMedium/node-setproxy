const axios = require('axios');

const HttpsProxyAgent = require('https-proxy-agent').HttpsProxyAgent;

// 代理服务器设置
const agent = new HttpsProxyAgent({
  // 错误的写法： http://127.0.0.1 
  // 参考https://stackoverflow.com/questions/17690803/node-js-getaddrinfo-enotfound
  //  and the protocol http:// shouldn't be included in the host field.
  host: 'localhost', 
  port: 10077,
});

axios.defaults.httpsAgent = agent;

const url = 'https://www.medium.com';

axios.get(url, { httpsAgent: agent })
  .then(response => {
    console.log(response.data); // 输出网页的HTML内容
  })
  .catch(error => {
    console.error('Error fetching the page:', error);
  });
