import { Camion } from "./Camion";
import { Garage } from "./Garage";
import { Moto } from "./Moto";
import { Vehicule } from "./Vehicule";
import { Voiture } from "./Voiture";
import { Objet } from "../Interfaces/Objet";

const monGarage = new Garage("Mon Garage", [
  new Voiture("Peugeot", "307", "AB-1234", "rouge", 10000, 12000, 2000),
  new Voiture("Citroen", "C4", "ZZ-1234", "bleu", 250000, 2000, 2005),
  new Voiture("Toyota", "yaris", "12-GD-123", "vert", 65000, 5500, 2010),
  new Voiture("Mercedes", "benz", "658-AB-38", "jaune", 180000, 15000, 2020),
  new Voiture("Renault", "clio", "AB-1234", "bleu", 130000, 10000, 2015),

  new Moto("Yamaha", "ybr", "AB-1234", "bleu", 130000, 10000, 2015),
  new Moto("Honda", "cbr", "AB-1234", "bleu", 130000, 10000, 2015),

  new Camion("Renault", "Trafic", "AB-1234", "bleu", 130000, 10000, 2015),
  new Camion("Renault", "Master", "AB-1234", "bleu", 130000, 10000, 2015),
])



// utiliser la varible static pour compter le nombre de vehicule cree
console.log(Vehicule.NBRE_VEHICULE_CREE)
console.log(monGarage);

// 4 - Créez une méthode qui permet de renvoyer la voiture la moins chère du garage parmi toutes les voitures du garage.
console.log("Voiture la moins chère : " +  monGarage.getLeVehiculeLaMoinsChere().modele);

// 5 - Créez une méthode qui permet de récupérer toutes les voitures d'une certaine couleur
const voituresDeCouleur = monGarage.getVoituresCouleur("bleu");
console.log(voituresDeCouleur);


//11 - Créez une méthode pour récupérer une sous liste de véhicules en fonction du type de véhicule (voiture, camion  ou moto)
const listDesVoitures = monGarage.getListVehiculeEnFonctionDuType("Voiture");
console.log(listDesVoitures);

const listDesMotos = monGarage.getListVehiculeEnFonctionDuType("Moto");
console.log(listDesMotos);

const listDesCamions = monGarage.getListVehiculeEnFonctionDuType("Camion");
console.log(listDesCamions);

//Ajouter une fonctionnalité pour calculer la valeur totale de tous 
//les véhicules actuellement dans le garage, en additionnant les prix de chaque véhicule
const prixTotalVehicules = monGarage.getVehiculePrixTotal();
console.log(prixTotalVehicules);

// let objet1 : Objet = {
//   nom: "objet1",
//   prix: 100,
//   poids: 50,
//   utiliser(){
//     console.log("Objet utilisé");
//   }
// }
// objet1.utiliser();
