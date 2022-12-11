function savePanier(panier) {
    localStorage.setItem("panier", JSON.stringify(panier));
}

function getPanier() {
    let panier = localStorage.getItem("panier");
    if (panier == null) {
        return [];
    } else {
        return JSON.parse(panier);
    }
}

function addPanier(produit) {
    let panier = getPanier();
    let produitTrouve = panier.find(p => p.id == produit.id);
    if (produitTrouve != undefined) {
        produitTrouve.quantity++;
    } else {
        produit.quantity = 1;
        panier.push(produit);
    }
    savePanier(panier);
}

function supprimerDuPanier(produit) {
    let panier = getPanier();
    panier = panier.filter(p => p.id != produit.id);
    savePanier(panier);
}

function changeQuantity(produit, quantity) {
    let panier = getPanier();
    let produitTrouve = panier.find(p => p.id == produit.id);
    if (produitTrouve != undefined) {
        produitTrouve.quantity += quantity;
        if (produitTrouve.quantity <= 0) {
            supprimerDuPanier(produitTrouve);
        } else {
            savePanier(panier);
        }
    }
}

function getNombreProduit() {
    let panier = getPanier();
    let nombre = 0;
    for (let produit of panier) {
        nombre += produit.quantity;
    }
    return nombre;
}

function getPrixTotal() {
    let panier = getPanier();
    let total = 0;
    for (let produit of panier) {
        total += produit.quantity * produit.prix;
    }
    return total;
}








//buttons temps réel

const plus = document.querySelector(".plus"),
    num = document.querySelector(".num"),
    moins = document.querySelector(".moins");

let a = 0;

plus.addEventListener("click", () => {

    a++;

    a = (a < 10) ? "0" + a : a;

    num.value = a;

});

moins.addEventListener("click", () => {

    if (a > 0) {

        a--;

        a = (a < 10) ? "0" + a : a;

        num.value = a;
    }
});

//num.addEventListener("click", () => {

//});
//document.querySelector('.num').value