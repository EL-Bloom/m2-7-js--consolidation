const itemsList = document.getElementById("items-list");
const itemDetails = document.getElementById("item-details");
let btn2018 = document.getElementById("button2018");
let btn2019 = document.getElementById("button2019");
let year = document.getElementById("year");
let largeNumber = document.getElementById("large-number");
let hoverText = document.getElementById("hoverText");
let foodItem = document.getElementById("food-item");
let number = Array.from(document.getElementsByClassName("that"));


year.innerText = "2018";

btn2018.addEventListener("click", () => {
  year.innerText = "2018";
});

btn2019.addEventListener("click", () => {
  year.innerText = "2019";
});

number.forEach((number, index) => {
  number.addEventListener("mouseover", function () {
    largeNumber.innerText = "";
    // hide the hover-suggestion message
    largeNumber.style.display = "block";
    hoverText.style.display = "none";
    foodItem.innerText = topTenList[year.innerText][number.innerText].id;
    // assign the large number an inner text of the current number's index + 1
    foodItem.style.display = "block";
    largeNumber.innerText = `${index + 1}`;
    // the large number is hidden by default, so display it
    largeNumber.style.display = "flex";
    // assign the food item an inner text by referencing the top ten list [array][object based on array index].key
    foodItem.innerText = topTenList[year.innerText][index].name;
    // the food item is hidden by default, so display it
    foodItem.style.display = "flex";
  });
  number.addEventListener("mouseout", function () {
    // display the hover suggestion again
    hoverText.style.display = "flex";
    // hide both the large number and food item again
    largeNumber.style.display = "none";
    foodItem.style.display = "none";
  });
});
