var usdcny = require('./');

usdcny.get(function(res){
	console.log(res);
});

usdcny.get('zhijin', function(res){
	console.log(res);
});
