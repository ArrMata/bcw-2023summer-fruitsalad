import { AppState } from "../AppState.js"

class GamesService {
    setRandomFruit() {
        let randomIndex = Math.floor(Math.random() * AppState.fruits.length)
        AppState.activeFruit = AppState.fruits[randomIndex]
    }

    increasePlayerScore() {
        AppState.activePlayer.score++
        AppState.emit('activePlayer')
        AppState.emit('players')
    }

    clearActiveFruit() {
        AppState.activeFruit = null
    }
}

export const gamesService = new GamesService()