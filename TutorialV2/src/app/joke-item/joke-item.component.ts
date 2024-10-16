import { Component, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-item',
  standalone: true,
  imports: [],
  templateUrl: './joke-item.component.html',
  styleUrl: './joke-item.component.css'
})
export class JokeItemComponent {

  @Input('joke') joke!: Joke; //Ver el archivo tsconfig.json para ver la regla que permite no inicializar las variables

}
