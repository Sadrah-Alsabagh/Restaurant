"use strict";
let foodList = [];


let ID = 1000;
function Food(name, type, price) {
  this.id = ID++;
  this.name = name;
  this.type = type;
  this.price = price;

  foodList.push(this);
}

const formEl = document.getElementById("foodForm");
const table = document.getElementById("foodTable");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event){

    event.preventDefault();
    let foodName = event.target.foodName.value;
    let foodType = event.target.foodType.value;
    let foodPrice = event.target.foodPrice.value;

   const newFood= new Food(foodName, foodType, foodPrice);
  
     console.log(newFood);
     newFood.render();
}

Food.prototype.render = function(){
  //creat element
  const trEl = document.createElement("tr");
  const tdId = document.createElement("th");
  const tdName = document.createElement("th");
  const tdType = document.createElement("th");
  const tdPrice = document.createElement("th");
  //add content
  tdId.textContent = this.id;
  tdName.textContent = `${this.name}`;
  tdType.textContent = this.type;
  tdPrice.textContent = `${this.price}`;
    //append to DOM
    table.appendChild(trEl)

    trEl.appendChild(tdId);
    trEl.appendChild(tdName);
    trEl.appendChild(tdType);
    trEl.appendChild(tdPrice);

   
};
for (let i = 0; i < foodList.length; i++) {
  foodList[i].render();
}


// You will create an instance each time you submit the form, and fill the object from the form inputs.

//     Create a function to generate a unique four digits for the food id number.

//     You will add an event listener to get the data from the form instead of having hard-coded data.

//     You will create a render prototype function to render each food name with their information from the form on the home page as a table view as below.
