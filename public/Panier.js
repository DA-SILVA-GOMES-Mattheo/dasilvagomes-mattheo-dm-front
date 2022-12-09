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
    panier = panier.filter(p => p.id !== produit.id);
    savePanier(panier);
}

function changeQuantity(produit, quantity) {
    let panier = getPanier();
    panier = panier.filter(p => p.id !== produit.id);
    if (produitTrouve != undefined) {
        produitTrouve.quantity += quantity;
    }
    savePanier(panier);
}