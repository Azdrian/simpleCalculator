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
  getId("AC").addEventListener("click", function powerOn() {
       $inputLen= $inputs.length;//check input length
       if ($inputLen === $defaultValue ){//1 is on & 0 is off
         
          $inputs.push(getId("display").textContent= $defaultValue);
          $powerStatus = true;
          console.log("I'm on!");
          //console.log($powerStatus);
                  
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









       }else{
          $inputs.push($inputs=[] );
          getId("display").textContent=$inputs;
          $powerStatus = false;
          console.log("inputArray: " + $inputs + " " + "zeroVar: " +  $defaultValue);
          console.log("I'm off!");
          //console.log($powerStatus);


       }
  });
  /*

  //Clear the screen
  getId("clear").addEventListener("click", function clearScreen(){
    console.log($inputs);
   /* var $emptyInput= $inputs.push($inputs=[] );
   console.log($emptyInput);
   
  });
*/
