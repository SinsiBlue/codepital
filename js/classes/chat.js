class Chat{
    constructor(race, nom){
        this.race=race;
        this.nom=nom;
    }
    miauler(){
        console.log("miawou");
        setTimeout(() => {
            this.miauler();
        }, 2000);
    }
}

export { Chat }