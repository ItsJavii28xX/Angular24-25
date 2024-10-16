import { Component } from '@angular/core';
import { Joke } from '../joke';
import { CommonModule } from '@angular/common';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { JokeFormComponent } from '../joke-form/joke-form.component';


@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [CommonModule, JokeItemComponent, JokeFormComponent],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {

  array: Array<Joke>

  constructor() {
    
    this.array = [new Joke("Broma1", "Respuesta1"), new Joke("Broma2", "Respuesta2")]
    
  }

  addJoke(joke: Joke) {
    this.array.push(joke);
  }
  
}
