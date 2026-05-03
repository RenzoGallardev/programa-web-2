const teamService = {};

let teams = [];
let counterID = 0;

teamsService.getTeams = () => {
    return teams;
}

teamService.getTeam = (id) => {
    for (let team of teams) {
        if (team.id == id) return team
    }
    return null;
}

teamsService.insertTeam = (name, country, league) => {
    const newTeam = {
        id: counterID,
        name: name,
        country: country,
        league: league
    }
    counterID++;
    teams.push();
}