
window.addEventListener('load', function (){

    let btn_lang = document.getElementById('btn-lang');
    let drop_lang_menu = document.querySelector('.dropdown-menu');

    btn_lang.addEventListener('click', languages, false );

     function languages(){

         // console.log('aaaaaaaaaaaaaaaaa', drop_lang_menu.classList.contains('dm-display-none'));


         if (drop_lang_menu.classList.contains('dm-display-block')){

                drop_lang_menu.classList.remove('dm-display-block');
                drop_lang_menu.classList.add('dm-display-none');
         }
         else if(drop_lang_menu.classList.contains('dm-display-none' ))
         {

             drop_lang_menu.classList.add('dm-display-block');
             drop_lang_menu.classList.remove('dm-display-none');
         }else{

             drop_lang_menu.classList.add('dm-display-block');
             drop_lang_menu.classList.remove('dm-display-none');
         }
     }

}, false)