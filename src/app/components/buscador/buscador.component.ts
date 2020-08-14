import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroes } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes: Heroes[] = [];
  termino: string;

  constructor( private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService, private _router: Router) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log( this.heroes );
    });

  }

  verHeroe(idx: number){
    this._router.navigate(['/heroe', this.heroes[idx].idx]);
  }

}
