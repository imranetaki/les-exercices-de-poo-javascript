
class Etudiant {
    constructor(cne,nom,prenom,niveau){
        this.cne = cne
        this.nom = nom
        this.prenom = prenom
        this.niveau = niveau
    }
    get_CNE(){
        return this.cne
    }
    set_cne(valeur){
        this.cne = valeur
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
    get_niveau(){
        return this.niveau
    }
    set_niveau(valeur){
        this.niveau = valeur
    }
    Afficher(){
        console.log("l'étudiant " + this.get_nom() + " " + this.get_prenom()+ " " + "de cne " + this.get_CNE()+ " " + "est de niveau " + this.get_niveau() )
    }
    Equal(Etudiant1){
        if ((Etudiant1.nom == this.nom) && (Etudiant1.prenom == this.prenom) && (Etudiant1.cne == this.cne) && (Etudiant1.niveau == this.niveau ))
            return true
        else 
            return false
    }
}

let Etudiant2 = new Etudiant(1,"imrane","taki", "1er annee")
let Etudiant3 = new Etudiant(2,"yahay","zayza", "1er annee")

Etudiant2.Afficher()
console.log(Etudiant2.Equal(Etudiant3))