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