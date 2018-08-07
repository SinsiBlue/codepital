import { Patient } from "./classes/patient.js";
import { Doctor } from "./classes/doctor.js";
import { Chat } from "./classes/chat.js"

var marcus = new Patient("Marcus", malIndenté.nom, 100, "vide", "malade", "");
var optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade", "");
var sangoku = new Patient ("Sangoku", "404", 80, "vide", "malade", "");
var darthVader = new Patient ("DarthVader", "asthmatique", 110, "vide", "malade", ""); 
var semiColon = new Patient ("Semicolon", "syntaxError", 60, "vide", "malade", "");

var chat = new Chat ("sphynx", "");

var debug = new Doctor ("Debugger", 0, [marcus, optimus,sangoku, darthVader,semiColon], [chat]);

var prixConsultation = {
    montant: 50,
};
var malIndenté = {
    nom: "mal indenté",
    trait: "ctrl+maj+f",
    montant: 60,
}
var unsave = {
    nom: "mal indenté",
    trait: "ctrl+maj+f",
    montant: 60,
}
var e404 = {
    nom: "mal indenté",
    trait: "ctrl+maj+f",
    montant: 60,
}
var asthmatique = {
    nom: "mal indenté",
    trait: "ctrl+maj+f",
    montant: 60,
}

var syntaxError = [];

var cimetiere = [];

var vieNormale = [];


console.log(debug.salleDattente);
console.log(debug.cabinet);
setTimeout(() => {
    debug.patientIn();    
}, 1000);
setTimeout(() => {
    console.log(debug.salleDattente);    
}, 2000);
setTimeout(() => {
    console.log(debug.cabinet)
}, 3000);
setTimeout(() => {
    debug.diagnostique()
}, 4000);
setTimeout(() => {
    console.log(debug.cabinet[1].argent)
}, 8000);
setTimeout(() => {
    console.log(debug.argent)
}, 8500);
setTimeout(() => {
    debug.cabinet[1].paye(prixConsultation, debug)
}, 9000);
setTimeout(() => {
    console.log(debug.cabinet[1].argent)
}, 9500);
setTimeout(() => {
    console.log(debug.argent)
}, 10000);
setTimeout(() => {
    debug.patientOut()
}, 11000);
setTimeout(() => {
    console.log(debug.salleDattente);
    console.log(debug.cabinet)
}, 12000);
setTimeout(() => {
    debug.salleDattente[debug.salleDattente.length-1].goTo(debug.salleDattente, pharmacie)
}, 13000);
setTimeout(() => {
    console.log(debug.salleDattente);
    console.log(debug.cabinet);
    console.log(pharmacie)
}, 14000);
setTimeout(() => {
    
}, 15000);

// chat.miauler()