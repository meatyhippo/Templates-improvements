function price(){
    let prices = document.getElementsByClassName('price');
    for (i = 0; i < prices.length; ++i) {
        console.log(prices[i].innerHTML.trim());
        if (prices[i].innerHTML.trim() === "€0,00"){
            prices[i].innerHTML = "Prijs op aanvraag";
        };
      };
    };
document.addEventListener("DOMContentLoaded", price);