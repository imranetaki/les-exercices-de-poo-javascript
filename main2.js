class Proprietaire {
    constructor(nom, prenom , age , cin){
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.cin = cin
    }
    get_nom(){
        return this.nom
    }
    set_nom(valeur){
        this.nom = valeur
    }
    get_prenom(){
        return this.prenom
    }
    set_prenom(valeur){
        this.prenom = valeur
    }
    get_age(){
        return this.age
    }
    set_age(valeur){
        this.age = valeur
    }
    get_cin(){
        return this.cin
    }
    set_cin(valeur){
        this.cin = valeur
    }
    afficher(){
        console.log("le propriétaire "+ this.get_nom() + " " + this.get_prenom() + " d'age " + this.get_age() + " et de cin : " + this.get_cin())
    }
    equal(p){
        if((p.nom == this.nom) && (p.prenom == this.prenom) && (p.cin == this.cin) && (p.age == this.age ))
            return true
        else
            return false

    }
        
}

let prop1 = new Proprietaire("imrane","taki",19,74893)
let prop2 = new Proprietaire("yahya","zayzi",18,748893)

prop1.afficher()
console.log(prop1.equal(prop2))

class maison {
    constructor(adresse ,nbchambres,nbetages){
        this.adresse = adresse
        this.nbchambres = nbchambres
        this.nbetages = nbetages
    }
    get_adresse(){
        return this.adresse
    }
    set_adresse(valeur){
        this.adresse = valeur
    }
    get_nbchambres(){
        return this.nbchambres
    }
    set_nbchambres(valeur){
        this.nbchambres = valeur
    }
    get_nbetages(){
        return this.nbetages
    }
    set_nbetages(valeur){
        this.nbetages = valeur
    }
    afficher(){
        console.log("le propriétaire de la maison a un nombre de chambre  "+ this.get_nbchambres()  + " et un nombre d'étages " + this.get_nbetages() + " dans l'adresse : " + this.get_adresse())
    }
}  

let m1 = new maison("marrakech daoudiate" , 5 , 2)
let m2 = new maison("marrakech sidi youssef" , 8 , 3)

m1.afficher()
