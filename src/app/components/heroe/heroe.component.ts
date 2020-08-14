import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  constructor(private activatedRpute: ActivatedRoute, heroesService: HeroesService) { 
    this.activatedRpute.params.subscribe( params =>{
      this.heroe = heroesService.getHeroe(params['id']);
      console.log( this.heroe );
    }

    );
  }

  ngOnInit(): void {
  }

}
