class Doctor {
    constructor(nom, argent, salleDattente, cabinet){
        this.nom = nom;
        this.argent = argent;
        this.salleDattente = salleDattente;
        this.cabinet = cabinet;
    }
    patientIn(){
        var patientAexaminer = this.salleDattente.shift();
        this.cabinet.push(patientAexaminer)
    }
    diagnostique(){
        console.log("Bonjour " + this.cabinet[1].nom + ", vous êtes " + this.cabinet[1].etatSante + ": en effet vous êtes " + this.cabinet[1].maladie.toUpperCase() + ".");
        setTimeout(() => {
            var traitement;
            switch (this.cabinet[1].maladie){
                case "mal indenté":
                traitement = "ctrl+maj+f";
                break;
                case "unsave":
                traitement = "saveOnFocusChange";
                break;
                case "404":
                traitement = "CheckLinkRelation";
                break;
                case "asthmatique":
                traitement = "Ventoline";
                break;
                case "syntaxError":
                traitement = "f12+doc";
                break;
                default:
                traitement = "Wtf!! Je ne sais pas de quelle maladie vous souffrez.";
            }
            console.log("Afin de vous soigner, il vous faudra prendre le traitement suivant: " + traitement.toUpperCase() + " :-) !")
        }, 3000);
    }
    patientOut(){

    }
}

export { Doctor }