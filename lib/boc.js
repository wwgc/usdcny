var superagent = require('superagent'),
  cheerio = require('cheerio'),
  targetUrl = 'http://www.boc.cn/sourcedb/whpj/index.html';
  
exports.usdcny = function(cb){
	superagent.get(targetUrl).end(function(err, res){
		var $ = cheerio.load(res.text, {decodeEntities: false});//防止中文乱码
	 	
	 	var data = [];
		$('body').find('td').each(function(index,ele){
	    	var str = $(ele).html().trim();
	    	data.push(str);
	    });
		
		var res = "美元对人民币汇率，数据来源于中国银行外汇牌价\n";

	    for(var i=0;i<data.length;i++){
			if(data[i]=="美元"){
				res += "现汇买入价: " + (data[i+1]/100).toFixed(4) + "\n";
				res += "现钞买入价: " + (data[i+2]/100).toFixed(4)+ "\n";
				res += "现汇卖出价: " + (data[i+3]/100).toFixed(4) + "\n";
				res += "现钞卖出价: " + (data[i+4]/100).toFixed(4) + "\n";
				res += "中行折算价: " + (data[i+5]/100).toFixed(4) + "\n";
				res += "时间: "+data[i+6]+" "+data[i+7];
		   	}
	    }

	    cb(res);
	});
}