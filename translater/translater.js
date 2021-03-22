(function (){
    function compositartInitTranslater(button_class, modals_page = 'modals.html') {

        window.addEventListener('load', function (){
           let lang = localStorage.getItem('lang');
           console.log('lang-------', lang);

            if (lang !== 'en'){
                let tranlators_directory = "translater/dictionaries/dic_";

                let ajax_dic = tranlators_directory + lang + ".json" || false;
                console.log('didc----------------', ajax_dic)

                if (ajax_dic ){
                    fetch(ajax_dic)
                        .then(res => res.text())
                        .then(html => {
                            translator(html, lang);
                        }).catch(err => {
                        console.warn('Something went wrong.', err)
                    })
                }



            }




        })

    }

    window.compositartInitTranslater = compositartInitTranslater;
})()



function translator(j, lang){
    var json = JSON.parse(j);
    console.log('json', json)


   // console.log('lang-------------------------------------', lang)

    let anchors = document.querySelectorAll(".__t");

    for(let anchor of anchors ) {
        // console.log('anchor::::::::::::::::::::::', anchor);
        // console.log('textContent:::', anchor.textContent);

  // console.dir(anchor)
        for (const [key, value] of Object.entries( json  )) {


            // let rep = anchor.innerHTML.replace(key,value);
            //      console.log('--------');

                 // console.log('key', key);
                 // console.log('value', value);
                 // console.log('value_en', value.en);
                 // console.log('value_pl', value[lang]);
            // console.log('value', value);
            //      console.log('replace...:::', rep);
            if (value[lang] !== '___' && value[lang] !== undefined){
                anchor.innerText = anchor.innerText.replace(value.en, value[lang]);
            }


        }

    }



}


// function ajaxer(file, join = 'ajaxJoin') {
//     fetch(file)
//         .then(res => res.text())
//         .then(html => {
//             let ajax_join = document.getElementById(join);
//             ajax_join.innerHTML = html;
//         }).catch(err => {
//         console.warn('Something went wrong.', err)
//     })
// }