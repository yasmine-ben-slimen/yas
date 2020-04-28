import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchAnnoncesComponent implements OnInit {

  prix: number;
  ecole: string;
  type: string;
  distance: string;
  nb_places: number;

  annonces: Annonce[];

  constructor(private dataService: AnnonceService) { }

  ngOnInit() {
    this.ecole = "";
    this.prix=0;
    this.nb_places=0;
    this.type="";
    this.distance="";
  }

  private searchAnnonces() {
    this.dataService.getAnnonce(this.ecole ,this.prix,this.nb_places,this.distance,this.type)
      .subscribe(annonces => this.annonces = annonces);
  }

  onSubmit() {
    this.searchAnnonces();
  }
}
