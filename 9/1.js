"use strict";

/*
1. При изменении значения в input с id="from", значение содержащееся 
в нем должно моментально отображаться в span. То есть при печати в 
input'е тег span также должен меняться.
*/
const inputEl = document.getElementById("from");
const spanEl = document.querySelector("span");
inputEl.addEventListener("input", () => {
  spanEl.textContent = inputEl.value;
});

/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.
*/
const messageBtn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");
messageBtn.addEventListener("click", () => {
  message.classList.add("animate_animated", "animate_fadeInLeftBig");
  message.style.visibility = "visible";
});

/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. 
Если какое-либо поле не заполнено, форма не должна отправляться, также должны
 быть подсвечены незаполненные поля (необходимо поставить класс error 
    незаполненным полям). Как только пользователь начинает заполнять 
    какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error
     данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isFormValid = true;
  form.querySelectorAll(".form-control").forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("error");
      isFormValid = false;
    } else {
      input.classList.remove("error");
    }
  });
  if (isFormValid) {
    console.log("Форма успешно отправлена");
  }
});

form.querySelectorAll(".form-control").forEach((input) => {
  input.addEventListener("input", () => {
    if (!input.value.trim() && !input.classList.contains("error")) {
      input.classList.add("error");
    } else if (input.value.trim()) {
      input.classList.remove("error");
    }
  });
});
