const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const productId = urlParams.get("id");

const appContainer = document.querySelector("#container-shop");
async function fetchProducts() {
  const response = await fetch("/products.json");
  const products = await response.json();

  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  /*const newArticel = products.filter(function(product){
    return product.id === productId;
});*/

  //filter all products for product from id
  const newArticel = products.filter((product) => {
    if(product.id == productId) {
    return product;
    }
})[0];

  const productHtml = newArticel
.map(
    (_product) => `
    <section class="shop-section">
    <div class="shop-container">
       <img src="/images/img/coffe-sorte.png" alt="Kaffe Sorte Costa Rica" class="img-shop"> 
    </div>
    
    <div class="neue-spalte">
    <div>
    <h2 class="h2-shop">${_product.productName}</h2>
    <p class="text-shop">
    ${formatter.format(_product.price / 100)} 
    </p>
    <p class="text-shop">
        Costa Rica Filterkaffee ist äußerst ergiebig und hat praktisch keine Säure. Den Gaumen umschmeichelt ein vollmundiges Haselnussaroma. Gleich probieren!  
    </p>
    </div>
    
          <select name="menge" id="menge">
            <option value="" disabled selected hidden>"wie viel Kaffee brauchst du?"</option>
            <option value="kaffee1">250g gemahlen</option>
            <option value="kaffee2">500g gemahlen</option>
            <option value="kaffee3">250g Bohnen</option>
            <option value="kaffee4">500g Bohnen</option>
          </select><br>
          <div>
            <a class="shop-button" href="#">in den Warenkorb</a>
         </div>
   <aside class="shop-icons">
           <div class="drin-shop">
               <p>
           <img src="/images/icons/bohnen.svg" alt="KaffeeBohne">
               </p>
               <p>Mild</p>
           </div>
           <div class="drin-shop">
               <p>
               <img src="/images/icons/french_press.svg" alt="French-Press">
               </p>
               <p>Für <br>Filterkaffee</p>
           </div>
           <div class="drin-shop">
               <p>
               <img src="/images/icons/schaufel.svg" alt="Schaufel">
               </p>
               <p>gemahlen</p>
           </div>
   </aside>
</div>
            <div>
               <a class="shop-button2" href="#">in den Warenkorb</a>
            </div>
</section>
<article class="discription">
    <h3 class="h3-shop">Beschreibung</h3>
        <p class="text-shop">
        ${_product.discription}
        </p>
</article>
console.log(product);
 `
 )
  //join entfernt Trennzeichen 
  .join("");
 
  console.log(productHtml);
  appContainer.innerHTML = productHtml;
  
}
fetchProducts();
