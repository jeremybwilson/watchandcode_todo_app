function someFn(){
  var msg1 = 'Hello';
  var msg2 = 'World';
  
  for(var num1 = 1; num1 <= msg1.length; num1++){
    for(var num2 = 1; num2 <= msg2.length; num2++){
      if(msg1.length == 4){
        console.log(msg1 + '' + msg2);
      }
    }
    
    if(num1 != 4){
      console.log(msg1.length + msg2.length);
    }
  }
}
someFn();