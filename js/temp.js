/* coding here */

// intialise viarables for program

$inputs =[];// sets up array for inputs
$output= "";// displays the results of an operation performed
$defaultValue = 0;//default value when calculator is turn on or inputs is cleared
 
//get element by ID
function getId(x) {
	return document.getElementById(x);
}



   //  $inputs.push(getId("display").textContent= $defaultValue);

/*
  getId("C").addEventListener("click", function clearScreen() {

        if ($inputs != "") {
            $inputs= getId("display").textContent=;
        }else{
            $inputs= getId("display").textContent=$defaultValue;
        }
        
    });
*/


    getId("one").addEventListener('click',function(){
       
      // $inputs.push(getId("one").textContent=1);

       $inputs.push(1);
       //console.log($inputs);
       for(i=0, len=$inputs.length; i < len; i++){
              // getId("display").textContent= $inputs[i];
              console.log($inputs[i]);
    }
    });

    


 

//addInputToDisplay();


/*
    getId("two").addEventListener('click',function(){
       $inputs.push(getId("display").textContent=2);
       console.log($inputs);
    });
*/



/*
if ($inputs > 1) {
  function addInputToDisplay(){
          
          console.log($inputs); 
        
          for(i=0, len=$inputs.length; i < len; i++){
            getId("display").textContent= $inputs[i];
      
          }
        

  }    
*/




/*
    getId("three").addEventListener('click',function(){

    $inputs.push(getId("display").textContent=3);
    console.log($inputs);
  });
  
getId("four").addEventListener('click',function(){

$inputs.push(getId("display").textContent=4);
console.log($inputs);
});

getId("five").addEventListener('click',function(){

$inputs.push(getId("display").textContent=5);
console.log($inputs);
});

getId("six").addEventListener('click',function(){

$inputs.push(getId("display").textContent=6);
console.log($inputs);
});

getId("seven").addEventListener('click',function(){

$inputs.push(getId("display").textContent=7);
console.log($inputs);
});

getId("eight").addEventListener('click',function(){

$inputs.push(getId("display").textContent=8);
console.log($inputs);
});

getId("nine").addEventListener('click',function(){

$inputs.push(getId("display").textContent=9);
console.log($inputs);
});

*/



/*
getId("display").addEventListener('click',function(){

console.log(getId("display"));
});
*/




//Add operation
function add(array){
   var sum= 0;

   for (var i=0,len=array.length; i < len ;i++ ){
     sum += array[i]
   }

}

//Multiply operation
function multiply(array){
   var sum = 0;

   for (var i=0,len=array.length; i < len ;i++ ){
     sum *= array[i]
   }

}

//Subtract operation
function subtract(array){
   var sum = 0;

   for (var i=0,len=array.length; i < len ;i++ ){
     sum -= array[i]
   }

}


//Subtract operation
function modulus(array){
   var sum = 0;

   for (var i=0,len=array.length; i < len ;i++ ){
     sum %= array[i]
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
  case "modulus":
   function modulus();
}
*/


/*

//getId("one").addEventListener('click', );
//console.log(getId("one"));

$update;

$output;
*/


/* 


//temp 2 code 
/*
 * Author:Uel Azdrian Small
 * FileName: calculate.js
 * Date:09/05/2017
 *
 */

  // intialise viarables for calculator program
  var $inputs=[],// sets up array for inputs
  $output= "",// displays the results of an operation performed
  $defaultValue = 0,//default value when calculator is turn on or inputs is cleared
  $powerStatus;
  

  //get element by ID
  function getId(x) {
       return document.getElementById(x);
  }

  //AC button puts on calculator.
  getId("AC").addEventListener("click", function powerOn($powerStatus) {
       $inputLen= $inputs.length;//check input length
       if ($inputLen === $defaultValue ){//1 is on & 0 is off
          $inputs.push(getId("display").textContent= $defaultValue);
         
          //testing statements
          console.log("I'm on!");
          console.log($powerStatus);

        return $powerStatus = true;
       }else{
          $inputs.push($inputs=[] );
          getId("display").textContent=$inputs;
          
          //testing statements
          console.log("inputArray: " + $inputs + " " + "zeroVar: " +  $defaultValue);
          console.log("I'm off!");
          console.log($powerStatus);

          return $powerStatus = false;
       }
  });

  /*        
 while ($powerStatus === true){
           getId("one").addEventListener('click',function(){
              console.log("heyyy im 1");
            /*
             $inputs.push(1);
             //console.log($inputs);
             for(i=0, len=$inputs.length; i < len; i++){
                    // getId("display").textContent= $inputs[i];
                    console.log($inputs[i]);
             } 
             */
          });
  }//end of while loop
*/



console.log("powerstatus value:" + $powerStatus);

  /*

  //Clear the screen
  getId("clear").addEventListener("click", function clearScreen(){
    console.log($inputs);
   /* var $emptyInput= $inputs.push($inputs=[] );
   console.log($emptyInput);
   
  });
*/



*/


  /*
       if ($inputLen === $defaultValue ){//1 is on & 0 is off
         
          //testing statements
          console.log("I'm on!");
         // console.log($powerStatus);

        return $powerStatus = true;
       }else{
          $inputs.push($inputs=[] );
          getId("display").textContent=$inputs;
          
          //testing statements
          console.log("inputArray: " + $inputs + " " + "zeroVar: " +  $defaultValue);
          console.log("I'm off!");
          //console.log($powerStatus);

          return $powerStatus = false;
       } */


      /*
 getId("display").textContent=$defaultValue;

       $inputs.push($defaultValue);
       $inputLen= $inputs.length;//check input length


       if ($inputLen > $defaultValue){
          $powerStatus = true;
          getId("display").textContent=$defaultValue;
          console.log("im on!");
          console.log($inputs);
          console.log($powerStatus);


       }else{
          $inputs.push($inputs=[] );
          $powerStatus = false;
         
          $inputLen= $inputs.length;
          getId("display").textContent=$inputLen;

       }


      */