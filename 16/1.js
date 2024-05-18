"use strict";

//#region Задача 1:
/*
    Необходимо получить список всех пользователей с помощью 
    бесплатного API (https://jsonplaceholder.typicode.com/users) 
    и отобразить их на странице. Пользователь должен иметь 
    возможность удалить любого пользователя из списка.
*/
const userList = document.getElementById("userList");

const userTemplate = (user) => `
        <li class="user" data-id="${user.id}">
            ${user.name}
            <button class="delete-button">Delete</button>
        </li>
    `;

userList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const userItem = event.target.closest(".user");
    const userId = userItem.getAttribute("data-id");
    deleteUser(userId, userItem);
  }
});

const deleteUser = (userId, userElement) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      userElement.remove();
      console.log("User deleted.");
    } else {
      console.error("Failed to delete user");
    }
  });
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      userList.innerHTML += userTemplate(user);
    });
  });
//#endregion Задание 1

//#region Задача 2:
/*
    Необходимо реализовать отрисовку 10 картинок собак из 
    API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
*/
const dogImageTemplate = (src) => `
        <img src="${src}" class="dog-image" alt="Dog">
    `;

const dogImagesContainer = document.getElementById("dogImages");
let imagesLoaded = 0;

function loadDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogImagesContainer.innerHTML += dogImageTemplate(data.message);
      imagesLoaded++;
      if (imagesLoaded < 10) {
        setTimeout(loadDogImage, 3000);
      }
    });
}

loadDogImage();
//#endregion Задача 2:
