"use strict";

/* []() []() 1. Найти по id, используя getElementById, элемент
  с id равным "super_link" и вывести этот элемент в консоль. 
*/
const aEl = document.getElementById("super_link");
console.log(aEl);

/*
  []() 2. Внутри всех элементов на странице, которые имеют класс "card-link", 
  поменяйте текст внутри элемента на "ссылка". 
*/
const cardsEl = document.querySelectorAll(".card-link");
cardsEl.forEach((el) => (el.innerText = "ссылка"));

/*
  []() 3. Найти все элементы на странице с классом "card-link", 
  которые лежат в элементе с классом "card-body" и вывести
  полученную коллекцию в консоль. 
*/
const linksEl = document.querySelectorAll(".card-body .card-link");
console.log(linksEl);

/*
  []() 4. Найти первый попавшийся элемент на странице у которого есть 
  атрибут data-number со значением 50 и вывести его в консоль. 
*/
let element = document.querySelector('[data-number="50"]');
console.log(element);

/*
  []() 5. Выведите содержимое тега title в консоль. 
*/
console.log(document.title);

/*
  []() 6. Получите элемент с классом "card-title" и выведите его 
  родительский узел в консоль.
*/
const cardEl = document.querySelector(".card-title");
console.log(cardEl.parentNode);

/*
  []() 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте
  созданный тег в начало элемента, который имеет класс "card".
*/
const pEl = document.createElement("p");
pEl.textContent = "Привет";
const cardClassEl = document.querySelector(".card");
cardClassEl.insertBefore(pEl, cardClassEl.firstChild);

/* 
  8. Удалите тег h6 на странице.  
*/
const h6El = document.querySelector("h6");
h6El.remove();
