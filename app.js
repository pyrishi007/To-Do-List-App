const userInput = document.querySelector("#inputBox");
const inputContainer = document.querySelector("#list-contanier");
const addButton = document.querySelector(".btn");

addButton.addEventListener("click", () => {
  let userValue = userInput.value;
  clickFumction(userValue);
});

function clickFumction(userValue) {
  if (userValue != "") {
    let li = document.createElement("li");
    li.innerHTML = userValue;
    inputContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  } else {
    alert("Please add your task");
  }
  userInput.value = "";
  saveData();
}

inputContainer.addEventListener( 
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

function saveData() {
  localStorage.setItem("values", inputContainer.innerHTML);
}

function savedDataValues() {
  inputContainer.innerHTML = localStorage.getItem("values");
}

savedDataValues();







// // //true 
// // if(false){
//   //   console.log(true);
  

// // //false 
// // }else{
// //   console.log("i m flase");
  
// // }
// // ==
// //>=
// //<=
// //+=
// //!=


// let a = 10;

// //false 

// // if - elif - else

// // if a == 10: (true)
// // print(a)


// // {}
// //[ ]
// //()
// //;
// //:

// // goood pratices
// //
// //''

// //""
// // / \
// // #


//  F - string 

//  literals 
 
// //python
// // age = 23

// //js 
//  let age = 23

//  console.log(`rohit age is 23`);
 
//  //print("my age is  ")

// 'rohit'
// '23'