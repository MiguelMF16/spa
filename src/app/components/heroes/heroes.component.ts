import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import {Heroes} from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  constructor(private _heroesService: HeroesService, private _router: Router) {


   }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx: number){
    this._router.navigate(['/heroe', this.heroes[idx].idx]);
  }

}
