exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
     return arr.indexOf(item);

  },

  sum: function(arr) {
    var s=0;
    
    for(var i in arr)
    {
      s+=arr[i];
    }
    return s;
    

  },

  remove: function(arr, item) {
    
    
    for(var i in arr)
    {
      if(arr[i]==item)
      {
        arr.splice(i,1);
      }
    }
    return arr;


  },

  removeWithoutCopy: function(arr, item) {
    var i,lg=arr.length;
     for(i=0;i<lg;i++)
    {
      if(arr[i]===item)
      {
      arr.splice(i,1);
      i=i-1;
      lg=lg-1;
      }
    }
    return arr;

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate: function(arr) {
    arr.pop();
    return arr;

  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail: function(arr) {
    arr.shift();
    return arr;

  },

  concat: function(arr1, arr2) {
    var x=arr1.concat(arr2);
    return x;

  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
    


  },

  count: function(arr, item) {
    var s=0;
    {
      for (var i in arr)
      {
        if(arr[i]==item)
        {
          s++;
        }
      }
    }
    return s;

  },

  duplicates: function(arr) {
    var x;
    for(var i in arr)
    {
      for (var j in arr)
      {
        if(arr[j]===arr[i] && i!=j)
          x.push(arr[j]);
      }
    }
    return x;

  },

  square: function(arr) {
    var s;
    for(var i in arr)
      if(!isNaN(arr[i]))
    {
      s=Math.pow((arr[i]),2);
      arr[i]=s;
    }
return arr;
  },

  findAllOccurrences: function(arr, target) {

 var s;
    {
      for (var i in arr)
      {
        if(arr[i]===target)
        {
          s.push(arr[i]);
        }
      }
    }
    return s;

  }
};
