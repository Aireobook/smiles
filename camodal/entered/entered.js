/**
 * Operacja dla Config
 */

window.addEventListener('DOMContentLoaded', caInitSettings, false);

function caInitSettings(){

    let tmpl = localStorage.getItem('template') || "template4"  ;
    let blur_storage = localStorage.getItem('blur') || "0"  ;
    console.log('blur_storage', blur_storage)

    // console.log('tmpl', tmpl);
    document.body.setAttribute('data-template',  tmpl);
    if (blur_storage === '1'){
        document.body.classList.add('blur');
    }else{
        document.body.classList.remove('blur');
    }


const buttons2 = document.getElementById('modal-config');


buttons2.addEventListener('click', function (){
    let th_settings = document.querySelectorAll('.th_settings')

    console.log('th_settings', th_settings);

            for (let settinge of th_settings){
                     settinge.addEventListener('click', settingsInit, false);

                function settingsInit(){
                    localStorage.setItem('template', this.dataset.template)
                    document.body.setAttribute('data-template',  this.dataset.template);
                }
            }



        let blur_none = document.getElementById('setup-blur');
        let blur_blur = document.getElementById('setup-blur-blur');




        blur_none.addEventListener('click', blures_none, false);
        function blures_none(e){
                document.body.classList.remove('blur');
                localStorage.setItem('blur', '0');

        }



        blur_blur.addEventListener('click', blures_blur, false);
        function blures_blur(e){
                document.body.classList.add('blur')
                localStorage.setItem('blur', '1');
        }











}, false);










}




