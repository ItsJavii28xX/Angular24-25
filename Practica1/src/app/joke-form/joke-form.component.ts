import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-form',
  standalone: true,
  imports: [],
  templateUrl: './joke-form.component.html',
  styleUrl: './joke-form.component.css'
})

export class JokeFormComponent {

  @Output() bromaCreada = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.bromaCreada.emit(new Joke(setup, punchline));
  }

}
