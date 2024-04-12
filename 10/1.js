"use strict";

fetchData().then((data) => {
  createUserCard(data.results[0]);
});


function createUserCard(userData) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = userData.picture.large;
  img.alt = `Profile picture of ${userData.name.first} ${userData.name.last}`;
  card.appendChild(img);

  const name = document.createElement("h2");
  name.textContent = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
  card.appendChild(name);

  const genderNat = document.createElement("p");
  genderNat.textContent = `Gender: ${userData.gender}, Nationality: ${userData.nat}`;
  card.appendChild(genderNat);

  const email = document.createElement("p");
  email.textContent = `Email: ${userData.email}`;
  card.appendChild(email);

  const loginInfo = document.createElement("p");
  loginInfo.textContent = `Username: ${userData.login.username}`;
  card.appendChild(loginInfo);

  const phones = document.createElement("p");
  phones.textContent = `Phone: ${userData.phone}, Cell: ${userData.cell}`;
  card.appendChild(phones);

  const address = document.createElement("p");
  address.textContent = `Address: ${userData.location.street.number} ${userData.location.street.name}, ${userData.location.city}, ${userData.location.state}, ${userData.location.country}, ${userData.location.postcode}`;
  card.appendChild(address);

  const dob = document.createElement("p");
  dob.textContent = `DOB: ${new Date(
    userData.dob.date
  ).toLocaleDateString()} (Age: ${userData.dob.age})`;
  card.appendChild(dob);

  const registered = document.createElement("p");
  registered.textContent = `Registered: ${new Date(
    userData.registered.date
  ).toLocaleDateString()} (Account Age: ${userData.registered.age} years)`;
  card.appendChild(registered);

  document.body.appendChild(card);
}
