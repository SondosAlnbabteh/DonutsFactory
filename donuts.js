let Message;
  let person = prompt("Please enter your name:");

  function genderCall(){

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

    }


    genderCall(); 
  
    let order = prompt("what is your order? Donut, Coffee, Ice cream or Bakery: ");
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

 