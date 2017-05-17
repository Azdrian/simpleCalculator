/*
 * Author:Uel Azdrian Small
 * FileName: calculate.js
 * Date:09/05/2017
 *
 */

  // intialise viarables for calculator program
  $inputs=[];// sets up array for inputs
  $output= "";// displays the results of an operation performed
  $defaultValue = 0;//default value when calculator is turn on or inputs is cleared
  

  //get element by ID
  function getId(x) {
       return document.getElementById(x);
  }

  //AC button puts on calculator.
  getId("AC").addEventListener("click", function powerOn() {

        $inputLen= $inputs.length;//check input length
       if ($inputLen === $defaultValue ){//1 is on & 0 is off
         
          $inputs.push(getId("display").textContent= $defaultValue);
          console.log("I'm on!");
          console.log($inputs);
          
       }else{
          $inputs.push($inputs=[] );
          getId("display").textContent=$inputs;
          console.log("inputArray: " + $inputs + " " + "zeroVar: " +  $defaultValue);
          console.log("I'm off!");
          console.log($inputs);

       }
        
          //console.log(typeof $inputs);
          //console.log($inputs);
      
  });

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


