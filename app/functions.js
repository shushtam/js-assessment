exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    var res=fn.apply(this,arr);
    return res;

  },

  speak: function(fn, obj) {
    var res=fn.call(obj);
   return res;
    

  },

  functionFunction: function(str) {
   
   
    return function(s)
    {
      return str+', '+s;
    };


  },

  makeClosures: function(arr, fn) {
    var s=[];
    var somefn=function(elem)
    {
      var res=function()
      {
        return fn(elem);
      };
      return res;
    }
    for(var i=0;i<arr.length;i++)
    {
      s.push(somefn(arr[i]));
    }
    return s;

  },

  partial: function(fn, str1, str2) {
    var s=function(add)
    {
      return fn(str1,str2,add);
    }
    return s;

  },

  useArguments: function() {
    var s=0;
    var lg=arguments.length
    for(var i=0;i<lg;i++)
    {
      s=s+arguments[i];
    }
    return s;


  },

  callIt: function(fn) {
    var s=Array.prototype.slice.call(arguments,1, arguments.length);
    var res=fn.apply(null,s);
    return res;


  },

  partialUsingArguments: function(fn) {

    var s=Array.prototype.slice.call(arguments,1, arguments.length);
    return function()
    {
      var arg=s.concat(Array.prototype.slice.call(arguments));
      var res=(fn.apply(null,arg));
       return  res;
    };

  

  },

  curryIt: function(fn) {
   
    function args(start,count)
    {
      var all=false;
      return function(curr)
      {
       start.push(curr);
       if(start.length===count)
       all=true;
       if(all)
       {
        return app(fn,start);
       }
       return args(start,count);
      };
    }

 function app(fn2,s)
    {
      var z=fn2.apply(null,s);
      return z;
    }
    var res=args([], fn.length);
    return res;

  }
};
