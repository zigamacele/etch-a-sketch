"use strict";
let container = document.querySelector(".container");
let button = document.querySelector(".button");

function createGrid(number) {
  let calcNumber = number * number;
  for (let i = 0; i < calcNumber; i++) {
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container-div");
    container.appendChild(containerDiv);
  }

  let allDivs = document.querySelectorAll(".container-div");
  allDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
    });
  });
}

createGrid(16);

let removeDiv = function () {
  document.querySelectorAll(".container-div").forEach((div) => {
    div.remove();
  });
};
let createDiv = function () {
  let buttonPrompt = Number(prompt("How many squares do you want?"));
  if (buttonPrompt > 100) {
    alert("pick a number lower then 100!");
  } else {
    createGrid(buttonPrompt);
    container.style["grid-template-columns"] = `repeat(${buttonPrompt}, 1fr)`;
    container.style["grid-template-rows"] = `repeat(${buttonPrompt}, 1fr)`;
  }
};

button.addEventListener("click", () => {
  removeDiv();
  createDiv();
});
