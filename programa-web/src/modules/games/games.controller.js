import * as gamesService from './games.service.js';

export const getGames = (req, res) => {
    const games = gamesService.getAllGames();
    res.status(200).json({ data: games });
};

export const getSingleGame = (req, res) => {
    const { id } = req.params;
    const game = gamesService.getGameById(id);
    
    if (!game) {
        return res.status(404).json({ message: "Juego no encontrado" });
    }
    res.status(200).json({ data: game });
};

export const createNewGame = (req, res) => {
    const { nombre, min_jugadores, max_jugadores, duracion, fecha_adquisicion, estado } = req.body;

    if (!nombre || !min_jugadores || !max_jugadores || !duracion || !fecha_adquisicion || !estado) {
        return res.status(400).json({ message: "Faltan datos obligatorios para registrar el juego" });
    }

    const newGame = gamesService.createGame(req.body);
    res.status(201).json({ message: "Juego registrado con éxito", data: newGame });
};

export const updateExistingGame = (req, res) => {
    const { id } = req.params;
    const updatedGame = gamesService.updateGame(id, req.body);

    if (!updatedGame) {
        return res.status(404).json({ message: "Juego no encontrado para actualizar" });
    }
    res.status(200).json({ message: "Juego actualizado", data: updatedGame });
};

export const removeGame = (req, res) => {
    const { id } = req.params;
    const success = gamesService.deleteGame(id);

    if (!success) {
        return res.status(404).json({ message: "Juego no encontrado para eliminar" });
    }
    res.status(200).json({ message: "Juego eliminado exitosamente" });
};