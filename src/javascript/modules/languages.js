const languages = {
    dutch: {
        name: "Nederlands",
        flag: 'https://flagcdn.com/h40/nl.png',
        title: 'SCOREBORD',
        player_count: 'SELECTEER HET AANTAL SPELERS:',
        name_input: 'Voer de naam in van:',
        placeholder: 'Speler',
        score_input: 'Voer score in voor:',
        score_submit: 'Voeg toe',
        step_back: 'Terug',
        elimination_message: 'Helaas, is af en ligt uit het spel!',
        winner_message: 'Gefeliciteerd! heeft het spel gewonnen!',
        score_halving_message: 'Goed gedaan! gaat terug naar punten',
        new_game_button: 'Nieuw spel',
        new_game_text: 'Wil je een nieuw spel starten met dezelfde spelers?',
        new_game_confirm: 'Ja',
        new_game_cancel: 'Nee',
    },
    german: {
        name: "Deutsch",
        flag: 'https://flagcdn.com/h40/de.png',
        title: 'PUNKTETAFEL',
        player_count: 'WÄHLEN SIE DIE ANZAHL DER SPIELER:',
        name_input: 'Geben Sie den Namen ein von:',
        placeholder: 'Spieler',
        score_input: 'Geben Sie die Punktzahl ein für:',
        score_submit: 'Hinzufügen',
        step_back: 'Zurück',
        elimination_message: 'Leider, ist ausgeschieden und aus dem Spiel!',
        winner_message: 'Herzlichen Glückwunsch! hat das Spiel gewonnen!',
        score_halving_message: 'Gut gemacht! Geht zurück zu den Punkten',
        new_game_button: 'Neues spiel',
        new_game_text: 'Möchtest du ein neues Spiel mit den gleichen Spielern starten?',
        new_game_confirm: 'Ja',
        new_game_cancel: 'Nein'

    },
    spanish: {
        name: "Español",
        flag: 'https://flagcdn.com/h40/es.png',
        title: 'TABLERO DE PUNTUACIÓN',
        player_count: 'SELECCIONE LA CANTIDAD DE JUGADORES:',
        name_input: 'Ingrese el nombre de:',
        placeholder: 'Jugador',
        score_input: 'Ingrese la puntuación para:',
        score_submit: 'Agregar',
        step_back: 'Atrás',
        elimination_message: 'Desafortunadamente, está fuera y eliminado del juego!',
        winner_message: '¡Felicidades! ha ganado el juego!',
        score_halving_message: '¡Bien hecho! Vuelve a los puntos',
        new_game_button: 'Nuevo juego',
        new_game_text: '¿Quieres empezar un nuevo juego con los mismos jugadores?',
        new_game_confirm: 'Sí',
        new_game_cancel: 'No'

    },
    english: {
        name: "English",
        flag: 'https://flagcdn.com/h40/us.png',
        title: 'SCOREBOARD',
        player_count: 'SELECT THE NUMBER OF PLAYERS:',
        name_input: 'Enter the name of:',
        placeholder: 'Player',
        score_input: 'Enter score for:',
        score_submit: 'Add',
        step_back: 'Back',
        elimination_message: 'Unfortunately, is out and eliminated from the game!',
        winner_message: 'Congratulations! has won the game!',
        score_halving_message: 'Well done! Goes back to points',
        new_game_button: 'New game',
        new_game_text: 'Do you want to start a new game with the same players?',
        new_game_confirm: 'Yes',
        new_game_cancel: 'No'

    },
    french: {
        name: "Français",
        flag: 'https://flagcdn.com/h40/fr.png',
        title: 'TABLEAU DE SCORE',
        player_count: 'SÉLECTIONNEZ LE NOMBRE DE JOUEURS:',
        name_input: 'Entrez le nom de:',
        placeholder: 'Joueur',
        score_input: 'Entrez le score pour :',
        score_submit: 'Ajouter',
        step_back: 'Retour',
        elimination_message: 'Désolé, est éliminé et hors du jeu!',
        winner_message: 'Félicitations ! a gagné le jeu !',
        score_halving_message: 'Bien joué ! Retourne aux points',
        new_game_button: 'Nouveau jeu',
        new_game_text: 'Voulez-vous commencer une nouvelle partie avec les mêmes joueurs ?',
        new_game_confirm: 'Oui',
        new_game_cancel: 'Non'
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
