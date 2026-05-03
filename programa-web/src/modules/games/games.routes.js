import { Router } from 'express';
import { getGames, getSingleGame, createNewGame, updateExistingGame, removeGame } from './games.controller.js';

const gamesRouter = Router();

gamesRouter.get('/', getGames);
gamesRouter.get('/:id', getSingleGame);

gamesRouter.post('/', createNewGame);

gamesRouter.put('/:id', updateExistingGame);

gamesRouter.delete('/:id', removeGame);

export default gamesRouter;