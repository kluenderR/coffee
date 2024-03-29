// import "/css/product.css";
// import product from "/css/product.css" assert { type: "css" };

const appContainer = document.querySelector("#product-container");

// promises
/*
fetch("./public/products.json") // ask for json data
  .then((response) => response.json()) // transform json to js object
  .then((json) => {
    // json is array of objects
    json.forEach((product) => {
      // create article
      const article = document.createElement("article");

      // create image
      const productImage = document.createElement("img");
      // set src attribute for image
      productImage.setAttribute(
        "src",
        "https://images.unsplash.com/photo-1484994211335-48e240f0d140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      );
      // append image to article
      article.append(productImage);

      // create product heading
      const productTitle = document.createElement("h3");
      // add class to title
      productTitle.classList.add("title--blue");
      productTitle.textContent = product.productName;
      // append heading to article
      article.append(productTitle);

      // create price
      const productPrice = document.createElement("span");
      productPrice.textContent = product.price;
      // append price to article
      article.append(productPrice);

      // append article to appContainer
      appContainer.append(article);
    });
  });
*/

// async/await
async function fetchProducts() {
  const response = await fetch("/products.json");
  const products = await response.json();
  //alert (products);

  /*
  const productsHtml = products
    .map((product) => {
      const productHtml = `
      <article>
        <h3 class="title--blue">${product.productName}</h3>
        <img src="https://images.unsplash.com/photo-1484994211335-48e240f0d140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
        <div>${product.price}</div>
      </article>
    `;
      return productHtml;
    })
    .join("");
    */
/*https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings*/

    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
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
