let Message;
  let person = prompt("Please enter your name:");

  let gender = prompt("Please enter your gender:");

      if (gender.toLowerCase() == "female") {

            Message = "Hello Ms " + person + "! Welcome to donuts factort";

      } else if( gender.toLowerCase() == "male" ) {

           Message = "Hello Mr " + person + "! Welcome to donuts factort";

      }else{
  
          while(gender.toLowerCase() != "female" && gender.toLowerCase() != "male" ){

              gender =  prompt("Please enter your gender:");

          if (gender.toLowerCase() == "female") {

              Message = "Hello Ms " + person + "! Welcome to donuts factort";

          } else if( gender.toLowerCase() == "male" ) {

              Message = "Hello Mr " + person + "! Welcome to donuts factort";

          }

       }
      }

  let order = prompt("what is your order? Donut, Coffee, Ice cream or Bakery: ");

  let num = prompt("Please enter number:");

  let num1 = parseFloat(prompt("Please enter first number:")); 
  
  let num2 = parseFloat(prompt("Please enter second number:")); 

  alert("the number is " + num);

  alert("your order is getting prepared ");

   
  document.getElementById("Message").innerHTML = Message;

/************************************ */
  let user_info=[person, gender, order];

  user_information = "user information: ";
  for(let x=0; x < user_info.length; x++){

    user_information += user_info[x];

  }
console.log(user_information);
/****************************************** */

  switch(order){

  case "Donut":
  case "donut":  
    console.log( person , order );
    break;

  case "Coffee":
  case "coffee":
    console.log( person , order );
    break; 

  case "Ice cream":
  case "ice cream":  
    console.log( person , order );
    break;

  default:
    console.log( person , "Bakery" );
  
  }
/*************************************** */

  console.log( -5 * 3 );

  console.log( "JavaScript " + 50 );

  console.log( 17 % 5  );

  console.log(  5 % 17 );

  console.log( 5 / 10 );

  console.log( 4 === '4' );

  console.log( 4 != 5 );

  console.log( 7 <= 8 );

  console.log( "Hello " + 5 );
  
  console.log( Math.ceil(2.3) - Math.floor(2.6) );

  console.log( Math.pow(3,2) );

 /************************************ */
if(num1 > num2){

  console.log("ascending order "+ num2 + " " + num1);
  console.log(" the larger number is "+ num1);


}else{

  console.log("ascending order "+ num1 + " " + num2);
  console.log(" the larger number is "+ num2);

}

 let sum = num1 + num2;
 console.log("the sum of the first and second numbers = " + sum );

/******************************************* */
 var separate_alert = 0;

 while(separate_alert <= 5){

  alert(separate_alert);

  separate_alert++;
 }
/**************************************** */
 let single_alert = " ";
 for(var i = 0; i <= 5; i++ ){

  single_alert += i + " " ;
 }
 alert(single_alert);
/*************************************** */
 for(let x = 0; x <= 20; x+=3){

    alert(x);

 }

 /********************************* */


 do {
  
 var number = prompt("please enter number between 0 to 100 ");

 } while (number < 0 || number > 100  );

 /******************sum*************** */

 sum = parseFloat(prompt("Enter a number to calculate the sum: "));
 counter = 0;

 while(sum > 0){

  counter += sum;
  sum --;
 
}
console.log(counter);