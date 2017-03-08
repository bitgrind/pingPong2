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
    if ((currentNumber%15) == 0){
      listArray[i] = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf15"><span>ping-pong</li></span>';
    } else if ((currentNumber%5) == 0){
      listArray[i] = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf5"><span>pong</li></span>';
    } else if((currentNumber%3) == 0){
      listArray[i] = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf3"><span>ping</li></span>';
    } else {
      listArray[i] = '<li onclick="findMultiples('+prefix+i+')"><span>'+prefix+currentNumber+'</span></li>';
    }
  }
  return listArray;
}


function findMultiples(userClick){
  $("ul").html("");
  prefix='';
  if(userClick < 0){
    prefix='-';
    userClick = (userClick * -1);
  }

  for(i=userClick;i <= userClick+50; i++){
    var currentNumber = i;
    //finding multiples of 3, 5 and 15
    if ((currentNumber%15) == 0){
      currentNumber = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf15"><span>ping-pong</li></span>';
    } else if ((currentNumber%5) == 0){
      currentNumber = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf5"><span>pong</li></span>';
    } else if((currentNumber%3) == 0){
      currentNumber = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf3"><span>ping</li></span>';
    } else {
      currentNumber = '<li onclick="findMultiples('+prefix+i+')"><span>'+prefix+currentNumber+'</span></li>';
    }
    //checking output
    $("#output div ul").append(currentNumber);
  }
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
        $("#output div ul").append(returnVal);
      }
    }
  });
});
