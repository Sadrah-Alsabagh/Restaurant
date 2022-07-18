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

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event){

    event.preventDefault();
    let foodName = event.target.foodName.value;
    let foodType = event.target.foodType.value;
    let foodPrice = event.target.foodPrice.value;

    new Food(foodName, foodType, foodPrice);
     
     saveData();

}


function saveData() {
  localStorage.setItem("foodList", JSON.stringify(foodList));
}

function getData() {
  let parsedData = JSON.parse(localStorage.getItem("foodList"));

  if (parsedData) {
    for (let i = 0; i < parsedData.length; i++) {
      new Food(parsedData[i].name, parsedData[i].type, parsedData[i].price);
    }
  }
}
getData();

