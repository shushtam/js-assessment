exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var res=(/[0-9]/).test(str);
    return res;

  },

  containsRepeatingLetter: function(str) {
    var res=(/([a-zA-Z])\1/).test(str);
      return res;


  },

  endsWithVowel: function(str) {
    var res=(/([aeiou])$/i).test(str);
    return res;

  },

  captureThreeNumbers: function(str) {
    var rg=(/[0-9]{3}/).exec(str);
    if(rg!=undefined)
    return rg[0];
  else
    return false;
  

  },

  matchesPattern: function(str) {
  //XXX-XXX-XXXX digit 3 3 4
  var res=(/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}?$/).test(str);
  return res;


  },
  isUSD: function(str) {

    //$1/1-3/,234,567.89 USD
    //,234,567 N
    var res=(/^\$[0-9]{1,3}(\,[0-9]{3})*(\.[0-9]{2}){0,1}$/).test(str);
    return res;
       
      

  }
};
