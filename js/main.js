import { Patient } from "./classes/patient.js";
import { Doctor } from "./classes/doctor.js";
import { Chaton } from "./classes/chaton.js"

var marcus = new Patient("Marcus", "mal indenté", 100, "vide", "malade", "");
var optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade", "");
var sangoku = new Patient ("Sangoku", "404", 80, "vide", "malade", "");
var darthVader = new Patient ("DarthVader", "asthmatique", 110, "vide", "malade", ""); 
var semiColon = new Patient ("Semicolon", "syntaxError", 60, "vide", "malade", "");

var chat = new Chaton ("sphynx", "");

var debug = new Doctor ("Debugger", 0, [marcus, optimus,sangoku, darthVader,semiColon], [chat]);

var prixConsultation = 50;


var pharmacie = [];

var cimetiere = [];


console.log(debug.salleDattente);
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
}, 9000);
setTimeout(() => {
    debug.cabinet[1].paye(prixConsultation, debug)
}, 10000);
setTimeout(() => {
    console.log(debug.cabinet[1].argent)
}, 12000);
setTimeout(() => {
    console.log(debug.argent)
}, 14000);
// setTimeout(() => {
//     debug.cabinet[1].paye(prixConsultation)
// }, 8000);

// chat.miauler()