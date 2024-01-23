// Var-01

// let div = document.getElementById("monDiv");
// div.innerText = "nouveau div";
// ----------------------------------------------------------------------------------
// Var-02

// // laVariable
// var numero = 0;

// // cree incrementation numero = nurmero + 1
// function incrementer() {
    
//     numero++;
//     mettreAJourNumero();
// }

// // cree decrementer numero = nurmero - 1
// function decrementer() {

//     numero--;
//     mettreAJourNumero();
// }

// function mettreAJourNumero() {
//     document.getElementById("valeurVariable").innerHTML = numero;
// }
// ----------------------------------------------------------------------------------
// Var-03

// let variable_01 = "Bonjour, ";
// let variable_02 = "Je m'appelle ";
// let variable_03 = "Hemza";
// let lesTroisVariable = variable_01 + variable_02 + variable_03

// let paraghaphe = document.getElementById("chaineDeCaracter");
// paraghaphe.innerText = lesTroisVariable;
// ----------------------------------------------------------------------------------
// Var-04

// let tableau = [4, 60, 88, 127, 36, 95, 44, 55];

// var listeAPuces = document.getElementById("listeAPuces");

// for (let i = 0; i < tableau.length; i++) {

//     var listli = document.createElement("li");
//     listli.textContent = tableau[i];
//     listeAPuces.appendChild(listli);
// }

// function calculerMoyenne() {
//     var somme = 0;

//     for (var i = 0; i < tableau.length; i++) {
//         somme += tableau[i];
//     }

//     var moyenne = somme / tableau.length;

//     var resultatMoyenne = document.createElement("p");
//     resultatMoyenne.textContent = "La moyenne est : " + moyenne.toFixed(0);
//     document.body.appendChild(resultatMoyenne);
// }
// ----------------------------------------------------------------------------------
// Var-05
console.log( new Date(2024, 1, 18, 18, 15));