import { AppState } from "../AppState.js"
import { playerService } from "../services/PlayerService.js"
import { getFormData } from "../utils/FormHandler.js"
import { saveState } from "../utils/Store.js"
import { setHTML, setText } from "../utils/Writer.js"

function _drawPlayers() {
    let template = ''
    AppState.players.sort((playerA, playerB) => playerB.score - playerA.score)
    AppState.players.forEach(player => template += player.ListTemplate)
    setHTML('player-list', template)
}

const _drawActivePlayer = () => {
    if (AppState.activePlayer) {
        const activePlayerTemplate = AppState.activePlayer.ActivePlayerTemplate
        setHTML('active-player', activePlayerTemplate)
    }
    else {
        setText('active-player', 'Choose a new player!')
    }
}

const _savePlayers = () => {
    saveState('players', AppState.players)
}

export class PlayersController {
    constructor() {
        console.log('player controller loaded')

        AppState.on('players', _drawPlayers)
        AppState.on('activePlayer', _drawActivePlayer)
        _drawPlayers()
    }

    createPlayer(event) {
        event.preventDefault()
        let form = event.target
        const playerData = getFormData(form)
        playerService.createPlayer(playerData)
        _drawPlayers()
        form.reset()
        _savePlayers()
    }

    setActivePlayer(playerId) {
        playerService.setActivePlayer(playerId)
        _drawActivePlayer()
    }
}