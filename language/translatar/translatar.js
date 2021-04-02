

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


    let tranlators_directory = "modals/dic_";

   let url = tranlators_directory + language +'.json';



    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        this.obietnica2(data);
    }).catch(err => {
        console.warn('Something went wrong.', err)
        this.resetLanguage();
    });

    //
    // if (url ){
    //     fetch(ajax_dic)
    //         .then(res => res.text())
    //         .then(html => {
    //           this.obietnica2(JSON.parse(html))
    //         }).catch(err => {
    //         console.warn('Something went wrong.', err)
    //     })
    // }




}





InitTranlatar.prototype.resetLanguage = function (){



    const to_translates = document.querySelectorAll('[data-t]');
    for (let translate of to_translates ){
        translate.style.display = 'block';


        document.body.classList.remove('lang')



        let olds = document.querySelectorAll('.translation');

        for (let old of olds){
            old.remove();
        }


    }
}



InitTranlatar.prototype.obietnica2 = function(data){


    // const to_translates = document.querySelectorAll('.__t');
    const to_translates = document.querySelectorAll('[data-t]');

    this.resetLanguage();
    // Przeszukujemy stronę dla class("__t")
    for (let translate of to_translates ){

        // Znajdujemy w data-t odnośnik do słownika json
        let datasetId = translate.dataset.t

        // Sprawdzamy czy joson zawiera odnośnik do przetłumaczenia
        if (datasetId in data) {
            // your code here

            let result = data[datasetId];

            if (result){

                let cms = document.createElement('div');
                cms.setAttribute('class', 'translation');
                translate.parentNode.appendChild(cms);

                // orginalny tekst staje się niewidoczny
                translate.style.display = 'none';
                document.body.classList.add('lang')

                // wyśietlamy tłumaczenie w div brat
                result = result.replaceAll('\n', '<br>');
                cms.innerHTML = result
            }
        }
    }

}


