import { threadId } from "worker_threads";

export abstract class Vehicule {
    public marque: string;   
    public modele: string;  
    public immatriculation: string;
    public couleur: string;
    public kilometrage: number;   
    public prix: number;   
    public annee: number;   

     
    constructor(marque: string, modele: string, immatriculation: string, couleur: string, kilometrage: number, prix: number, annee: number) {
        this.marque = marque;
        this.modele = modele;
        this.immatriculation = immatriculation;
        this.couleur = couleur;
        this.kilometrage = kilometrage;
        this.prix = prix;
        this.annee = annee;
        
    }
}