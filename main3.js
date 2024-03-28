class produit {
    constructor(références, quantite , prix){
        this.références = références
        this.quantite = quantite
        this.prix = prix
    }
    get_références(){
        return this.références
    }
    set_références(valeur){
        this.références = valeur
    }
    get_quantite(){
        return this.quantite
    }
    set_quantite(valeur){
        this.quantite = valeur
    }
    get_prix(){
        return this.prix
    }
    set_prix(valeur){
        this.prix = valeur
    }
    afficher(){
        console.log("la référence de produit  "+ this.get_références()  + " de quantite " + this.get_quantite() + " de prix : " + this.get_prix())
    }
}

class médicaments extends produit {
    constructor(références , quantite , prix , nom , molécule){
        super(références , quantite , prix)
        this.nom = nom 
        this.molécule = molécule
    }
    get_nom(){
        return this.nom
    }
    set_nom(valeur){
        this.nom = valeur
    }
    get_molécule(){
        return this.molécule
    }
    set_molécule(valeur){
        this.molécule = valeur
    }
    afficher(){
        console.log("la référence de produit  "+ this.get_références()  + " de quantite " + this.get_quantite() + " de prix : " + this.get_prix() + "de nom : " + this.get_nom() + " et de molécule : "+this.get_molécule())
    }
    
}

class Parapharm extends produit {
    constructor(références , quantite , prix , type){
        super(références , quantite , prix)
        this.type = type
    }
    get_type(){
        return this.type
    }
    set_type(valeur){
        this.type = valeur
    }
    afficher(){
        console.log("la référence de produit  "+ this.get_références()  + " de quantite " + this.get_quantite() + " de prix : " + this.get_prix() + "de type : " + this.get_type())
    }
}