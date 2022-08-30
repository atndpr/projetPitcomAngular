import { Injectable } from '@angular/core';

interface Admin{
  nom: string,
  prenom: string,
  email: string,
  motDePassse: string
}

interface Client{
  nom: string,
  prenom: string,
  email: string,
  motDePassse: string,
  numeroDeTelephone: string
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
}
