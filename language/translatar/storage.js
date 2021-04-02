
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


    let anchors = document.querySelectorAll(".flags");

    for(let anchor of anchors ){

        anchor.onclick = () => {

            if (anchor.dataset.lang) {
                if (anchor.dataset.lang === 'reset'){
                    remove_language('poland');
                }else{
                    set_language(anchor.dataset.lang);
                        let actual = document.getElementById('actual-language');
                        actual.src = "img/flags/" + get_language() + ".png";
                        InitTranlatar();
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


}



function translate(orginal, translation){

}
