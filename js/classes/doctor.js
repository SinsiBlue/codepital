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

    }
    patientOut(){

    }
}

export { Doctor }