exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    var res=fn.call(obj);
  	return res;

  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting=greeting;

  },

  iterate: function(obj) {
  	var s=[];
  	for(var i in obj)
  		
  	{
  		if(obj.hasOwnProperty(i))
  		{
  	s.push(i+': '+obj[i]);	
  }
  	}
  	return s;

  }
};
