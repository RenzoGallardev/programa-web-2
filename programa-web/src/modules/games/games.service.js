let games = [];
let currentId = 1;

export const getAllGames = () => {
    return games;
};

export const getGameById = (id) => {
    return games.find(game => game.id === parseInt(id));
};

export const createGame = (data) => {
    const newGame = {
        id: currentId++, 
        nombre: data.nombre,
        min_jugadores: data.min_jugadores,
        max_jugadores: data.max_jugadores,
        duracion: data.duracion,
        fecha_adquisicion: data.fecha_adquisicion,
        estado: data.estado
    };
    games.push(newGame);
    return newGame;
};

export const updateGame = (id, data) => {
    const index = games.findIndex(game => game.id === parseInt(id));
    if (index === -1) return null; 

    games[index] = { ...games[index], ...data, id: parseInt(id) };
    return games[index];
};

export const deleteGame = (id) => {
    const index = games.findIndex(game => game.id === parseInt(id));
    if (index === -1) return false;

    games.splice(index, 1); 
    return true;
};