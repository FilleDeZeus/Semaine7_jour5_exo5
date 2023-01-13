// ---EXERCICE 1
let titre = document.querySelector("h2.ml-5").textContent;
console.log(titre);
//let titre = document.querySelector("h2.ml-5").innerHTML;
//console.log(titre);

// ---EXERCICE 2
let titre2 = document.querySelector('h2.ml-5');
titre2.innerHTML = 'Exercice 1';

// ---EXERCICE 3
let p = document.querySelector('h2.ml-5').nextElementSibling;
p.innerHTML = `2. Trouve le moyen de modifier sa valeur par "Exercice 1"`;

// ---EXERCICE 4

let section = document.querySelector('div.container').firstElementChild;
console.log(section.id);

//----EXERCICE 5
console.log(document.querySelector('h1').className);
console.log(document.querySelector('h1').classList);

//----EXERCICE 6
let class1  = document.querySelectorAll("h1");
class1.forEach(element => {
    console.log(element.className);
});

//----EXERCICE 7
console.log(document.querySelector("input").attributes);

//----EXERCICE 8
console.log(document.querySelector("input").attributes.type.value);


//----EXERCICE 9
document.querySelector("#inputPassword3").setAttribute("type","password");
console.log(document.querySelector("#inputPassword3"));

//----EXERCICE 10
document.querySelector("input").setAttribute("type","color");
console.log(document.querySelector("input"));