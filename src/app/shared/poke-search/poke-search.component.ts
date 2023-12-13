import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {
//instanciando o emmitSearch para poder receber o que ta vindo la do html
@Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  //funcao que emmit o valor vindo lá do input do html atraves do emmiSearch
  public search(value: string) {
    //console.log(value)
    this.emmitSearch.emit(value)
  }

}
