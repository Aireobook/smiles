
window.addEventListener('DOMContentLoaded', caInitSettings, false);

function caInitSettings(){

    let tmpl = localStorage.getItem('template') || "template4"  ;

    console.log('tmpl', tmpl);
    document.body.setAttribute('data-template',  tmpl);


const buttons2 = document.getElementById('modal-config');


buttons2.addEventListener('click', function (){
    let th_settings = document.querySelectorAll('.th_settings')

            for (let settinge of th_settings){
                     settinge.addEventListener('click', settingsInit, false);

                function settingsInit(){
                    localStorage.setItem('template', this.dataset.template)
                    document.body.setAttribute('data-template',  this.dataset.template);
                }
            }
}, false);










}