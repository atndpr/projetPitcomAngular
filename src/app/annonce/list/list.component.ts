import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Annonce, AnnonceService} from "../annonce.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  annonces!: Annonce [];

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.annonceService.getAllAnnoncesByClient().subscribe(annonces => this.annonces = annonces)
  }

}
