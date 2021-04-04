

/**
 * funkcja musi być uruchomiona w obrębie obietnicy na końcu
 * Podmienia kod html na innty język ( __t, t__01 )
 */


function InitTranlatar(){

    if ( !(this instanceof InitTranlatar)){
        return new InitTranlatar();
    }

    let language = localStorage.getItem('lang')

    // jeżeli nie tłumaczymy
    if (language === 'en'){

        // jeżeli zostalo przetlumaczone, ale znowu jest przełączone na angielski
        if ( document.body.classList.contains('lang')){
            this.resetLanguage();
            return ;
        }else{
            return ;
        }
    }

    if (language === 'co'){
        language = 'es'
    }

    let tranlators_directory = "language/dictionaries/dic_";
    let url = tranlators_directory + language +'.json';

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        this.obietnica2(data);
    }).catch(err => {
        console.warn('Something went wrong.', err)
        this.resetLanguage();
    });

}


InitTranlatar.prototype.resetLanguage = function (){

    const to_translates = document.querySelectorAll('[data-t]');
    for (let translate of to_translates ){
        translate.style.display = 'initial';
        document.body.classList.remove('lang')

        let olds = document.querySelectorAll('.translation');

        for (let old of olds){
            old.remove();
        }
    }
}


InitTranlatar.prototype.obietnica2 = function(data){

    const to_translates = document.querySelectorAll('[data-t]');

    // transponujemy data do obiektu key:value (en:pl)
     let translatory= {};

    for (const[key, value] of Object.entries(data)){
        translatory[value.en] = value.pl;
    }

    this.resetLanguage();
    // Przeszukujemy stronę dla class("data-t")
    for (let to_translate of to_translates ){

        // Znajdujemy w data-t odnośnik do słownika json
        let to_tranlate_html = to_translate.innerHTML;

        // to_tranlate_html =  to_tranlate_html.replaceAll('\n', '<br>').trim();
        to_tranlate_html = to_tranlate_html.replace(/\s\s+/g, ' ');

        if (to_tranlate_html in translatory ){

            let result = translatory[to_tranlate_html]

            if (result && result !== "___"){
                console.log('result----------', result)
                let cms = document.createElement('div');
                cms.setAttribute('class', 'translation');

                to_translate.parentNode.insertBefore(cms, to_translate.nextSibling);

                // orginalny tekst staje się niewidoczny
                to_translate.style.display = 'none';
                document.body.classList.add('lang')

                // wyśietlamy tłumaczenie w div brat
                cms.innerHTML = result
            }
        }
    }
}


