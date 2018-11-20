class Doctor {
    constructor(nom, argent, salleDattente, cabinet){
        this.nom = nom;
        this.argent = argent;
        this.salleDattente = salleDattente;
        this.cabinet = cabinet;
    }
    patientIn(){
        // var patientAexaminer = this.salleDattente.shift();
        this.cabinet.push(this.salleDattente.shift())
    }
    diagnostique(){
        console.log("Bonjour " + this.cabinet[1].nom + ", vous êtes " + this.cabinet[1].etatSante + ". En effet vous êtes: " + this.cabinet[1].maladie.toUpperCase() + ".");
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
            this.cabinet[1].traitement = traitement;
            this.cabinet[1].etatSante = "diagnostiqué";
            setTimeout(() => {
                console.log("Vous m'avez consulté et votre état de santé est mainttenant: " + this.cabinet[1].etatSante);
                console.log("Afin de vous soigner, il vous faudra prendre le traitement suivant: " + traitement + " :-) !");
            }, 200);
        }, 6000);
    }
    patientOut(){
        // var pe = this.cabinet.pop();
        this.salleDattente.push(this.cabinet.pop())
    }
}

export { Doctor }