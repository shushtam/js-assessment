exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      var res =[];
  var s=[];
  function find(data)
  {
    var files=data.files;
    var lg=files.length;
    s.push(data.dir);
    //console.log("dir="+data.dir);

    for(var i=0;i<lg;i++)
    {
      fl=files[i];
    console.log("fl="+fl);
      if (typeof fl=='string')
       {
  //console.log(s.indexOf(dirName));
      if(s.indexOf(dirName)>-1 || dirName==undefined)
      {

      res.push(files[i]);
    }
  }
    else
    {
      console.log("dName="+dirName);
      find(files[i]);
    }
    }
    s.pop();
  }
  find(data);

    return res;
 
  },

  permute: function(arr) {
    var curr=[];
    var res=[];
    function perm() { 
      var len=arr.length;
       var elem;
      for (var i=0; i<len;i++)
       {
        var frst=arr.splice(i, 1)[0];
       // console.log(frst);
        elem=frst;
        curr.push(elem);
        if (arr.length>0)
         {
          perm();
        } 
        else
         {
          res.push(curr.slice());
        }
        arr.splice(i, 0, elem);
        
        curr.pop();
      }
      return res;
    }
perm();

    return res;
  



  },

  fibonacci: function(n) {

    if(n<=2)
      return 1;
    else
      return (this.fibonacci(n-1)+this.fibonacci(n-2));

  


  },

  validParentheses: function(n) {
   var res = [];
    function parth(open,close,s) {
        if (open==0 && close==0)
        {
            res.push(s);
        }
        if (open>0)
         {
           parth(open-1,close+1,s+"(");
        }
        if (close>0)
         {
            parth(open,close-1,s+")");
        }
    }
    parth(n,0,"");
    return res;
   



  }
};
