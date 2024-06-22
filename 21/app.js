const classes = [
  {
    id: 1,
    name: "Йога",
    time: "10:00 - 11:00",
    maxParticipants: 10,
    currentParticipants: 5,
  },
  {
    id: 2,
    name: "Пилатес",
    time: "11:00 - 12:00",
    maxParticipants: 8,
    currentParticipants: 8,
  },
  {
    id: 3,
    name: "Кардиотренировка",
    time: "12:00 - 13:00",
    maxParticipants: 12,
    currentParticipants: 6,
  },
];

function renderClasses() {
  const container = document.getElementById("classes-container");
  container.innerHTML = "";

  classes.forEach((cls) => {
    const classCard = document.createElement("div");
    classCard.className = "col-md-4 class-card";
    classCard.innerHTML = `
            <div class="card ${
              cls.currentParticipants >= cls.maxParticipants ? "full" : ""
            }">
                <div class="card-body">
                    <h5 class="card-title">${cls.name}</h5>
                    <p class="card-text">Время: ${cls.time}</p>
                    <p class="card-text">Участников: ${
                      cls.currentParticipants
                    } / ${cls.maxParticipants}</p>
                    <button class="btn btn-primary btn-enroll" ${
                      cls.currentParticipants >= cls.maxParticipants
                        ? "disabled"
                        : ""
                    } data-id="${cls.id}">Записаться</button>
                    <button class="btn btn-danger btn-cancel" ${
                      cls.currentParticipants === 0 ? "disabled" : ""
                    } data-id="${cls.id}">Отменить запись</button>
                </div>
            </div>
        `;
    container.appendChild(classCard);
  });

  $(".btn-enroll").click(function () {
    const id = $(this).data("id");
    enroll(id);
  });

  $(".btn-cancel").click(function () {
    const id = $(this).data("id");
    cancelEnrollment(id);
  });
}

function enroll(id) {
  const cls = classes.find((cls) => cls.id === id);
  if (cls && cls.currentParticipants < cls.maxParticipants) {
    cls.currentParticipants++;
    renderClasses();
  }
}

function cancelEnrollment(id) {
  const cls = classes.find((cls) => cls.id === id);
  if (cls && cls.currentParticipants > 0) {
    cls.currentParticipants--;
    renderClasses();
  }
}

$(document).ready(function () {
  renderClasses();
});
