import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"

class PlayerService {
    createPlayer(playerData) {
        AppState.players = [...AppState.players, new Player(playerData)]
    }

    setActivePlayer(playerId) {
        AppState.activePlayer = AppState.players.find(player => player.id == playerId)
    }

    clearPlayer() {
        console.log('clear')
        AppState.activePlayer = null
    }
}

export const playerService = new PlayerService()