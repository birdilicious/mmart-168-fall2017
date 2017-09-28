//Roberta Lee

/* The getData function gives the output formulated by the string; in this case, the weblink of the Twitter URL and whatever language is attached to it. */

/* jsonData.statuses[0]: to reference/access the first element/status in the array. */

/* jsonData.statuses[4].text: to get the text property of the fifth element in the array. */

/* (Extra-credit) jsonData.statuses[1].user: To reference the name property, which is inside of the user property for the second status in the array. */

let language = 'English'
let languageCode = 'en'
let jsonData


const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language

    //clear form:
    document.querySelector("pre").innerHTML = ''
}


const getData = () => {
    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            jsonData = json
            let formattedJSON = syntaxHighlight(JSON.stringify(json, null, "    "))
            document.querySelector("pre").innerHTML = formattedJSON
        })
}








/**********************************************************************/
/* IGNORE THE CODE BELOW: JUST A WAY TO ADD COLOR TO THE JSON RESULTS */
/**********************************************************************/
const syntaxHighlight = (json) => {
    // This is just a convenience function to add color to the JSON response:
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number'
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key'
            } else {
                cls = 'string'
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean'
        } else if (/null/.test(match)) {
            cls = 'null'
        }
        return '<span class="' + cls + '">' + match + '</span>'
    })
}
