import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {


  public getAllPokemons: any
  //reparei que no meu nao tinha nem o contrutor nem ongOnInit
  //quero que vc chame a PokeApiService no parametro do construtor
  constructor( private pokeApiService: PokeApiService) {
  }
  //agente precisa chamar a funcao que foi instanciada no construtor, aqui no ngOnInit
  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res=> {
        this.getAllPokemons = res.results
       // console.log(this.getAllPokemons)
      }
    );
  }
//como agente ta usando o get nao precisamos chamar nada por paramentro na funcao apiListAllPokemons
}
