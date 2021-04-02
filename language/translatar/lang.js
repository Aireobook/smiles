
window.addEventListener('load', function (){

    let btn_lang = document.getElementById('btn-lang');
    let drop_lang_menu = document.querySelector('.dropdown-menu');
    let flags = document.querySelectorAll('.flags');


    for (let flag of flags){
        flag.addEventListener('click', flagsHidden, false)

        function flagsHidden(){
            drop_lang_menu.classList.remove('display-block')
        }

    }




    btn_lang.addEventListener('click', languages, false );

     function languages(){

         if (drop_lang_menu.classList.contains('display-block')){

                drop_lang_menu.classList.remove('display-block');
                drop_lang_menu.classList.add('dm-display-none');
         }
         else if(drop_lang_menu.classList.contains('display-none' ))
         {

             drop_lang_menu.classList.add('display-block');
             drop_lang_menu.classList.remove('display-none');
         }else{

             drop_lang_menu.classList.add('display-block');
             drop_lang_menu.classList.remove('display-none');
         }
     }

}, false)