import { Patient } from "./classes/patient.js";
import { Doctor } from "./classes/doctor.js";
import { Chaton } from "./classes/chaton.js"

var marcus = new Patient("Marcus", "mal indenté", 100, "vide", "malade", "");
var optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade", "");
var sangoku = new Patient ("Sangoku", "404", 80, "vide", "malade", "");
var darthVader = new Patient ("DarthVader", "asthmatique", 110, "vide", "malade", ""); 
var semiColon = new Patient ("Semicolon", "syntaxError", 60, "vide", "malade", "");

var debug = new Doctor ("Debugger", 0, [marcus, optimus,sangoku, darthVader,semiColon], [chat]);

var chat = new Chaton ("sphynx", "")



// chat.miauler()