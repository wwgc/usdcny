var boc = require("./lib/boc");
var zhijin = require('./lib/zhijin');

// 默认获取中国银行数据
exports.get = function(source, cb){
	if(source instanceof Function){
        cb = source;
        source = null;
    }
    if(source === 'zhijin'){
    	zhijin.usdcny(cb);
    }else{
    	boc.usdcny(cb);
    }
};
