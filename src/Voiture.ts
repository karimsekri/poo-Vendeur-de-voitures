import { Vehicule } from "./Vehicule";

export class Voiture extends Vehicule {

    constructor( marque: string, modele: string, immatriculation: string, couleur: string, kilometrage: number, prix: number, annee: number) {
        super(marque, modele, immatriculation, couleur, kilometrage, prix, annee);
    }
   
}