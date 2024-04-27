"use strict";

//#region Задание 1
/*
Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами 
и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге 
(название, автор и количество страниц).
*/

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Название книги: ${this.title}`);
    console.log(`Автор: ${this.author}`);
    console.log(`Количество страниц: ${this.pages}`);
  }
}

const myBook = new Book("Война и мир", "Лев Толстой", 1225);
myBook.displayInfo();
//#endregion
