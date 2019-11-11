function getRand(x){
    let mixup = [];
    let nextNum = function(){
      return Math.floor((Math.random() * x));
    }
  
    let pushNum = nextNum();
    while (mixup.length < x){
      if(mixup.indexOf(pushNum) < 0){
        mixup.push(pushNum);
      }else{
        pushNum = nextNum();
      }
    }
    return mixup;
  }