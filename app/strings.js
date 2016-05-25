exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var elem={
      ch:'',
      dup:0};
    var arr=str.split('');
      var res=arr.filter(function(curr)
      {
        if(curr==elem.ch)
        {
          if(elem.dup<amount)   //elem.dup<=amount
        {
          elem.dup++;
          //console.log(elem.dup);
          return true;
        }
        else
        {
          return false;
        }
        }
      
      else
      {
        elem={
          ch:curr,
          dup:1 //0

        };
        return true;
      }
      }
      );
    return res.join('');
  },

  wordWrap: function(str, cols) {
    var count=0, res=[];
    var words=str.split(' ');

        var lg=words.length;
    var start=words[0];
    for(var i=1;i<lg;i++)
    {
      curr=words[i];
      var sm=start.length+curr.length;
      if(count+sm<cols)
      {
        res.push(start);
        res.push(' ');
        count=count+start.length+1;
      }
      else
      {
        res.push(start);
        res.push('\n');
        count=0;
      }
      start=curr;
    }
    res.push(start);
    return res.join('');




  },

  reverseString: function(str) {
    var arr=str.split('');
    arr.reverse();
    str=arr.join('');
  	return str;

  }
};
