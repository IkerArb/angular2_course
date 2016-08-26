import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from "./common/header.component";

import { FooterComponent } from "./common/footer.component";

import { Pokemon } from "./common/catalog/models/pokemon.models.ts";

@Component({
    selector: 'my-awesome-tag',
    template: `
    <app-header></app-header>
    <h1>Hello!</h1>
    <div *ngFor="let p of pokemon">{{p.name}}</div>
    <app-footer></app-footer>`,
    directives : [HeaderComponent,FooterComponent]
})
export class AppComponent implements OnInit {
  pokemon: Pokemon[] = [];
  ngOnInit(){
    this.pokemon = this.getPokemonData();
  }
  getPokemonData(){
    return [{
      name: "Pikachu"
    }];
  }
}
