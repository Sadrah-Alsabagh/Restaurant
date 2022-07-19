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

  //charts
  //pie chart
  //Giving initial value to loop through them and count them
  const foodType ={
    fruAndVeg:0,
    starchyFood:0,
    dairy:0,
    protein:0,
    fat:0
  };
  for (let i = 0; i < foodList.length; i++) {
    if (foodList[i].type === "Fruit-and-vegetables") {
      foodType.fruAndVeg++;
    }
    if (foodList[i].type === "Starchy-Food") {
      foodType.starchyFood++;
    }
    if (foodList[i].type === "dairy") {
      foodType.dairy++;
    }
    if (foodList[i].type === "protein") {
      foodType.protein++;
    }
    if (foodList[i].type === "fat") {
      foodType.fat++;
    }
  }
  //Returns enumerable properties
  const typeNames = Object.keys(foodType);
  //return properties
const types = Object.values(foodType);

  const pieData = {
    labels: typeNames,
    datasets: [
      {
        label: "Food Type chart",
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "'rgb(255, 205, 86)", "#04aa6d", "(FFFF00) "],
        data: types
  
      },
    ],
  };
  
  const typeConfig = {
    type: "pie",
    data: pieData,
    options: {}
  };
  
  const foodTypeChart = new Chart(
    document.getElementById("TypeChart"),
    typeConfig
    );


  //bar chart
    const names=[];
    const prices =[];
    
  for (let i = 0; i < foodList.length; i++) {
    names.push(foodList[i].name);
    prices.push(foodList[i].price);
  }


        const data = {
          labels: names,
          datasets: [
            {
              label: "Food Price",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data:prices,
            },
          ],
        };

        const config = {
          type: "bar",
          data: data,
        };
        const PriceChart = new Chart(
    document.getElementById('priceChart'),
    config
  );



  