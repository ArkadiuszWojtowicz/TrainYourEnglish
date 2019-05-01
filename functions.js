var wordsEasy = ["window", "sun", "wardrobe", "flower"];
var translationsEasy = ["okno", "słońce", "szafa", "kwiatek"];
var wordsMedium = ["careful", "demand", "shape", "blood"];
var translationsMedium = ["ostrożny", "żądać", "kształt", "krew"];
var wordsHard = ["secluded", "idle", "hideous", "swamped"];
var translationsHard = ["odosobniony", "bezczynny", "ohydny", "zalany"];

function randomWordEnglishEasy() { // this function draws one word for easy level (eng -> pol)
    randomWord(wordsEasy, translationsEasy);
}
function randomWordEnglishMedium() {
    randomWord(wordsMedium, translationsMedium);
}
function randomWordEnglishHard() {
    randomWord(wordsHard, translationsHard);
}

function randomWordPolishEasy() { // this function draws one word for easy level (pol -> eng)
    randomWord(translationsEasy, wordsEasy);
}
function randomWordPolishMedium() {
    randomWord(translationsMedium, wordsMedium);
}
function randomWordPolishHard() {
    randomWord(translationsHard, wordsHard);
}

var randomFirst = randomSecond = Math.floor(Math.random() * 4);
function randomWord(words, translations) { // this function draws one word
    document.getElementById("result").innerHTML = "";
    document.getElementById("word").value = "";

    while (randomFirst === randomSecond) {
        randomSecond = Math.floor(Math.random() * 4);
    }
    randomFirst = randomSecond;

    randomWordTranslation = '';
    for (k = 0; k <= 3; k++) {
        if (randomSecond === k) {
            document.getElementById('animal').innerHTML = words[k];
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
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageEasy()"><i class="icon-exchange"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td></tr></table>';
        randomWordPolishEasy();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordPolishEasy()">Dalej</button><br>';
        language = 'polish';
    } else {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageEasy()"><i class="icon-exchange"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td></tr></table>';
        randomWordEnglishEasy();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordEnglishEasy()">Dalej</button><br>';
        language = 'english';
    }
}
function changeLanguageMedium() {
    if (language === 'english') {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageMedium()"><i class="icon-exchange"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td></tr></table>';
        randomWordPolishMedium();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordPolishMedium()">Dalej</button><br>';
        language = 'polish';
    } else {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageMedium()"><i class="icon-exchange"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td></tr></table>';
        randomWordEnglishMedium();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordEnglishMedium()">Dalej</button><br>';
        language = 'english';
    }
}
function changeLanguageHard() { 
    if (language === 'english') {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageHard()"><i class="icon-exchange"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td></tr></table>';
        randomWordPolishHard();
        document.getElementById('randomWord').innerHTML = '<button type="button" onclick="check()" class="check">Sprawdź</button><button type="button" onclick="randomWordPolishHard()">Dalej</button><br>';
        language = 'polish';
    } else {
        document.getElementById('language').innerHTML = '<table><tr><td style="width: 90px; text-align: center;"><span style="font-size:20px;">angielski</span></td><td width="90"><button type="button" class="changeLanguage" onclick="changeLanguageHard()"><i class="icon-exchange"></i></button></td><td style="width: 90px; text-align: center;"><span style="font-size:20px;">polski</span></td></tr></table>';
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
