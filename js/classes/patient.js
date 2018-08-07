class Patient {
    constructor(nom, maladie, argent, poche, etatSante, traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
    }
   goTo(param1, param2){
    param2.push(param1.pop())
   }
   takeCare(){

   } 
   paye(quoi, qui){
        var solde = (this.argent -= quoi);
        qui.argent += solde;
   }
}

export { Patient }