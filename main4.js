class Batiment {
    constructor(adresse , prix , superficie){
        this.adresse = adresse
        this.prix = prix
        this.superficie = superficie
    }
    get_adresse(){
        return this.adresse
    }
    set_adresse(valeur){
        this.adresse = valeur
    }
    get_prix(){
        return this.prix
    }
    set_prix(valeur){
        this.prix = valeur
    }
    get_superficie(){
        return this.superficie
    }
    set_superficie(valeur){
        this.superficie = valeur
    }
    afficher(){
        console.log("le batiment d'adresse : "+ this.get_adresse() + "de prix : "+ this.get_prix() + " de superficie : "+ this.get_superficie() )
    }
}

class Maison extends Batiment{
    constructor(adresse,prix,superficie,nbetages){
        super(adresse,prix,superficie)
        this.nbetages = nbetages
    }
    get_nbetages(){
        return this.nbetages
    }
    set_nbetages(valeur){
        this.nbetages = valeur
    }
    afficher(){
        console.log("le batiment d'adresse : "+ this.get_adresse() + "de prix : "+ this.get_prix() + " de superficie : "+ this.get_superficie() + "de nombre d'etages : " + this.get_nbetages() )
    }
}

class appartement extends Batiment{
    constructor(adresse,prix,superficie,nbChambre,numeroretage){
        super(adresse,prix,superficie)
        this.nbChambre = nbChambre
        this.numeroretage = numeroretage
    }
    get_numeroretage(){
        return this.numeroretage
    }
    set_numeroretage(valeur){
        this.numeroretage = valeur
    }
    get_nbChambre(){
        return this.nbChambre
    }
    set_nbChambre(valeur){
        this.nbChambre = valeur
    }
    afficher(){
        console.log("le batiment d'adresse : "+ this.get_adresse() + "de prix : "+ this.get_prix() + " de superficie : "+ this.get_superficie() + "de nombre de chambre : " + this.get_nbChambre() + " de numero d'étages : " + this.get_numeroretage() )
    }
}