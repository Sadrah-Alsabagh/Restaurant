"use strict";

let foodList = [];
let ID = 1000;
const table = document.getElementById("foodTable");

function Food(name, type, price) {
    this.id = ID++;
    this.name = name;
    this.type = type;
    this.price = price;
  
    foodList.push(this);
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

       
    
  }    

  function getData() {
    let parsedData = JSON.parse(localStorage.getItem("foodList"));
  
    if (parsedData) {
      for (let i = 0; i < parsedData.length; i++) {
        new Food(parsedData[i].name, parsedData[i].type, parsedData[i].price);
      }
    }
  
    for (let i = 0; i < foodList.length; i++) {
      foodList[i].render();
    }
  }
  getData();