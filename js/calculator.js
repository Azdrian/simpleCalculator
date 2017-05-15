/* coding here */

// intialise viarables for program

$inputs =[];// sets up array for inputs
$output= "";// displays the results of an operation performed
$defaultValue = 0;//default value when calculator is turn on or inputs is cleared
 
//get element by ID
function getId(x) {
	return document.getElementById(x);
}


function add(array){
   var sum= 0;

   for (var i=0,len=array.length; i < len ;i++ ){
     sum += array[i]
   }

}

function multiply(array){
   var sum = 0;

   for (var i=0,len=array.length; i < len ;i++ ){
     sum *= array[i]
   }

}

function subtract(array){
   var sum = 0;

   for (var i=0,len=array.length; i < len ;i++ ){
     sum -= array[i]
   }

}







/*
//perform operations on inputs
switch ( getId(x) === "equals") {
  case "add":
   function add(args);
  case "multiply":
  function multiply(args);
  case "subtract":
   function subtract();
  case "divide":
   function divide();
}
*/


/*

//getId("one").addEventListener('click', );
//console.log(getId("one"));

$update;

$output;
*/
