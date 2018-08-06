class Chaton{
    constructor(race, nom){
        this.race=race;
        this.nom=nom;
    }
    miauler(){
        setTimeout(() => {
            console.log("miawou");
            this.miauler();
        }, 2000);
    }
}

export { Chaton }