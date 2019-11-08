import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  frase:any = {
    mensaje:'Un gran poder lleva responsabilidad',
    autor:'Ben Parker'
  };
}
