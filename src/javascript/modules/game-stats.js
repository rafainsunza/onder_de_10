const players = {
    player_1: {
        player_index: 0,
        name: 'Nick',
        score_per_round: [],
        get total_score() {
            return this.score_per_round.reduce((total, score) => total + score, 0)
        },
        isEliminated: false,
        eliminatedRound: null
    },
    player_2: {
        player_index: 1,
        name: 'Rafa',
        score_per_round: [],
        get total_score() {
            return this.score_per_round.reduce((total, score) => total + score, 0)
        },
        isEliminated: false,
        eliminatedRound: null
    },
    // player_3: {
    //     player_index: 2,
    //     name: 'Ana',
    //     score_per_round: [],
    //     get total_score() {
    //         return this.score_per_round.reduce((total, score) => total + score, 0)
    //     },
    //     isEliminated: false,
    //     eliminatedRound: null
    // },
    // player_4: {
    //     player_index: 3,
    //     name: 'Isabella',
    //     score_per_round: [],
    //     get total_score() {
    //         return this.score_per_round.reduce((total, score) => total + score, 0)
    //     },
    //     isEliminated: false,
    //     eliminatedRound: null
    // },
    // player_5: {
    //     player_index: 4,
    //     name: 'Cara',
    //     score_per_round: [],
    //     get total_score() {
    //         return this.score_per_round.reduce((total, score) => total + score, 0)
    //     },
    //     isEliminated: false,
    //     eliminatedRound: null
    // },
    // player_6: {
    //     player_index: 5,
    //     name: 'Robi',
    //     score_per_round: [],
    //     get total_score() {
    //         return this.score_per_round.reduce((total, score) => total + score, 0)
    //     },
    //     isEliminated: false,
    //     eliminatedRound: null
    // },
};

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
