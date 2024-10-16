import { Component } from '@angular/core';
import { Joke } from '../joke';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {

  array: Array<Joke>

  constructor() {
    
    this.array = [new Joke("Broma1", "Respuesta1"), new Joke("Broma2", "Respuesta2")]
    
  }
}
