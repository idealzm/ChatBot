const products = [
  { name: "Hyper", price: 99.0, image: "hyper.png", liked: true },
  { name: "Frame v1", price: 82.0, oldPrice: 99.5, image: "framev1.png" },
  { name: "Eclipse", price: 70.0, oldPrice: 86.0, image: "eclipse.png" },
  { name: "Spectra", price: 54.5, image: "spectra.png" }
];

const grid = document.getElementById("product-grid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = product.image;
  card.appendChild(img);

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = product.name;
  card.appendChild(name);

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = `$${product.price.toFixed(2)}`;
  card.appendChild(price);

  if (product.oldPrice) {
    const oldPrice = document.createElement("div");
    oldPrice.className = "old-price";
    oldPrice.textContent = `$${product.oldPrice.toFixed(2)}`;
    card.appendChild(oldPrice);
  }

  const heart = document.createElement("span");
  heart.className = `heart ${product.liked ? "liked" : ""}`;
  heart.textContent = "❤";
  card.appendChild(heart);

  grid.appendChild(card);
});
