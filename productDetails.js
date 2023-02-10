var div1 = document.createElement("div");
var img1 = document.createElement("img");
img1.src =
  "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/591070wa2m-01000__1_360x.jpg?v=1666205739";

div1.append(img1);

div1.addEventListener("click", function () {
  document.querySelector("#main_image").innerText = "";
  div1.style.border = "2px solid black";
  div2.style.border = "none";
  div3.style.border = "none";
  div4.style.border = "none";
  showImage(img1.src);
});
var div2 = document.createElement("div");
var img2 = document.createElement("img");
img2.src =
  "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/591070wa2m-01000__2_360x.jpg?v=1666205741";

div2.append(img2);

div2.addEventListener("click", function () {
  div2.style.border = "2px solid black";
  div1.style.border = "none";
  div3.style.border = "none";
  div4.style.border = "none";
  document.querySelector("#main_image").innerText = "";
  showImage(img2.src);
});

var div3 = document.createElement("div");
var img3 = document.createElement("img");
img3.src =
  "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/591070wa2m-01000__3_360x.jpg?v=1666205742";

div3.append(img3);

div3.addEventListener("click", function () {
  div3.style.border = "2px solid black";
  div1.style.border = "none";
  div2.style.border = "none";
  div4.style.border = "none";
  document.querySelector("#main_image").innerText = "";
  showImage(img3.src);
});

var div4 = document.createElement("div");
var img4 = document.createElement("img");
img4.src =
  "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/591070wa2m-01000__4_360x.jpg?v=1666205744";

div4.append(img4);

div4.addEventListener("click", function () {
  div4.style.border = "2px solid black";
  div2.style.border = "none";
  div3.style.border = "none";
  div1.style.border = "none";
  document.querySelector("#main_image").innerText = "";
  showImage(img4.src);
});

document.querySelector("#diff_images").append(div1, div2, div3, div4);

function showImage(img) {
  var image = document.createElement("img");
  image.src = img;
  document.querySelector("#main_image").append(image);
}

document
  .querySelector("#add_to_cart > button")
  .addEventListener("click", function () {
    alert("Product is successfully added to the cart");
    window.location.href = "Cart.html";
  });
