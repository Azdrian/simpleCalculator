/*
 * Author:Uel Azdrian Small
 * FileName: calculate.js
 * Date:09/05/2017
 *
 */

  // intialise viarables for program
  $inputs =[];// sets up array for inputs
  $output= "";// displays the results of an operation performed
  $defaultValue = 0;//default value when calculator is turn on or inputs is cleared
  

  //get element by ID
  function getId(x) {
       return document.getElementById(x);
  }

  //AC button puts on calculator.
  getId("AC").addEventListener("click", function powerOn() {

       if ($inputs === $defaultValue) {
          $inputs= getId("display").textContent=null;
       }else{
          $inputs= getId("display").textContent=$defaultValue;
       }
        /* console.log("I'm on!");
          console.log(typeof $inputs);
          console.log($inputs);
        */ 
  });

