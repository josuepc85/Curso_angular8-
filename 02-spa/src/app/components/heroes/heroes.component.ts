import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor( private _heroesService:HeroesService) {
      console.log('Constructor');
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log( this.heroes );
  }
  verHeroe( idx:number ){
    this.router.navigate(['/heroe',idx] );
  }

}
