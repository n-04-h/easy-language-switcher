// lang will represent the actual selected language
let lang;

let typeState;
/* typeState {boolean} dient dazu, dass der user keine bugs erzeugt
   in dem er die Sprache switcht während ein text noch nicht vollendet im html steht
   (braucht ihr nicht wenn ihr so einen typeIt effekt nicht verwendet.)
*/

//HTML Selectoren
const enHTML = $('#en');
const deHTML = $('#de');


// langObjects ->
// Text object (EN)
const en = {

    URL: 'EN',
    navbar: {
        about: "About me",
        portfolio: "Portfolio",
        contact: "Contact",
    },
    welcome: {
        hello: "Hello! My name is",
        name: "Lorem Ipsum",
        doing: "Programmer and Designer"
    },
    about: {
        me: "That's me.",
        description: "I'm 24 years old and I'm on my way to a bachelor's degree in Internet of Things - designing networked systems." +
            " I like programming and designing for my life, I already have experience in full stack development and I am very interested" +
            " in deepening what I have learned so far and expanding it with new application options.",
        programming: "Programming skills",
        programms: "Software skills"
    },
    portfolio: {},
    contact: {}
};

// Text object (DE)
const de = {

    URL: 'DE',
    navbar: {
        about: "Über mich",
        portfolio: "Portfolio",
        contact: "Kontakt",
    },
    welcome: {
        hello: "Hallo! Mein Name ist",
        name: "Lorem Ipsum",
        doing: "Programmierer und Designer"
    },
    about: {},
    portfolio: {},
    contact: {}
};

/******************************************* url check **********************************************/
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

//Parameter "lang" abfragen
let langInURL = urlParams.get('lang');

/***************************************** document ready ********************************************/
$(document).ready(function () {
    // first called function after document is ready
    // get the values from urlParams & langInUrl to proof them and decide what language is actual active
    // or set lang because its not set or there is a wrong parameter (not declared)
    manageLanguageInURL(urlParams, langInURL);

    if (this.body.id === 'welcome') { //<--------------- Spezifikation für Type effect on welcome page
        typeState = true;//<---------------------------- HERE we block the interaction from users
        const speed_welcome = 80;
        let h = 0;
        let n = 0;
        let d = 0;
        let hello = lang.welcome.hello;
        let name = lang.welcome.name;
        let doing = lang.welcome.doing;

        typeHello();

        function typeHello() {

            if (lang === en) {
            // this check from lang is only important because visuell effekt (length of sentence)
                $("#line").removeClass('text-line-welcome-german');
                $("#line").addClass('text-line-welcome');
                $("#line").fadeIn();
            // this check from lang is only important because visuell effekt (length of sentence)
            } else if (lang === de) {
                $("#line").removeClass('text-line-welcome');
                $("#line").addClass('text-line-welcome-german');
                $("#line").fadeIn();
            }

            if (h < hello.length) {
                $('#hello-welcome').append(hello.charAt(h));
                h++;
                setTimeout(typeHello, speed_welcome);
            } else if (h === hello.length) typeName();
        }
        function typeName() {
            if (n < name.length) {
                $('#name').append(name.charAt(n));
                n++;
                setTimeout(typeName, speed_welcome);
            } else if (n === name.length) typeDoing();
        }
        function typeDoing() {
            if (d < doing.length) {
                $('#doing').append(doing.charAt(d));
                d++;
                setTimeout(typeDoing, speed_welcome);
            } else if (d === doing.length) {
                typeState = false; //<---------------------------- HERE we reset the value so interaction is ready again
                $(".nav-normal").fadeIn(2000);                                                                       //|
            }                                                                                                        //|
        }                                                                                                            //|
    }                                                                                                                //|
});                                                                                                                  //|
                                                                                                                     //|
                                                                                                                     //|
