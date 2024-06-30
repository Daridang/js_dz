const apiKey = "";
const imageElement = document.getElementById("random-image");
const photographerElement = document.getElementById("photographer");
const likeButton = document.getElementById("like-button");
const likeCountElement = document.getElementById("like-count");
const historyElement = document.getElementById("history");

async function fetchRandomImage() {
  try {
    const response = await fetch("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });
    const data = await response.json();
    displayImage(data);
    addToHistory(data);
  } catch (error) {
    console.error("Error fetching random image:", error);
  }
}

function displayImage(data) {
  imageElement.src = data.urls.regular;
  photographerElement.textContent = data.user.name;
  const imageId = data.id;
  const storedLikes = localStorage.getItem(imageId);
  const likeCount = storedLikes ? parseInt(storedLikes) : 0;
  likeCountElement.textContent = likeCount;
  likeButton.classList.toggle("liked", !!storedLikes);
  likeButton.onclick = () => toggleLike(imageId);
}

function toggleLike(imageId) {
  let likeCount = parseInt(likeCountElement.textContent);
  if (localStorage.getItem(imageId)) {
    likeCount -= 1;
    localStorage.removeItem(imageId);
    likeButton.classList.remove("liked");
  } else {
    likeCount += 1;
    localStorage.setItem(imageId, likeCount);
    likeButton.classList.add("liked");
  }
  likeCountElement.textContent = likeCount;
}

function addToHistory(data) {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const imageInfo = {
    id: data.id,
    url: data.urls.thumb,
    photographer: data.user.name,
  };
  history.push(imageInfo);
  localStorage.setItem("history", JSON.stringify(history));
  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  historyElement.innerHTML = "";
  history.forEach((imageInfo) => {
    const img = document.createElement("img");
    img.src = imageInfo.url;
    img.alt = `Photo by ${imageInfo.photographer}`;
    img.onclick = () => displayImageFromHistory(imageInfo);
    historyElement.appendChild(img);
  });
}

function displayImageFromHistory(imageInfo) {
  imageElement.src = imageInfo.url.replace("thumb", "regular");
  photographerElement.textContent = imageInfo.photographer;
  const imageId = imageInfo.id;
  const storedLikes = localStorage.getItem(imageId);
  const likeCount = storedLikes ? parseInt(storedLikes) : 0;
  likeCountElement.textContent = likeCount;
  likeButton.classList.toggle("liked", !!storedLikes);
  likeButton.onclick = () => toggleLike(imageId);
}

window.onload = () => {
  fetchRandomImage();
  updateHistoryDisplay();
};
