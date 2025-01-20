const players = {};

function setPlayerCount(count) {
    for (let i = 1; i <= count; i++) {
        const playerKey = `player_${i}`;

        players[playerKey] = {
            player_index: i - 1,
            name: null,
            score_per_round: [],
            get total_score() {
                return this.score_per_round.reduce((total, score) => total + score, 0)
            },
            isEliminated: false,
            eliminatedRound: null
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
