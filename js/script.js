let element1 = document.createElement("h5");
let myContent = document.createTextNode("Element 4");
element1.appendChild(myContent);
element1.classList.add("element4");
document.getElementById("conteneur").appendChild(element1);

let element2 = document.createElement("h5");
let myContent2 = document.createTextNode("Element 5");
element2.appendChild(myContent2);
element2.classList.add("element5");
document.getElementById("conteneur").appendChild(element2);
console.log(document.getElementById("conteneur").innerHTML);

localStorage.setItem('Personne', 'DA-SILVA-GOMES Matthéo');

localStorage.getItem('Personne');


let objVoiture1 = {
    marque : "Peugeot",
    modele : "308",
    annee : 2022
}
let objLinea1 = JSON.stringify(objVoiture1);

let objVoiture2 = {
    marque : "Ford",
    modele : "Mondeo",
    annee : 2018
}
let objLinea2 = JSON.stringify(objVoiture2);

let objVoiture3 = {
    marque : "SEAT",
    modele : "Ibiza",
    annee : 2020
}
let objLinea3 = JSON.stringify(objVoiture3);

let objVoiture4 = {
    marque : "Chevrollet",
    modele : "Camaro",
    annee : 1977
}
let objLinea4 = JSON.stringify(objVoiture4);

let objVoiture5 = {
    marque : "Tesla",
    modele : "S",
    annee : 2022
}
let objLinea5 = JSON.stringify(objVoiture5);

localStorage.setItem("obj1",objLinea1);
localStorage.setItem("obj2",objLinea2);
localStorage.setItem("obj3",objLinea3);
localStorage.setItem("obj4",objLinea4);
localStorage.setItem("obj5",objLinea5);