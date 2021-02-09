/***** Variablen 01 *******/

// Zeilenkommentar

/**
 * Blockkommentar
 */

// Ausgabe
//console.log("hallo");
//console.log(firstName + " " + familyName);

/* Deklaration + Wertzuweisung I 
let firstName;// Deklaration (Definition)
firstName = "Max"; // Wertzuweisung
let familyName = "Mütze"; // Dekl. + Wert.
console.log(firstName);
console.log(familyName);
console.log(firstName + " " + familyName);
*/

/* Deklaration + Wertzuweisung II 
let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben!");
familyName = prompt("Bitte Namen eingeben!");
console.log("Hallo, " + firstName + " " + familyName + "!");
*/

// JS ist eine untypisierte Sprache! | untyped
/*
let test;  // Deklaration
test = "hi";  // string 
test = 2; // number
test = true; // boolean

console.log("Typ: " + typeof test);
console.log("Inhalt: " + test);
*/

/***** Variablen 02 *******/

/*
// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Wertzuweisung | Assignment
let date = new Date();
let now = date.getFullYear();
ageJohn = 25;
ageMark = 30;

// Operation (Differenz)
birthYearJohn = now - ageJohn;
birthYearMark = now - ageMark;

//Ausgabe
console.log("Aktuelles Jahr: " + now);
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark: " + birthYearMark);
console.log("---------------------");
*/

/***** Variablen 03 *******/

// Deklaration / Wertzuweisung
let ageJohn, ageMark;
ageJohn = 35;
ageMark = 30;

// Operation (Vergleich/Test)
let isJohnOlder = (ageJohn > ageMark);

// isURLvalid() | Beispiel
console.log(isJohnOlder);