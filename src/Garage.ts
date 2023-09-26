import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { Vehicule } from "./Vehicule";
import { Voiture } from "./Voiture"

export class Garage {
  
    private _nomGarage: string
    public vehicules: Vehicule[]
   

    constructor(nomGarage: string, vehicules: Vehicule[]){ 
        this._nomGarage = nomGarage;
        this.vehicules = vehicules;
        
    }

    getLeVehiculeLaMoinsChere(): Voiture {
        let vehiculeMoinsChere = this.vehicules[0];
        this.vehicules.forEach(maVoiture => {
            if (maVoiture.prix < vehiculeMoinsChere.prix) {
                vehiculeMoinsChere = maVoiture                
            }
        });
        return vehiculeMoinsChere; 
    }

    getVoituresCouleur(maCouleur: string) : Vehicule[] {
        let vehiculesDeCouleur: Vehicule[] = [];
        this.vehicules.forEach(monVehicule => {
            if (monVehicule.couleur == maCouleur) {
                vehiculesDeCouleur.push(monVehicule);
            }
        });
        return vehiculesDeCouleur
    }

    getListVehiculeEnFonctionDuType(type: string) : Vehicule[] {
        let voitures: Voiture[] = [];
        let motos: Moto[] = [];
        let camions: Camion[] = [];

        if (type == "Voiture") {
            this.vehicules.forEach(maVoiture => {
                if (maVoiture instanceof Voiture) {
                    voitures.push(maVoiture);
                }
            });
            return voitures 
        }
        else if (type === "Moto") {
            this.vehicules.forEach(maMoto => {
                if (maMoto instanceof Moto) {
                    motos.push(maMoto);
                }
            });
            return motos
        }
        else if (type === "Camion") {
            this.vehicules.forEach(monCamion => {
                if (monCamion instanceof Camion) {
                    camions.push(monCamion);
                }
            });
            return camions
        }
        else{
            return []
        }
        
    }
}