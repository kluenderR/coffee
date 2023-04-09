const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const productId = urlParams.get("id");

const appContainer = document.querySelector("#container-shop");
async function fetchProducts() {
  const response = await fetch("/products.json");
  const products = await response.json();
  
  const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
});

const newArticel = products.filter(function(product){
    return product.id === productId;
});



}
console.log (newArticel);

 
