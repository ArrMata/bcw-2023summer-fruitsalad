import { AppState } from "../AppState.js";
import { gamesService } from "../services/GamesService.js";
import { playerService } from "../services/PlayerService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { saveState } from "../utils/Store.js";
import { setText } from "../utils/Writer.js";

const _drawActiveFruit = () => {
    if (AppState.activeFruit)
        setText('active-fruit', AppState.activeFruit)
    else
        setText('active-fruit', 'start a new game')
}

const _savePlayers = () => {
    console.log(AppState.players)
    saveState('players', AppState.players)
}

export class GamesController {
    constructor() {
        console.log('games controller loaded');
        AppState.on('activeFruit', _drawActiveFruit)
    }

    setRandomFruit() {
        gamesService.setRandomFruit()
    }

    startGame() {
        this.setRandomFruit()
        setTimeout(this.endGame, 3000)
    }

    endGame() {
        Pop.error('Game has ended!')
        playerService.clearPlayer()
        gamesService.clearActiveFruit()
        _savePlayers()
    }

    checkPlayerGuess(event) {
        event.preventDefault()
        let form = event.target
        let guessedFruit = getFormData(form).guess
        if (guessedFruit == AppState.activeFruit) {
            gamesService.increasePlayerScore()
            gamesService.setRandomFruit()
            form.reset()
            document.getElementById('fruit-input').focus()
        }
    }
}