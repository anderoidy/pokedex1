import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeReaderComponent } from './poke-reader/poke-reader.component';

@NgModule({
  declarations: [
    PokeReaderComponent
  ],

  exports: [
    PokeReaderComponent
  ],

  imports: [
    CommonModule
  ]
})
export class SharedModule { }
