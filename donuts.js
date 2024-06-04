let Message;
  let person = prompt("Please enter your name:");

  let gender = prompt("Please enter your gender:");

  let order = prompt("what is your order? Donut, Coffee, Ice cream or Bakery: ");

  let num = prompt("Please enter number:");

  let num1 = parseFloat(prompt("Please enter first number:")); 
  
  let num2 = parseFloat(prompt("Please enter second number:")); 

  alert("the number is " + num);

  alert("your order is getting prepared ");

  if (gender == "female" || gender == "Female" ) {

    Message = "Hello Ms " + person + "! Welcome to donuts factort";

  } else if( gender == "male" || gender == "Male" ) {

    Message = "Hello Mr " + person + "! Welcome to donuts factort";

  } else{

    Message = "Hello " + person + "! Welcome to donuts factort";
  }

  document.getElementById("Message").innerHTML = Message;

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

 
if(num1 > num2){

  console.log("ascending order "+ num2 + " " + num1);
  console.log(" the larger number is "+ num1);


}else{

  console.log("ascending order "+ num1 + " " + num2);
  console.log(" the larger number is "+ num2);

}

 let sum = num1 + num2;
 console.log("the sum of the first and second numbers = " + sum );