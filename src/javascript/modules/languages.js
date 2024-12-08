const languages = {
    dutch: {
        name: "Nederlands",
        flag: 'https://flagcdn.com/h40/nl.png',
        title: 'SCOREBORD',
        player_count: 'SELECTEER HET AANTAL SPELERS:',
        name_input: 'Voer de naam in van:',
        placeholder: 'Speler',
        score_input: 'Voer score in voor:',
        score_submit: 'voeg toe'
    },
    german: {
        name: "Deutsch",
        flag: 'https://flagcdn.com/h40/de.png',
        title: 'ANZEIGETAFEL',
        player_count: 'WÄHLEN SIE DIE ANZAHL DER SPIELER:',
        name_input: 'Geben Sie den Namen ein von:',
        placeholder: 'Spieler',
        score_input: 'Geben Sie die Punktzahl ein für:',
        score_submit: 'hinzufügen'
    },
    spanish: {
        name: "Español",
        flag: 'https://flagcdn.com/h40/es.png',
        title: 'TABLERO DE PUNTUACIÓN',
        player_count: 'SELECCIONE LA CANTIDAD DE JUGADORES:',
        name_input: 'Ingrese el nombre de:',
        placeholder: 'Jugador',
        score_input: 'Ingrese la puntuación para:',
        score_submit: 'agregar'

    },
    english: {
        name: "English",
        flag: 'https://flagcdn.com/h40/us.png',
        title: 'SCOREBOARD',
        player_count: 'SELECT THE NUMBER OF PLAYERS:',
        name_input: 'Enter the name of:',
        placeholder: 'Player',
        score_input: 'Enter score for:',
        score_submit: 'add'
    },
    french: {
        name: "Français",
        flag: 'https://flagcdn.com/h40/fr.png',
        title: 'TABLEAU DE SCORE',
        player_count: 'SÉLECTIONNEZ LE NOMBRE DE JOUEURS:',
        name_input: 'Entrez le nom de :',
        placeholder: 'Joueur',
        score_input: 'Entrez le score pour :',
        score_submit: 'ajouter'
    }
};

let activeLanguage = languages.dutch;

function getActiveLanguage() {
    return activeLanguage;
}

function setActiveLanguage(newLanguage) {
    activeLanguage = newLanguage;
}

function translate(newText, element) {
    element.innerText = newText;
}


export { languages, getActiveLanguage, setActiveLanguage, translate }
