export class Joke {

    public setup: String
    public punchline: String
    public hidden: Boolean;

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hidden = true;
    }

    toggle() {
        this.hidden = !this.hidden;
    }

}
