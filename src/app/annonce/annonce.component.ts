import { Component, OnInit } from '@angular/core';
import {Annonce} from "./annonce";

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonces: Annonce[]|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
