import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

private url:string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  constructor( private http: HttpClient ) {
   }
//pedaço dificil de entender!!!
//metodo pra puxar os pokemons via http, ele vai ser importado la pro modulo de list.ts
   get apiListAllPokemons():Observable<any> {
      return this.http.get<any>(this.url).pipe(
        tap( res => res ),
        tap( res => {
          res.results.map( (resPokemons: any) => {

            this.apiGetPokemons(resPokemons.url).subscribe(
              res => resPokemons.status = res
            )

          })
        })
      )
   }
   public apiGetPokemons( url: string ):Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
