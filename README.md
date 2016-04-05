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
usdcny.get('zhijin', function(res){
	console.log(res);
});
// 纸金网
usdcny.get('zhijin', function(res){
	console.log(res);
});
```
