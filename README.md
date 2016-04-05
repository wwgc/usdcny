### usdcny

美元对人民币汇率，数据来源：中国银行和纸金网。

#### 用法

默认使用中国银行数据：

```
usdcny = require('usdcny');

usdcny.get(function(res){
	console.log(res);
});
```
指定数据来源：

```
usdcny = require('usdcny');

// 中国银行
usdcny.get('boc', function(res){
	console.log(res);
});
// 纸金网
usdcny.get('zhijin', function(res){
	console.log(res);
});
```
返回结果：

```
美元对人民币汇率，数据来源于中国银行外汇牌价
现汇买入价: 6.4652
现钞买入价: 6.4134
现汇卖出价: 6.4911
现钞卖出价: 6.4911
中行折算价: 6.4663
时间: 2016-04-05 18:12:40

美元对人民币汇率，数据来源于中国纸金网
美元:6.4752
时间:2016-04-05 18:16:24
```