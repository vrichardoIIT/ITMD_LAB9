function init(){
  //add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');

  function popUpMessage(){
    var textbox = document.getElementById('entryinput'); //get input
    document.getElementById('textoutput').innerHTML = textbox.value; //change h2
    alert("Vincent Richardo: " + textbox.value); //alert box
  }

  button.addEventListener('click', popUpMessage); //when button is clicked run the function popUpMessage
  }

window.addEventListener('load', init);