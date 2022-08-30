import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Annonce{
  id: number | undefined;
  anne_expiration: string;
  contenu: string;
  date_heure_fin: Date;
  date_heure_debut: Date;
  date_heure_creation: Date;
  mois_expiration: number;
  montant_regle_en_euros: number;
  numero_carte: string;
  client_id: string;
  cryptogramme: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }
  getAllAnnoncesByClient(): Observable<Annonce[]>{
    return this.http.get<Annonce[]>('https://localhost:8080/api/client/annonces');
  }
}
