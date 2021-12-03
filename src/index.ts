// import * as PIXI from 'pixi.js';

import { Application, Ticker } from 'pixi.js';

// eslint-disable-next-line import/extensions,import/no-unresolved
import { Game } from './ts/Game';

window.onload = () => {
  const app = new Application({
    width: 1400,
    height: 1050,
    backgroundColor: 0xa81315,
   
    sharedTicker: true,
    sharedLoader: true,
 
  });

  document.body.appendChild(app.view);

  const game = new Game(app);
  const ticker = Ticker.shared;
  ticker.add(game.update.bind(game));
};
