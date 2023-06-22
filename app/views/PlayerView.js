export const PlayerView = `
<div class="container-fluid">
    <div class='row'>
        <div class='col-6'>
            <h2>Active player: <span id='active-player'>no player</id></h2>
            <h2>Active Fruit: <span id='active-fruit'>no fruit</id></h2>
        </div>
        <div class='col-6'>
            <ul class='fs-2' id='player-list'>
            </ul>
            <form onsubmit="app.PlayersController.createPlayer(event)">
                <div class="mb-3">
                    <label for="playerName" class="form-label">Name</label>
                    <input type="text" name="name" id="playerName" class="form-control" placeholder="Enter your name!"
                    aria-describedby="helpId">
                    <button type="submit" class="btn btn-primary mt-2">New Player</button>
                </div>
            </form>
        </div>
    </div>
</div>
`