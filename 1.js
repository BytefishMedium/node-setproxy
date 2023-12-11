const axios = require('axios');

const url1 = 'https://www.baidu.com';
const url2 = 'https://www.medium.com';

axios.get(url2)
  .then(response => {
    console.log(response.data); // 输出网页的HTML内容
  })
  .catch(error => {
    console.error('Error fetching the page:', error);
  });

