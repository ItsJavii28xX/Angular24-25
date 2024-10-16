import { Component } from '@angular/core';
import { Joke } from '../joke';
import { CommonModule } from '@angular/common';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { JokeFormComponent } from '../joke-form/joke-form.component';
import { JokeService } from '../joke-service';


@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [CommonModule, JokeItemComponent, JokeFormComponent],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {

  service = new JokeService()

  array: Array<Joke>

  constructor() {
    
    this.array=this.service.readJokes()
    
  }

  addNewJoke(joke: Joke) {
    this.service.createJoke(joke)
    this.array = this.service.readJokes()
  }

  deleteJoke(index: number) {
    this.service.deleteJoke(index)
    this.array = this.service.readJokes()
  }
  
}
