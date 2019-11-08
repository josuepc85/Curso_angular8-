import { Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrar =  true;

  frase: any = {
    mensaje: 'Un gran poder lleva responsabilidad',
    autor: 'Ben Parker'
  };

  personajes: string[] = ['spiderman', 'Venom', 'Dr. Octopus'];

}
