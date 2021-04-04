
document.addEventListener('DOMContentLoaded', () => {



    if (get_language() !== null ){
        let actual = document.getElementById('actual-language');
        actual.src = "img/flags/" + get_language() +".png";

        if (get_language()) {
            set_language(get_language());
            let actual = document.getElementById('actual-language');
            actual.src = "img/flags/" + get_language() + ".png";
            InitTranlatar();
        }


    }



    let anchors = document.querySelectorAll(".flags");

    for(let anchor of anchors ){

        anchor.addEventListener('click', flagsClicked, false);

        function flagsClicked(){


            if (anchor.dataset.lang) {
                set_language(anchor.dataset.lang);
                let actual = document.getElementById('actual-language');
                actual.src = "img/flags/" + get_language() + ".png";
                InitTranlatar();
            }

        }




        anchor.onclick = () => {


        }
    }


})




function set_language(lang){
    localStorage.setItem('lang', lang);
}

function get_language(){
    return localStorage.getItem('lang')
}



function remove_language(actual_lang){
    localStorage.removeItem('lang');


}



function translate(orginal, translation){

}
