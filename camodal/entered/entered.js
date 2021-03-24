
window.addEventListener('DOMContentLoaded', caInitSettings, false);

function caInitSettings(){

    let tmpl = localStorage.getItem('template');
    document.body.setAttribute('data-template',  tmpl);


const buttons2 = document.getElementById('modal-config');
buttons2.addEventListener('click', function (){
    let th_settings = document.querySelectorAll('.th_settings')



            for (let settinge of th_settings){

                     settinge.addEventListener('click', settingsInit, false);


                function settingsInit(){
                    console.log('this :::::::::::::::----:::::::::', this.dataset.template)

                    // let im = this.dataset.variable;
                    // let blur = this.dataset.blur;
                    // console.log('in', im );
                    // console.log('blur', blur );

                    // let template = {};
                    // template.im = im;
                    // template.blur = blur;

                    localStorage.setItem('template', this.dataset.template)


                    // console.log('template', template)

                    // localStorage.setItem('template', JSON.stringify(template));

                    document.body.setAttribute('data-template',  this.dataset.template);



                    // alert(33)

                    // document.documentElement.style.setProperty('--image-bg-blend', 'url(../' + blur + ')' );
                    // document.body.style.backgroundImage = "url("+ im +")";
                }


            }


}, false);





}