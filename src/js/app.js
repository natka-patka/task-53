// import "../scss/app.scss";
// function myFunction() {
//   var element = document.getElementsByClassName("product");
//   element.setAttribute("data-price", "price" );
// }
// window.addEventListener("DOMContentLoaded", () => {
//   // This block will be executed once the page is loaded and ready


// });

// let productsEl=document.querySelectorAll('.product');
// let price = document.querySelector('.price').textContent;

// productsEl.forEach((x)=>x.setAttribute('data-price',price));

let priceValue = document.querySelector('.price').textContent;
let product = document.querySelector('.product')
product.setAttribute('data-price', priceValue)