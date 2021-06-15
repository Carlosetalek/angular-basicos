import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
   
  heroes: string[] = ['Cell','Picoro','Thrunks','Vegeta','goku',];
 
  heroeBorrado: string = '';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || ''; 
  }


}
