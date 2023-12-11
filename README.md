# 如何在Nodejs中启用Proxy，从而使用墙外的API接口？

视频教程链接：https://youtu.be/_qlHKK1Ngbo

最近在写代码的时候，需要调用一些墙外的API，具体来说，就是YouTube的字幕API。但是由于网络防火墙的限制，我们的Nodejs无法直接访问到外网的接口。

示例：1.js

出错：
```
  cause: Error: connect ECONNREFUSED 127.0.0.1:443
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1187:16) {
    errno: -61,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '127.0.0.1',
    port: 443
  }
```

这就是由于YouTube被墙了，无法连接。

然后有些朋友可能会想，我已经开了VPN了，而且VPN也设置为了全局模式，为什么还是无法爬取YouTube呢？

那是由于我们的node代码属于底层工具，默认不走代理。为了让我们的node使用我们的代理，我们需要使用这个库：

安装
```sh
cnpm i https-proxy-agent
```

然后这样调整代码：
2.js

自定义配置代理。

