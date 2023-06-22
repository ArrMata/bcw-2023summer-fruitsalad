import { AboutController } from "./controllers/AboutController.js";
import { GamesController } from "./controllers/GamesContoller.js";
import { HomeController } from "./controllers/HomeController.js";
import { PlayersController } from "./controllers/PlayersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { PlayerView } from "./views/PlayerView.js";


export const router = [
  {
    path: '',
    controller: [PlayersController, GamesController],
    view: PlayerView
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]