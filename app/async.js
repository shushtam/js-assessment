exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

  	/*var prm=$.Deferred();
  	prm.resolve(value);
  	return prm.promise();*/
 var prm = new Promise(function(resolve, reject){
 	 resolve(value);

});
 prm.then()
 {
 	return prm;
 } 
  },

  manipulateRemoteData: function(url) {
  	var res=[];
  	var j=0;
  	ajx=$.Deferred();
  	var prm=$.ajax(url);
 prm.then(function(value)
  	 	{
        /*for(var j in value)
        {
        res.push(value[j]);
        }*/
  	 		res=$.map(value.people,function (p)
  	 			{ 
  	 				return p.name;});
  	 		res.sort();
  	 		ajx.resolve(res);
  	 	});
  	 return ajx.promise();
  
  }
};
