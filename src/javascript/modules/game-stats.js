const players = {
    // player_1: { name: 'Nick', score: 0 },
    // player_2: { name: 'Rafa', score: 0 },
    // player_3: { name: 'Ana Carla', score: 0 },
    // player_4: { name: 'Isabella', score: 0 },
    // player_5: { name: 'Cara', score: 0 },
    // player_6: { name: 'Test', score: 0 }

};

function setPlayerScore(scoreInput, currentPlayer) {
    scoreInput = Number(scoreInput)

    players[currentPlayer].score = scoreInput;
}

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

export { setPlayerCount, resetPlayerCount, setPlayerScore, players }
