const players = {};

function setPlayerCount(count) {
    for (let i = 1; i <= count; i++) {
        const playerKey = `player_${i}`;

        players[playerKey] = {
            name: null,
            score: 0
        };
    }
}

function resetPlayerCount() {
    for (let key in players) {
        if (players.hasOwnProperty(key)) {
            delete players[key];
        }
    }
}

export { setPlayerCount, resetPlayerCount, players }
