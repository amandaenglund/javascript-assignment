//Inlämningsuppgift för David//

var count = 0;
var step = 1;

//Tar upp informationen från JSON-filen
fetch("products.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    productData = data;
    createListFromProductData();
    console.log(productData);
});

//Skapa vår funktion, lista och vår loop
function createListFromProductData() {

    //Gör en variabel av html-diven main
    var main = document.getElementById("main");

    //Loopa genom listan
    for(var index = 0; index < productData.length; index++) {

    //Vi anropar vår nya funktion 
    var productCard = createProductCard(productData[index]);
    
    //Sen lägger vi till vårt produktkort i main-diven
    main.appendChild(productCard);
    
    }

    //Skriv ut main
    document.body.appendChild(main);

}

//Vi skapar vår nya funktion. Detta gör vi utanför/efter vår tidigare funktion
function createProductCard (productData) {
    var productCard = document.createElement("div")
    productCard.className = "productCardClass";

    //Title
    var getProductTitle = document.createElement("h2");
    getProductTitle.innerText = productData.title;
    productCard.appendChild(getProductTitle);

    //Description
    var getProductsDescription = document.createElement("p");
    getProductsDescription.innerText = productData.description;
    productCard.appendChild(getProductsDescription);

    //Image
    var getProductImage = document.createElement("img");
    getProductImage.src = "assets/" + productData.image;
    productCard.appendChild(getProductImage);

    //Price
    var getProductPrice = document.createElement("h3");
    getProductPrice.innerText = productData.price + " kr";
    productCard.appendChild(getProductPrice);

    //Button
    var buttonElement = document.createElement("button");
    buttonElement.onclick = function() {positive()};    
    buttonElement.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i>' + "Lägg till i kundvagnen";
    productCard.appendChild(buttonElement);        
    

    //Räknaren uppe vid kundvagnen
    var span = document.querySelector("span");
    span.innerText = count;

    function negative() {
        if (count - step > 0) {
        count = count - step;
        span.innerText = count;
        }
    }

    function positive() {
        if (count + step > 8) {
            return;
        }
        count = count + step;
        span.innerText = count;
    }


//Med retur skriver vi ut vad funktionen har skapat
return productCard;
    
}

//kod till kundvagnen...finns inte tyvärr!

