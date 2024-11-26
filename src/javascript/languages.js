const languages = {
    dutch: {
        name: "Nederlands",
        flag: 'https://flagcdn.com/h40/nl.png'
    },
    german: {
        name: "Deutsch",
        flag: 'https://flagcdn.com/h40/de.png'
    },
    spanish: {
        name: "Español",
        flag: 'https://flagcdn.com/h40/es.png'
    },
    english: {
        name: "English",
        flag: 'https://flagcdn.com/h40/us.png'
    },
    french: {
        name: "Français",
        flag: 'https://flagcdn.com/h40/fr.png'
    }
};

let activeLanguage = languages.dutch;

function getActiveLanguage() {
    return activeLanguage;
}

function setActiveLanguage(newLanguage) {
    activeLanguage = newLanguage;
}

export { languages, getActiveLanguage, setActiveLanguage }
