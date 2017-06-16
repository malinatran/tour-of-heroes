import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <h2>My Heroes</h2>
  <ul class='heroes'>
    <li *ngFor='let hero of heroes' (click)='onSelect(hero)' [class.selected]='hero === selectedHero'>
      <p>{{hero.name}}</p>
      <p>{{hero.id}}</p>
    </li>
  </ul>
  <div *ngIf='selectedHero'>
    <h2>
      {{selectedHero.name}} details!
    </h2>
    <div><label>id:</label>{{selectedHero.id}}</div>
    <div>
    <label>name:</label>
    <input [(ngModel)]='selectedHero.name'>
    </div>
  </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
  ` ]
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero; 
  heroes = [
    { id: 2, name: 'wtf' },
    { id: 3, name: 'wtf' },
    { id: 4, name: 'wtf' },
    { id: 5, name: 'wtf' },
    { id: 6, name: 'wtf' },
  ];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
