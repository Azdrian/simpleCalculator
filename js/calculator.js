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

  //AC button powers on calculator.
  getId("AC").addEventListener("click", function powerOn() {

      //when AC BUTTON is clicked checks the  length of inputs[] array
      $inputs.push($defaultValue);
      var $inputLen= $inputs.length;
      
      if ($inputLen === 1){
        getId("display").textContent=$defaultValue;
        $powerStatus =true;
         console.log($powerStatus);
      }else{
        $inputs.push($inputs=[] );
        getId("display").textContent="";
        $powerStatus =false;
        console.log($powerStatus);
        
      }

 //if power is on allowed inputs to be entered
 if ($powerStatus === true){
        //when inputs is clicked do add to inputs array and display on screen
         getId("one").addEventListener('click',function(){
              //when input 1 is clicked push it to $input array
               $inputs.push(1);
              //display input to screen
               getId("display").textContent=1;
                  console.log($inputs);
          });

         getId("two").addEventListener('click',function(){
              //when input 2 is clicked push it to $input array
               $inputs.push(2);
              //display input to screen
               getId("display").textContent=2;
                  console.log($inputs);
         });

         getId("three").addEventListener('click',function(){
              //when input 3 is clicked push it to $input array
               $inputs.push(3);
              //display input to screen
               getId("display").textContent=3;
                  console.log($inputs);
          });

          getId("four").addEventListener('click',function(){
              //when input 4 is clicked push it to $input array
               $inputs.push(4);
              //display input to screen
               getId("display").textContent=4;
                  console.log($inputs);
          });

           getId("five").addEventListener('click',function(){
              //when input 5 is clicked push it to $input array
               $inputs.push(5);
              //display input to screen
               getId("display").textContent=5;
                  console.log($inputs);
          });

           getId("six").addEventListener('click',function(){
              //when input 6 is clicked push it to $input array
               $inputs.push(6);
              //display input to screen
               getId("display").textContent=6;
                  console.log($inputs);
          });

           getId("seven").addEventListener('click',function(){
              //when input 7 is clicked push it to $input array
               $inputs.push(7);
              //display input to screen
               getId("display").textContent=7;
                  console.log($inputs);
           });

           getId("eight").addEventListener('click',function(){
              //when input 8 is clicked push it to $input array
               $inputs.push(8);
              //display input to screen
               getId("display").textContent=8;
                  console.log($inputs);
           });

           getId("nine").addEventListener('click',function(){
              //when input 9 is clicked push it to $input array
               $inputs.push(9);
              //display input to screen
               getId("display").textContent=9;
                  console.log($inputs);
           });

           getId("zero").addEventListener('click',function(){
              //when input 0 is clicked push it to $input array
               $inputs.push(0);
              //display input to screen
               getId("display").textContent=0;
                  console.log($inputs);      
           });

           getId("add").addEventListener('click',function(){
              //when input "add"" is clicked push it to $input array
               $inputs.push("+");
              //display input to screen
               getId("display").textContent="+";
                  console.log($inputs);
           });

           getId("subtract").addEventListener('click',function(){
              //when input "subtract" is clicked push it to $input array
               $inputs.push("-");
              //display input to screen
               getId("display").textContent="-";
                  console.log($inputs);
           });


           getId("multiply").addEventListener('click',function(){
              //when input "multiply" is clicked push it to $input array
               $inputs.push("*");
              //display input to screen
               getId("display").textContent="*";
                  console.log($inputs);
           });

           getId("divide").addEventListener('click',function(){
              //when input "divide" is clicked push it to $input array
               $inputs.push("/");
              //display input to screen
               getId("display").textContent="/";
                  console.log($inputs);
           });
         
             getId("decimal").addEventListener('click',function(){
              //when input "decimal" is clicked push it to $input array
               $inputs.push(".");
              //display input to screen
               getId("display").textContent=".";
                  console.log($inputs);
           });

           getId("equals").addEventListener('click',function(){
              //when equal sign is clicked perform operations
              //display output to screen to screen
               console.log("working");
           });

        
      }//end of if programs run inside of here 

     
     
  });



/*  getId("one").addEventListener('click',function(){
                    console.log("heyyy im 1");
                  
          });
      }
      
      
       
      */
