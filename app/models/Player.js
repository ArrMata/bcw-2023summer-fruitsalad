import { generateId } from "../utils/GenerateId.js";

export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = data.score ? data.score : 0
    }

    get ListTemplate() {
        return `<li onclick='app.PlayersController.setActivePlayer("${this.id}")'>${this.name} Score - ${this.score}</li>`
    }

    get ActivePlayerTemplate() {
        return `
        <h2>${this.name} - ${this.score}</h2>
        <form onsubmit="app.GamesController.checkPlayerGuess(event)" >
            <input id="fruit-input" type="text" name='guess'/>
        </form>
        <button onclick='app.GamesController.startGame()'>Start</button>
    `
    }

}