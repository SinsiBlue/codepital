class Patient {
    constructor(nom, maladie, argent, poche, etatSante, traitement) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
    }
    goTo(param1, param2) {
        param2.contenu.push(param1.pop())
    }
    takeCare(param, paramVie) {
        // if (param) {

        // } else {

        // };
        param.contenu[0].etatSante = "bonne santé";
        param.contenu[0].poche = "le médicament a été ingéré"
        console.log("Me voilà donc en " + param.contenu[0].etatSante + "...");
        setTimeout(() => {
            paramVie.contenu.push(param.contenu.pop())
            console.log(paramVie)
        }, 500);
    }
    paye(param, paramCim) {

        if (param.montant == 50) {
            this.argent -= param.montant;
            paramCim.argent += param.montant;
        } else {
            console.log("Bonjour, je suis " + param.contenu[0].etatSante + " de " + param.contenu[0].maladie.toUpperCase() + " et j'aurais besoin de " + param.contenu[0].traitement + ".");

            setTimeout(() => {
                var prixMedoc;
                switch (param.contenu[0].traitement) {
                    case "ctrl+maj+f":
                        prixMedoc = 60;
                        break;
                    case "saveOnFocusChange":
                        prixMedoc = 100;
                        break;
                    case "CheckLinkRelation":
                        prixMedoc = 35;
                        break;
                    case "Ventoline":
                        prixMedoc = 40;
                        break;
                    case "f12+doc":
                        prixMedoc = 20;
                        break;
                    default:
                        prixMedoc = 0;
                };
                console.log("Cela fera un total de " + prixMedoc + ".");
                setTimeout(() => {
                    if (param.contenu[0].argent >= prixMedoc) {
                        console.log("Parfait! Voici " + prixMedoc + ".");
                        param.contenu[0].argent -= prixMedoc;
                        param.contenu[0].poche = param.contenu[0].traitement;
                        setTimeout(() => {
                            console.log("Ma poche contient maintenant: " + param.contenu[0].poche + " que je vais prendre immédiatement! ;-)")
                        }, 200);
                        setTimeout(() => {
                            console.log(" Et il  me reste encore " + (param.contenu[0].argent) + ".");
                        }, 500);
                    } else {
                        console.log("Zut alors! je n'ai pas assez d'argent... :-(");
                        param.contenu[0].etatSante = "mort";
                        setTimeout(() => {
                            console.log(param.contenu[0].nom + " est " + param.contenu[0].etatSante + "...");
                            console.log("R.I.P. " + param.contenu[0].nom + ".")
                        }, 500);
                        setTimeout(() => {
                            paramCim.contenu.push(param.contenu.pop())
                            console.log(paramCim)
                        }, 1000);
                    }
                }, 1500);
            }, 2000);
        }

        // this.argent -= quoi.montant;
        // qui.argent += quoi.montant;
    }
    achete(param, paramCim) {
        // console.log("Bonjour, je suis " + param.contenu[0].etatSante + " de " + param.contenu[0].maladie.toUpperCase() + " et j'aurais besoin de " + param.contenu[0].traitement + ".");

        // setTimeout(() => {
        //     var prixMedoc;
        //     switch (param.contenu[0].traitement) {
        //         case "ctrl+maj+f":
        //             prixMedoc = 60;
        //             break;
        //         case "saveOnFocusChange":
        //             prixMedoc = 100;
        //             break;
        //         case "CheckLinkRelation":
        //             prixMedoc = 35;
        //             break;
        //         case "Ventoline":
        //             prixMedoc = 40;
        //             break;
        //         case "f12+doc":
        //             prixMedoc = 20;
        //             break;
        //         default:
        //             prixMedoc = 0;
        //     };
        //     console.log("Cela fera un total de " + prixMedoc + ".");
        //     setTimeout(() => {
        //         if (param.contenu[0].argent >= prixMedoc) {
        //             console.log("Parfait! Voici " + prixMedoc + ".");
        //             param.contenu[0].argent -= prixMedoc;
        //             param.contenu[0].poche = param.contenu[0].traitement;
        //             setTimeout(() => {
        //                 console.log("Ma poche contient maintenant: " + param.contenu[0].poche + " que je vais prendre immédiatement! ;-)")
        //             }, 200);
        //             setTimeout(() => {
        //                 console.log(" Et il  me reste encore " + (param.contenu[0].argent) + ".");
        //             }, 500);
        //         } else {
        //             console.log("Zut alors! je n'ai pas assez d'argent... :-(");
        //             param.contenu[0].etatSante = "mort";
        //             setTimeout(() => {
        //                 console.log(param.contenu[0].nom + " est " + param.contenu[0].etatSante + "...");
        //                 console.log("R.I.P. " + param.contenu[0].nom + ".")
        //             }, 500);
        //             setTimeout(() => {
        //                 paramCim.contenu.push(param.contenu.pop())
        //                 console.log(paramCim)
        //             }, 1000);
        //         }
        //     }, 1500);
        // }, 2000);
    }
}

export {
    Patient
}