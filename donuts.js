const newDiv = document.createElement("div");
newDiv.setAttribute("class" , "border border-dark w-50 bg-light");

const newOl = document.createElement("ol");

const newP = document.createElement("p");
newP.setAttribute("id" , "titleInfo");
newP.setAttribute("class" , "h4")
newP.innerHTML = "Person information";

document.getElementById("buttonsec").appendChild(newDiv);
newDiv.appendChild(newP);
newDiv.appendChild(newOl);

const herop = document.createElement("h1");
herop.innerHTML = "Fresh, warm, and ready to brighten your day. Taste the joy!";
document.getElementById("buttonsec").appendChild(herop);

const Messagehero = document.getElementById("Message");

document.getElementById("buttonsec").insertBefore(herop,Messagehero);

 /********************function add list*********************** */
 document.getElementById('submitButton').addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const orderType = document.getElementById('orderType').value;
    const gender = document.getElementById('gender').value;
    const cold = document.getElementById('cold').checked;
    const hot = document.getElementById('hot').checked;

    let temperature = '';
    if (cold) temperature = 'Cold';
    if (hot) temperature = (temperature ? temperature + ' and ' : '') + 'Hot';

    const submittedData = `
        <strong>Name:</strong> ${name}<br>
        <strong>Age:</strong> ${age}<br>
        <strong>Order Type:</strong> ${orderType}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Drink Temperature:</strong> ${temperature || 'None'}<br>
    `;
    
    addLi(submittedData);

}

function addLi(answer){

  const newLi = document.createElement("li");
  newLi.setAttribute("calss" , "Personinfo" );

  newOl.appendChild(newLi); 

  newLi.innerHTML = answer;

}
/**************************************************** */
  let Message;
 


  // var gender = prompt("Please enter your gender:");

  // function genderCall(){

  //     if (gender.toLowerCase() == "female") {

  //           Message = "Hello Ms " + person + "! Welcome to donuts factort";

  //     } else if( gender.toLowerCase() == "male" ) {

  //          Message = "Hello Mr " + person + "! Welcome to donuts factort";

  //     }else{
  
  //         while(gender.toLowerCase() != "female" && gender.toLowerCase() != "male" ){

  //             gender =  prompt("Please enter your gender:");

  //         if (gender.toLowerCase() == "female") {

  //             Message = "Hello Ms " + person + "! Welcome to donuts factort";

  //         } else if( gender.toLowerCase() == "male" ) {

  //             Message = "Hello Mr " + person + "! Welcome to donuts factort";

  //         }

  //      }
  //     }

  //   }

 //   genderCall(); 

  //  addLi(gender);
  
  
    // let order = prompt("what is your order? Donut, Coffee, Ice cream or Bakery: ");
    // addLi(order);
   

    // alert("your order is getting prepared ");
    
   // document.getElementById("Message").innerHTML = Message;

  
 
/************************************ */
 // let user_info=[person, gender, order];

//   user_information = "user information: ";
//   for(let x=0; x < user_info.length; x++){

//     user_information += user_info[x] +" ";

//   }
// console.log(user_information);
/****************************************** */

  // switch(order){

  // case "Donut":
  // case "donut":  
  //   console.log( person , order );
  //   break;

  // case "Coffee":
  // case "coffee":
  //   console.log( person , order );
  //   break; 

  // case "Ice cream":
  // case "ice cream":  
  //   console.log( person , order );
  //   break;

  // default:
  //   console.log( person , "Bakery" );
  
  // }
/*************************************** */





