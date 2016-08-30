import {Injectable} from '@angular/core';
import { Pokemon } from "../models/pokemon.model.ts";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CatalogService{
  serviceURL : string = "/data/get-250-pokemon.json";
  baseURLForImages: string = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

  constructor(private _http:Http){

  }

  getPokemonData(): Observable<Pokemon[]>{
    return this._http.get(this.serviceURL).map(
      (response: Response)=>{
        return response.json();
      }
    );
  }

  getPokemonDataUsingPromise(): Promise<Pokemon[]>{
    return this._http.get(this.serviceURL).map(
      (response: Response)=>{
        let data = response.json();
        data["results"].forEach((pokemon: Pokemon,i:number)=>{
          let imageName = this.addLeadingZeros((i+1).toString(),3)+'.png';
          pokemon.imageURL = this.baseURLForImages+imageName;
          console.log(imageName);
        });
        return data;
      }
    ).toPromise();
  }

  addLeadingZeros(str: string, max: number) :string{
    str = str.toString();
    return str.length < max ? this.addLeadingZeros("0"+str,max):str;
  }
}
