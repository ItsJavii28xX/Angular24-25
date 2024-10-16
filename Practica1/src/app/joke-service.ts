import { Joke } from "./joke";

export class JokeService {

    private arrayJokes: Array<Joke>

    constructor() {
        this.arrayJokes = [new Joke("Broma1", "Respuesta1"), new Joke("Broma2", "Respuesta2")]
    }

    readJokes() {
        return [...this.arrayJokes]
    }

    createJoke(joke: Joke) {
        this.arrayJokes.push(joke)
    }

    deleteJoke(index: number) {
        this.arrayJokes.splice(index, 1)
        
    }

}