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
 // console.log('button2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2222222', buttons2)

buttons2.addEventListener('click', function (){
    let th_settings = document.querySelectorAll('.th_settings')
          // console.log('buttons22222222222222222222222222222222222222222222222222222222222', buttons2)

    console.log('th_settings', th_settings);

            for (let settinge of th_settings){
                     settinge.addEventListener('click', settingsInit, false);

                function settingsInit(){
                    localStorage.setItem('template', this.dataset.template)
                    document.body.setAttribute('data-template',  this.dataset.template);
                }
            }




        let blurer = false;
        let blur_none = document.getElementById('setup-blur');
        let blur_blur = document.getElementById('setup-blur-blur');

        // console.log('blur', blurer)
        //
        // blur.addEventListener('mouseover', blures, false);
        // function blures(){
        //
        //     console.log('mousieover', blurer)
        //
        //      if (document.body.classList.contains('blur')){
        //          document.body.classList.remove('blur')
        //      }else{
        //          document.body.classList.add('blur');
        //      }
        //
        //
        // }
        //
        //
        // blur.addEventListener('mouseout', blures_out, false);
        // function blures_out(){
        //
        //     console.log('mouseout oooooooooooooooooooooooooooooooooooooooooooo', blurer)
        //     if ( ! blurer){
        //         console.log('mouseout oooooooooooooooooooooooooooodfdffffffffffffffffffffffffffffffffffffffffffffffffoooo', blurer)
        //         if (document.body.classList.contains('blur')){
        //             document.body.classList.remove('blur')
        //         }else{
        //             document.body.classList.add('blur');
        //         }
        //         console.log('blurer1', blurer)
        //
        //         console.log('blurer2', blurer)
        //     }
        //     blurer = false;
        //
        // }


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




