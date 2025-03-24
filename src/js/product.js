const appContainer = document.querySelector("#product-container");

// async/await
async function fetchProducts() {
  const response = await fetch("/products.json");
  const products = await response.json();

  /*https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
  These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0,  (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, (causes 2500.99 to be printed as $2,501)*/

    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });

  const productsHtml = products
    .map(
      (product) => `
    <a href="/shop/index.html?id=${product.id}" class="container-product" >
        <img src="/images/img/coffe-sorte.png" class="img-container">
            <div class="price">
                <p class="text-product">
                    ${product.productName}
                </p>
                <p class="price-product">
                ${formatter.format(product.price / 100)}           
                </p>
                <p class="p-span">
                                <span>
                                    <img src="/images/icons/bohnen.svg" alt="Kaffeebohnen" class="bohne">
                                </span>
                                <span>
                                    <img src="/images/icons/french_press.svg" alt="French Press" class="press">
                                </span>
                                <span>
                                    <img src="/images/icons/schaufel.svg" alt="Schaufel" class="schaufel">
                                </span>
                </p>         
         </div> 
    </a>
   `
    )
    //join entfernt Trennzeichen 
    .join("");

  console.log(productsHtml);
  appContainer.innerHTML = productsHtml;
}
fetchProducts();
