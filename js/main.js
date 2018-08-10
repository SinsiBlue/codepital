import { Patient } from "./classes/patient.js";
import { Doctor } from "./classes/doctor.js";
import { Chat } from "./classes/chat.js"

var marcus = new Patient("Marcus", "mal indenté", 100, "vide", "malade", "");
var optimus = new Patient("Optimus", "unsave", 200, "vide", "malade", "");
var sangoku = new Patient("Sangoku", "404", 80, "vide", "malade", "");
var darthVader = new Patient("DarthVader", "asthmatique", 110, "vide", "malade", "");
var semiColon = new Patient("Semicolon", "syntaxError", 60, "vide", "malade", "");

var chat = new Chat("sphynx", "");

var debug = new Doctor("Debugger", 0, [marcus, optimus, sangoku, darthVader, semiColon], [chat]);

var prixConsultation = {
    montant: 50,
};
var pharmacie = {
    nom: "pharmacie",
    contenu: []
};
var cimetiere = {
    nom: "cimetière",
    contenu: []
};
var vieNormale = {
    nom: "vie normale",
    contenu: []
};


var hopital = {
    nom: "hopital",
    soins() {

        if (debug.salleDattente.length > 0) {

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
                console.log("Argent de " + debug.cabinet[1].nom + " AVANT payement: " + debug.cabinet[1].argent);
                console.log("Argent de " + debug.nom + " AVANT payement: " + debug.argent)
            }, 8000);
            setTimeout(() => {
                debug.cabinet[1].paye(prixConsultation, debug)
            }, 9000);
            setTimeout(() => {
                console.log("Argent de " + debug.cabinet[1].nom + " APRES payement: " + debug.cabinet[1].argent);
                console.log("Argent de " + debug.nom + " APRES payement: " + debug.argent)
            }, 9500);
            setTimeout(() => {
                debug.patientOut()
            }, 11000);
            setTimeout(() => {
                console.log(debug.salleDattente);
                console.log(debug.cabinet);
                console.log(pharmacie)
            }, 12000);
            setTimeout(() => {
                debug.salleDattente[debug.salleDattente.length - 1].goTo(debug.salleDattente, pharmacie)
            }, 13000);
            setTimeout(() => {
                console.log(debug.salleDattente);
                console.log(debug.cabinet);
                console.log(pharmacie)
            }, 14000);
            setTimeout(() => {
                pharmacie.contenu[0].paye(pharmacie, cimetiere);
            }, 18000);
            setTimeout(() => {
                if (pharmacie.contenu.length >= 1) {
                    pharmacie.contenu[0].takeCare(pharmacie, vieNormale)
                } else {

                }
            }, 24000);
            setTimeout(() => {
                hopital.soins()
            }, 26000);

        } else {
            console.log("Yes ! Il n'y a plus de patients. Ma journée est finie :-).");
            setTimeout(() => {
                console.log("Avant de partir, je vais voir comment se portent mes patients d'aujourd'hui...");
                setTimeout(() => {
                    console.log(vieNormale);                        
                    console.log("Sont dans la vie normale:");
                    setTimeout(() => {
                        vieNormale.contenu.forEach(function(element){console.log("          " + element.nom)});
                    }, 100);
                    setTimeout(() => {
                        console.log(cimetiere);
                        console.log("Sont morts:");                        
                    }, 150);
                    setTimeout(() => {
                        cimetiere.contenu.forEach(function(element){console.log("          " + element.nom)});
                    }, 200);
                }, 250);
            }, 500);
        }
    }
}
//  FINALEMENT CET HOPITAL FONCTIONNE !!! //
chat.miauler()
hopital.soins()