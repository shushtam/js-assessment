exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var b=bit-1;
    var res=num>>b & 1;
    return res;
    

  },

  base10: function(str) {
    var res=parseInt(str,2);
  	return res;

  },

  convertToBinary: function(num) {
     var arr=[];
     for(var i=7;i>-1;i--)
     {
      if((1<<i) & num)
        arr.push(1);
      else
      arr.push(0);
     }
     var res=arr.join(''); 
     return res;

  },

  multiply: function(a, b) {
     var z=100000;
    a=a*z;
    b=b*z;
    return (a*b)/(z*z);


  }
};
