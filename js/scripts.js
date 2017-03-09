//Business Logic
var prefix = "";
function listMultiples(userInput){
  var listArray = [];
  if(userInput < 0){
    prefix = "-";
    userInput = (userInput*-1);
  }
  for(var k = 1; k <= userInput; k++){
      var currentNumber = k;
      if ((currentNumber%15) == 0){
        listArray[k-1] = 'ping-pong';
      } else if ((currentNumber%5) == 0){
        listArray[k-1] = 'pong';
      } else if((currentNumber%3) == 0){
        listArray[k-1] = 'ping';
      } else {
        listArray[k-1] = prefix+currentNumber;
      }
  }
  return listArray;
}

//User Logic
$(function(){
  $("#userNumber").submit(function(){
    event.preventDefault();
    //get user input
    var userInput = $("#input").val();

    //clear ul
    $("ul").html("");

    //triggering function filter that prompts if user inputs 0
    if(userInput != 0){
      console.log('!='+userInput);
      var returnVal = listMultiples(userInput);
    } else {
      console.log('other else');
      var returnVal = listMultiples(userInput);
    }

    $(returnVal).each(function(elem,val){
      //'<li class="multipleOf15"><span>'++'</li></span>';
        if (val === 'ping-pong'){
          frontendVal = '<li class="multipleOf15"><span>'+val+'</span></li>';
        } else if (val === 'pong'){
          frontendVal = '<li class="multipleOf5"><span>'+val+'</span></li>';
        } else if(val === 'ping'){
          frontendVal = '<li class="multipleOf3"><span>'+val+'</span></li>';
        } else {
          frontendVal = '<li><span>'+prefix+val+'</span></li>';
        }
        $("#output div ul").append(frontendVal);
    });
  });
});
