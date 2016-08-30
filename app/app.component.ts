import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./common/header.component";
import { FooterComponent } from "./common/footer.component";
import { Pokemon } from "./catalog/models/pokemon.model.ts";
import {CatalogService} from "./catalog/services/catalog.service";

@Component({
    selector: 'my-awesome-tag',
    template: `
    <app-header></app-header>
    <h1>Hello!</h1>
    <input type="text" (keyup)="onChange" name ="searchKeyword">
    <div *ngFor="let p of pokemon">
      {{p.name}}
      <img src="{{p.imageURL}}" alt="{{p.name}}">
    </div>
    <app-footer></app-footer>`,
    directives : [HeaderComponent,FooterComponent],
    providers : [CatalogService]
})
export class AppComponent implements OnInit {
  pokemon: Pokemon[] = [];

  constructor (private _catalogService: CatalogService){

  }

  keyup(event:Event){
    console.log(event);
  }

  ngOnInit(){
    // this._catalogService.getPokemonData().subscribe(
    //   (data)=>{
    //     this.pokemon = data["results"];
    //   },
    //   (err)=>{
    //     console.warn(err);
    //   },
    //   ()=>{
    //     console.log("Finished!");
    //   }
    // );
    this._catalogService.getPokemonDataUsingPromise().then((data)=>{
      this.pokemon = data["results"];
    },(err)=>{
      console.error(err);
    });
  }
}
