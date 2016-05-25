exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var id;
  	function ct()
  	{
  		console.log(start);
  		start++;
  		if(start<=end)
  		{
  			id=setTimeout(ct,100);
  		}
  	}
  
ct();
return {cancel:function()
{
clearTimeout(id);
}

  }
}
};
