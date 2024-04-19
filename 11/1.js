"use strict";

async function fetchJsonData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the JSON data:", error);
    throw error;
  }
}

const url = "MOCK_DATA.json";

fetchJsonData(url)
  .then((data) => {
    renderProducts(data);
  })
  .catch((error) => {
    console.error(error);
  });

function createProductCard(product) {
  return `
      <div class="product-card" id="product-${product.id}">
        <img src="${product.img_url}" alt="${product.altText}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span class="price">$${product.price}</span>
      </div>
    `;
}

function renderProducts(products) {
  const container = document.getElementById("productsContainer");
  container.innerHTML = products.map(createProductCard).join("");
}
