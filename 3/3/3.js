"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const number1 = Number(prompt("Введите первое число:"));
const number2 = Number(prompt("Введите второе число:"));
const number3 = Number(prompt("Введите третье число:"));

function printMaxValue(n1, n2, n3) {
  let maxNumber;

  if (n1 >= n2 && n1 >= n3) {
    maxNumber = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    maxNumber = n2;
  } else {
    maxNumber = n3;
  }

  // или...
  // const maxNumber = Math.max(n1, n2, n3);

  console.log(
    `Максимальное значение среди чисел ${n1}, ${n2}, ${n3} равно ${maxNumber}.`
  );
}

printMaxValue(number1, number2, number3);
