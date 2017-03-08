//Business Logic
function listMultiples(userInput){
  var prefix = "";
  var listArray = [];
  if(userInput < 0){
    prefix = "-";
    userInput = (userInput*-1);
  }

  for(i=1;i <= userInput; i++){
    var currentNumber = i;
    console.log(userInput);
    if ((currentNumber%15) == 0){
      listArray[i] = '<li class="multipleOf15"><span>ping-pong</li></span>';
    } else if ((currentNumber%5) == 0){
      listArray[i] = '<li class="multipleOf5"><span>pong</li></span>';
    } else if((currentNumber%3) == 0){
      listArray[i] = '<li class="multipleOf3"><span>ping</li></span>';
    } else {
      listArray[i] = '<li ><span>'+prefix+currentNumber+'</span></li>';
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
      console.log('!=');
      for(i=1;i <= userInput; i++){
        var returnVal = listMultiples(userInput);
      }
    }

    $("#output div ul").append(returnVal);
  });
});
