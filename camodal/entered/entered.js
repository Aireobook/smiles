
window.addEventListener('load', caInitSettings, false);

function caInitSettings(){

const buttons2 = document.getElementById('modal-config');
buttons2.addEventListener('click', function (){
// alert(33)
    let th_settings = document.querySelectorAll('.th_settings')

       // console.log('th_settings:::::::::::::::::::::::::::', th_settings)
            for (let settinge of th_settings){

                 settinge.addEventListener('click', function (e){

                     // let ala1 = getComputedStyle(document.documentElement).getPropertyValue('--image-bg'); // #999999
                     // console.log('ala1 @@@@@@@@@@@@@@', ala1)

                     // console.log(':::::::::::::::----:::::::::', e.target)
                     console.log('this :::::::::::::::----:::::::::', this.dataset.variable)

                     let im = this.dataset.variable;
                     let blur = this.dataset.blur;

                     console.log('in', im );
                     console.log('blur', blur );

                     //           url(../img/bg/b11c2b2.jpg);

                      // document.documentElement.style.setProperty('--image-bg-blend', 'url(../' + blur + ')' );
                      document.documentElement.style.setProperty('--image-bg-blend', 'url(../' + blur + ')' );
                     // document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/Aireobook/smiles/main/img/bg/b11c2c.jpg)";
                      document.body.style.backgroundImage = "url("+ im +")";






                     // document.body.style.backgroundImage =  "url(https://raw.githubusercontent.com/Aireobook/smiles/main/img/bg/b11c2c.jpg);";

                     // let ala = getComputedStyle(document.documentElement).getPropertyValue('--image-bg'); // #999999
                     // console.log('ala @@@@@@@@@@@@@@', ala)

                }, false);

            }


}, false);





}