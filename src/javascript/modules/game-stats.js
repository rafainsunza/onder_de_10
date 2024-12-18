const players = {
    player_1: {
        name: 'Nick',
        score_per_round: [],
        halved: false,
        get total_score() {
            return this.score_per_round.reduce((total, score) => total + score, 0)
        }
    },
    player_2: {
        name: 'Rafa',
        score_per_round: [],
        halved: false,
        get total_score() {
            return this.score_per_round.reduce((total, score) => total + score, 0)
        }
    },
    player_3: {
        name: 'Ana',
        score_per_round: [],
        halved: false,
        get total_score() {
            return this.score_per_round.reduce((total, score) => total + score, 0)
        }
    },
};

function createObservable(obj) {
    return new Proxy(obj, {
        set(target, property, value) {
            target[property] = value;

            if (property === 'total_score') {
                const event = new CustomEvent('score-changed', {
                    detail: {
                        name: target.name,
                        total_score: value
                    }
                });

                document.dispatchEvent(event)
            }
            return true;
        },
        get(target, property) {
            const value = target[property];
            // Wrap nested objects in their own Proxy
            if (value && typeof value === 'object' && !value.__isProxy) {
                target[property] = createObservable(value);
                target[property].__isProxy = true; // Avoid re-wrapping
            }
            return target[property];
        }
    });
}

const observablePlayers = createObservable(players)

function setPlayerCount(count) {
    for (let i = 1; i <= count; i++) {
        const playerKey = `player_${i}`;

        observablePlayers[playerKey] = {
            name: null,
            score_per_round: [],
            halved: false,
            get total_score() {
                return this.score_per_round.reduce((total, score) => total + score, 0)
            }
        };
    }
}

function resetPlayerCount() {
    for (let key in observablePlayers) {
        if (observablePlayers.hasOwnProperty(key)) {
            delete observablePlayers[key];
        }
    }
}

export { setPlayerCount, resetPlayerCount, players, observablePlayers }
