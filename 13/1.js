"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9]
// с помощью Math.min и spread оператора,
// найти минимальное число в массиве,
// решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
const min = Math.min(...arr);

// 2) Напишите функцию createCounter, которая создает
// счетчик и возвращает объект с двумя методами:
// increment и decrement. Метод increment должен
// увеличивать значение счетчика на 1, а метод decrement
// должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только
// через методы объекта, а не напрямую.

function createCounter() {
  let count = 0;
  return {
    increment: () => (count += 1),
    decrement: () => (count -= 1),
  };
}

/*
3) Напишите рекурсивную функцию findElementByClass,
 которая принимает корневой элемент дерева DOM 
 и название класса в качестве аргументов и возвращает 
 первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/

const rootElement = document.getElementById("container");

console.log(rootElement);
function findElementByClass(rootElement, className) {
  console.log(rootElement.classList.contains(className));
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }
  for (let child of rootElement.children) {
    let found = findElementByClass(child, className);
    if (found) return found;
  }
  return null;
}

const elem = findElementByClass(rootElement, "find_me_if_you_can");
console.log(elem);
