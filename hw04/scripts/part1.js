//Roberta Lee
/* The innerHTML or value can be changed; the variable 'language' can be redefined. When the language text is clicked, the page displays that language text*/
let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'fr') {
        language = 'French'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language
}