/******************************************* translation ***********************************************/            //|
// click event on EN span in HTML files                                                                              //|
enHTML.on('click', function () {                                                                               //|
    if (!typeState) {//<----------------------------------------------------------- HERE we proof this state of variable
        window.history.replaceState("string", "german", "?lang=DE");
        lang = de;
        changeText(lang, true);
        enHTML.fadeOut('fast', function () {
            //callback
            deHTML.fadeIn('slow')
        });
    }
});

// click event on DE span in HTML files
deHTML.on('click', function () {
    if (!typeState) {
        window.history.replaceState("string", "english", "?lang=EN");
        lang = en;
        changeText(lang, true);
        deHTML.fadeOut('fast', function () {
            enHTML.fadeIn('slow')
        });

    }
});

function manageLanguageInURL(uP, lUR) {

    // If there is a parameter with name "lang" ->
    if (uP.has('lang') === true) {

        // If there is neither nor lang=EN || DE ->
        if (lUR !== 'EN' && lUR !== 'DE') {
            // Then set the parameter lang=EN (default)
            window.history.replaceState("string", "english", "?lang=EN");
            lang = en;
            enHTML.fadeIn('slow');

        // Else if there is lang=EN ->
        } else if (lUR === 'EN') {
            lang = en;
            deHTML.fadeOut('slow');
            enHTML.fadeIn('slow');

        // Else if there is lang=DE ->
        } else if (lUR === 'DE') {
            lang = de;
            enHTML.fadeOut('slow');
            deHTML.fadeIn('slow');
        }

    // Else if there is no parameter lang ->
    } else if (uP.has('lang') === false) {
        window.history.replaceState("string", "english", "?lang=EN");
        lang = en;
        enHTML.fadeIn('slow');
    }
    changeText(lang, false);
}


function changeText(l, clickFromUser) {   // (l for lang === EN || DE) && (clickFromUser = true || false)

    // create variables for the id's you want select in HTML
    //NAVIGATION-----------------------------------------
    const navbar_about = $('#navbar-about');
    const navbar_portfolio = $('#navbar-portfolio');
    const navbar_contact = $('#navbar-contact');

    // next part will inner the selected text in the actual language object
    // NOTE! -> I only use jquery in this case because it is clear and good to understand I think
    // If your site is like wikipedia, i suggest you to use pure javascript because innerHTML is faster than .html
    // on stackoverflow you'll find the answer why this is fact.

    //innerHTML NAVIGATION--------------------------------
                                      // this div is not important (only for the hover effect in my case)
    navbar_about.html(l.navbar.about + '<div class="Exampleline"></div>');
    // without jquery -> navbar_about.innerHTML = l.navbar.about + '<div class="Exampleline"></div>';
    navbar_portfolio.html(l.navbar.portfolio + '<div class="Exampleline"></div>');
    navbar_contact.html(l.navbar.contact + '<div class="Exampleline"></div>');


    //WELCOME-----------------------------------
    // clickFromUser is only important, because in my case the system write this text automatic at first
    // and when the user click on the change toggle it must do this stuff again
    // (braucht ihr nicht wenn ihr so einen typeIt effekt nicht verwendet.)
    if (clickFromUser) {
        const line = $('#line');
        const hello_welcome = $('#hello-welcome');
        const name = $('#name');
        const doing = $('#doing');

        // set css class for the correct stroke length
        if (lang === de) {
            line.removeClass('text-line-welcome');
            line.addClass('text-line-welcome-german');

        // set css class for the correct stroke length
        } else if (lang === en) {
            line.removeClass('text-line-welcome-german');
            line.addClass('text-line-welcome');
        }

        // call the language object that is now binding to "l" and navigate to the correct layer

        //first is welcome, second is hello with . you navigate deeper in the selected layer
        hello_welcome.html(l.welcome.hello);
        name.html(l.welcome.name);
        doing.html(l.welcome.doing);
    }
}

/******************************************* navigate ************************************************/
function navigation(n2) { // n2 for navigate to === welcome || about || portfolio || contact
                                              //lang.URL is the actual langObject.URL -> DE || EN
                                              //(important for the url check on the site we want to navigate)
    window.location.href = n2 + '.html?lang=' + lang.URL;
}
