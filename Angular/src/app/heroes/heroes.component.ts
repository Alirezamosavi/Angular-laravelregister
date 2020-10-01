import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  form: FormGroup;
  constructor(private heroService: HeroService,
    private formBuilder: FormBuilder   // for FormBuilder we make a constructor
    ){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name:'', 
   });
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(): void {
    let title = this.form.value.name.trim();
    if (!title) { return; }
    this.heroService.addHero({ title } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
