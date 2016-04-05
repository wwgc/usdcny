var superagent = require('superagent'),
	cheerio = require('cheerio'),
	dateutil = require('./dateutil'),
	targetUrl = 'http://www.zhijinwang.com/huilv/';

exports.usdcny = function(cb){
	superagent.get(targetUrl).end(function(err, res){
  
		var $ = cheerio.load(res.text);
    	var usdcny = $('#table71>tr').slice(1,2).find('td').last();
  		
  		var res = "美元对人民币汇率，数据来源于中国纸金网\n";
  		res += '美元:' + usdcny.text().trim()+"\n";
  		res += '时间:' + new Date().format('yyyy-MM-dd hh:mm:ss');

  		cb(res);
	});
}