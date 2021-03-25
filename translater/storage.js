
document.addEventListener('DOMContentLoaded', () => {
// document.addEventListener('load', () => {

// alert(33);



       console.log("get_language", get_language());

    if (get_language() !== null ){
        let actual = document.getElementById('actual-language');
        actual.src = "img/flags/" + get_language() +".png";
        // console.log("get language", get_language());

        // language(get_language());
    }



   let storage = get_language();
   // console.log('storage:', storage);

    let anchors = document.querySelectorAll(".flags");

    // console.log('anchors', anchors);

    // let remowe_lang = document.getElementById('remove-lang');
    // remowe_lang.onclick = function (){
    //     // remove_language('poland');
    //     localStorage.removeItem('lang');
    //     window.location.reload();
    // }

    for(let anchor of anchors ){

        anchor.onclick = () => {

            if (anchor.dataset.lang) {
                if (anchor.dataset.lang === 'reset'){
                    remove_language('poland');
                }else{
                    // console.log('get_language2', get_language());
                    // if (get_language() !== null){
                        window.location.reload();
                    // }

                    set_language(anchor.dataset.lang);


                        let actual = document.getElementById('actual-language');
                        actual.src = "img/flags/" + get_language() + ".png";


                       // language(get_language());

                }
            }
        }
    }


})




function set_language(lang){
    localStorage.setItem('lang', lang);
}

function get_language(){
    return localStorage.getItem('lang')
}

function reload_page(){
    window.location.reload();
}



function remove_language(actual_lang){
    localStorage.removeItem('lang');
    // console.log('actual_lang', actual_lang);
    //
    // let anchors = document.querySelectorAll(".__t");
    //
    // for(let anchor of anchors ){
    //
    //     // for (const [key, value] of Object.entries(dictionary_en)) {
    //     for (const key in dictionary_en) {
    //
    //         let value = dictionary_en[key];
    //
    //         if (anchor.innerHTML === value.poland){
    //             anchor.innerHTML = key;
    //         }
    //     }
    // }

}



function translate(orginal, translation){

}
