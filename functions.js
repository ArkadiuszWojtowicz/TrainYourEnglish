var wordsEasy = ["database", "data", "mouse", "printer", "variable", "software", "customize", "enterprise", "socket", "design", "user", "cloud", "core", "interface", "cable", "attachment", "memory", "keyboard", "compiler", "licence", "multiple", "button", "content", "form", "default", "value", "hidden", "focus", "website", "shadow", "tutorial", "random", "underlined", "portable", "pattern", "row", "tool", "upgrade"];//easy
var translationsEasy = ["baza danych", "dane", "mysz", "drukarka", "zmienna", "oprogramowanie", "dostosować", "przedsiębiorstwo", "gniazdo", "projekt", "użytkownik", "chmura", "główny", "interfejs", "kabel", "załącznik", "pamięć", "klawiatura", "compilator", "licencja", "wielokrotny", "przycisk", "zawartość", "formularz", "domyślny", "wartość", "ukryty", "skupiać", "strona internetowa", "cień", "poradnik", "losowy", "podkreślony", "przenośny", "wzorzec", "wiersz", "narzędzie", "aktualizacja"];
var wordsEasyLength = wordsEasy.length-1;
var wordsMedium = ["device", "flexibility", "factor", "decrypt", "accurate", "domain", "collaboration", "accomplish", "regardless", "accessible", "branch", "warehouse", "border", "margin", "font", "layout", "inline", "divide", "override", "property", "opacity", "transparent", "query", "container", "header", "remote", "validate", "portable", "restore", "extension", "invalid", "join", "maintenance", "pending", "queue", "scope", "syntax", "vendor"];//medium
var translationsMedium = ["urządzenie", "elastyczność", "czynnik", "deszyfrować", "dokładny", "domena", "współpraca", "ukończyć", "bez względu", "dostępny", "użytkownik", "hurtownia", "granica", "margines", "czcionka", "układ", "w linii", "dzielić", "nadpisać", "właściwość", "nieprzezroczystość", "przezroczysty", "pytanie", "pojemnik", "nagłówek", "zdalny", "potwierdzać", "przenośny", "przywracać", "rozszerzenie", "nieprawidłowy", "złączenie", "utrzymanie", "w toku", "kolejka", "zasięg", "składnia", "dostwca"];
var wordsMediumLength = wordsMedium.length-1;
var wordsHard = ["time-consuming", "prompts", "integrity", "anchor", "fixed", "pointer", "copper", "inconsistent", "accuracy", "forecasting", "switch", "obstacle", "revenue", "guideline", "inherent", "parallel", "uniqueness", "interrelated", "inventive", "spoofing", "latency", "meaningful", "predictive", "redundancy", "refinement", "route", "stack", "subset", "transition", "trunk", "warranty", "widespread", "sender", "ROM chip"];//hard
var translationsHard = ["czasochłonny", "podpowiedzi", "integralność", "kotwica", "niezmienny", "wskaźnik", "miedź", "niespójny", "precyzja", "prognozowanie", "przełącznik", "przeszkoda", "przychód", "wytyczna", "nieodłączny", "równolegle", "unikalność", "wzajemnie powiązany", "pomysłowy", "fałszowanie", "czas oczekiwania", "znaczący", "prognostyczny", "nadmiarowość", "udoskonalenie", "trasa", "stos", "podzbiór", "przemiana", "magistrala", "gwarancja", "rozpowszechniony", "nadawca", "kość pamięci ROM"];
var wordsHardLength = wordsHard.length-1;

function randomWordEnglishEasy() { // this function draws one word for easy level (eng -> pol)
    randomWord(wordsEasy, translationsEasy, wordsEasyLength);
}
function randomWordEnglishMedium() {
    randomWord(wordsMedium, translationsMedium, wordsMediumLength);
}
function randomWordEnglishHard() {
    randomWord(wordsHard, translationsHard, wordsHardLength);
}

function randomWordPolishEasy() { // this function draws one word for easy level (pol -> eng)
    randomWord(translationsEasy, wordsEasy, wordsEasyLength);
}
function randomWordPolishMedium() {
    randomWord(translationsMedium, wordsMedium, wordsMediumLength);
}
function randomWordPolishHard() {
    randomWord(translationsHard, wordsHard, wordsHardLength);
}


function randomWord(words, translations, length) { // this function draws one word
    var randomFirst = randomSecond = Math.floor(Math.random() * length); // variable length is array length
    document.getElementById("result").innerHTML = "";
    document.getElementById("word").value = "";

    while (randomFirst === randomSecond) {
        randomSecond = Math.floor(Math.random() * length);
    }
    randomFirst = randomSecond;

    randomWordTranslation = '';
    for (k = 0; k <= length; k++) {
        if (randomSecond === k) {
            document.getElementById('wordDisplay').innerHTML = words[k];
            randomWordTranslation = translations[k];
        }
    }
    i = 0; // useful for showOne() function
}

var i = 0;
function check() { // this function checks answer given
    var word = document.getElementById('word').value;
    var wordSmallLetters = word.toLocaleLowerCase(); // konwersja na małe litery
    if (randomWordTranslation !== wordSmallLetters)
    {
        document.getElementById("result").innerHTML = "Źle!";
        i = randomWordTranslation.length; // useful for showOne() function
    } else {
        document.getElementById("result").innerHTML = "Dobrze!";
        i = randomWordTranslation.length; // useful for showOne() function
    }
    

}
var language = 'english';
function changeLanguageEasy() { // this function changes language
    if (language === 'english') {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageEasy()"><i class="fas fa-exchange-alt"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td></tr></table>';
        randomWordPolishEasy();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordPolishEasy()">Dalej</button><br>';
        language = 'polish';
    } else {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageEasy()"><i class="fas fa-exchange-alt"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td></tr></table>';
        randomWordEnglishEasy();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordEnglishEasy()">Dalej</button><br>';
        language = 'english';
    }
}
function changeLanguageMedium() {
    if (language === 'english') {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageMedium()"><i class="fas fa-exchange-alt"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td></tr></table>';
        randomWordPolishMedium();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordPolishMedium()">Dalej</button><br>';
        language = 'polish';
    } else {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageMedium()"><i class="fas fa-exchange-alt"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td></tr></table>';
        randomWordEnglishMedium();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordEnglishMedium()">Dalej</button><br>';
        language = 'english';
    }
}
function changeLanguageHard() { 
    if (language === 'english') {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageHard()"><i class="fas fa-exchange-alt"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td></tr></table>';
        randomWordPolishHard();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordPolishHard()">Dalej</button><br>';
        language = 'polish';
    } else {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageHard()"><i class="fas fa-exchange-alt"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td></tr></table>';
        randomWordEnglishHard();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordEnglishHard()">Dalej</button><br>';
        language = 'english';
    }
}
function show() { // this funcion shows solution
    document.getElementById("result").innerHTML = randomWordTranslation;
    i = randomWordTranslation.length; // useful for showOne() function
}


document.getElementById("result").innerHTML = '';

function showOne() { // this function shows one letter over and over
    var length = randomWordTranslation.length;
    if (i === length) {
        i = 0;
        document.getElementById("result").innerHTML = '';
    }
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + randomWordTranslation.charAt(i);
    i++;
}
