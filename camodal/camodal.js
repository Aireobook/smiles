/**
 *
 * Wyłączenie odpowiedzialności: Aireobook - C.&.E. nie udziela żadnych gwarancji odnośnie jakichkolwiek programów,
 * plików, ani innych materiałów zawartych na niniejszej lub jakiejkolwiek innej stronie z oprogramowaniem
 * Aireobook - C.&.E.,  lub pobranych z jakich kolwiek innych stron.
 * Wszystkie tego typu programy, pliki i inne materiały są dostarczane w aktualnym stanie.
 * Aireobook - C.&.E. nie udziela żadnych gwarancji, jawnych ani dorozumianych, w tym m.in. dorozumianych gwarancji
 * pokupności, przydatności do określonego celu i nienaruszalności praw osób trzecich.
 * Aireobook - C.&.E. nie ponosi odpowiedzialności za zawarte w niniejszym dokumencie błędy ani za utracone zyski,
 * możliwości, szkody uboczne lub przypadkowe poniesione w wyniku podjęcia działania w oparciu o informacje
 * zamieszczone (lub w wyniku korzystania z dowolnego oprogramowania zamieszczonego) na niniejszej
 * stronie z oprogramowaniem.
 * W przypadku braku akceptacji postanowień niniejszego wyłączenia odpowiedzialności nie należy pobierać oprogramowania.
 * Użytkownik oświadcza i zapewnia, że przestrzega wszystkich przepisów, ograniczeń i regulacji dotyczących  krajów,
 * w których będzie używane Oprogramowanie.
 *
 */


/**
 *
 * Button musi zawierać:
 * class="caButton"     => Podstawowa klasa kaźdego buttona. Klasa może być zmeniona przy inicjalizacji.
 * data-id="myModal1"   => id modala który odwiera
 * data-type="default"  => typ
 * Exaple:  <button class="eiButton" data-id="myModal1"  data-toggle="modal" data-type="default" type="button">Launch Modal 1</button>.
 *
 *
 * Modal umieszczamy na stronie lub w odzielnym pliku wczytywanym przez ajax. Nazwa pliku to 'modals.html'. Nazwa może być zmieniona przy initializacji
 */


(function () {

    function compositartInitModal(button_class, modals_page = 'camodal/modals.html') {

        window.addEventListener('load', function () {

            // dodajemy <div id="ajaxmodaljoin"></div>
            const ajx = document.createElement('div');
            ajx.setAttribute('id', 'ajaxmodaljoin');
            document.body.appendChild(ajx);

            // pliki z modalami zostaną dodane metodą ajax
            ajax(modals_page);

            // nazwa klasy z buttonami uruchamiającymi okienka modal   @@@ caButton
            button_class = (typeof button_class !== 'undefined' || null === button_class) ? button_class : 'caButton';

            initCaModal(button_class);
            // initClose_X();

        }, false);
    }


    // otwiera modal po kliknięciu w button
    function initCaModal(button_class) {

        const buttons = document.querySelectorAll('.' + button_class);





        // wszystkie buttony .caButton
        for (let button of buttons) {
            button.addEventListener('click', inBtnClickInitModal , false);

            function inBtnClickInitModal(e){
                e.stopPropagation();

                let modal_open_id = button.dataset.id;

                console.log('e', e)
                console.log('button', button )



                // let caConfig = document.getElementById('ceconfig');
                let caConfig = document.getElementById(modal_open_id);
                caConfig.style.display = "block";




                let travel = document.querySelector('#' + modal_open_id + ' .travel');
                let close = document.querySelector('#' + modal_open_id + ' .close');

                const style = getComputedStyle(travel);
                let  travel_width = parseInt(style.width);

                travel.style.right = '-' + travel_width;

                animateModalRight.call(this, travel_width);


                close.addEventListener('click', has_close_click, false)
                    function has_close_click(e){
                        animateOUTodalRight.call(this, travel_width);
                    }


                // Open
                function animateModalRight(travel_width){
                    // let travel = document.querySelector('#ceconfig .travel');
                    // let tsr = parseInt(travel.style.right, 10 );

                    var n = 0;
                    console.log(n)
                    amr(travel_width);
                    function amr(width){
                        travel.style.right = (n - width)  + "px";
                        n += 10;
                        // console.log('n', n)
                        if(n < width ){
                            setTimeout(function (){
                                amr(width);
                            }, 5)
                        }
                    }
                }



                // Close
                function animateOUTodalRight(travel_width){

                    // let travel = document.querySelector('#ceconfig .travel');

                    var n = 0;
                    console.log(n)
                    amrout(travel_width);
                    function amrout(width){
                        travel.style.right = (-n)  + "px";
                        n += 10;
                        // console.log('n', n)
                        if(n < width ){
                            setTimeout(function (){
                                amrout(width);
                            }, 5)
                        }
                            if (n >= width){
                                caConfig.style.display = 'none';
                            }
                    }
                }
            }



        }
    }

    function initCloseX(id, modal) {
        const closeX = document.querySelectorAll('#' + id + ' .close');
        const closeOK = document.querySelectorAll('#' + id + ' .close-ok');


         for (let close of closeX){

             close.addEventListener('click', tt, false);
             function tt(e) {
                 e.stopPropagation();

                 let fader = document.querySelector('#fader');
                 setTimeout(function () {
                     modal.style.display = 'none';
                 }, 250);
                 // modal.style.display = 'none';

                 let body = document.body;
                 body.style.overflow = "inherit";
                 // body.classList.remove('catmodal')
                 // fader.remove();
                 close.removeEventListener('click', tt, false);
             }

         }
         //
         // for (let closeoke of closeOK){
         //
         //     closeoke.addEventListener('click', ttok, false);
         //     function ttok(e) {
         //         // e.stopPropagation();
         //
         //         console.log('eeeeeeeeeeee')
         //
         //         let fadere = document.querySelector('#fader');
         //         setTimeout(function () {
         //             modal.style.display = 'none';
         //         }, 250);
         //
         //         let bodye = document.body;
         //         // bodye.style.overflow = "inherit";
         //         // bodye.classList.remove('catmodal')
         //         // fadere.remove();
         //         closeoke.removeEventListener('click', ttok, false);
         //     }
         //
         // }






    }


    /***************** Funkcje wykonawcze ******************/
    // function randomID(long = false) {
    //     let r = null;
    //     r = long ? btoa(Math.random()).replace(/=+/g, "a") : Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    //     console.log('r', r)
    //     return r;
    // }

    function viewModal(modal) {
        modal.style.display = 'block';
        let body = document.body;
        // body.style.overflow = "hidden";
        body.classList.add('catmodal')

        // let f = document.createElement('div');
        // f.setAttribute('id', 'fader');
        // f.setAttribute('class', 'fader ' + randomID());
        // body.append(f);
    }

    function closeModal(modal) {

        let fader = document.querySelector('#fader');

        console.log('fader', fader);

        setTimeout(function () {
            modal.style.display = 'none';
        }, 250);

        let body = document.body;
        body.style.overflow = "inherit";
        body.classList.remove('catmodal')
        fader.remove();

    }


    function ajax(modals_page) {
        fetch(modals_page)
            .then(res => res.text())
            .then(html => {
                let ajax_join = document.getElementById('ajaxmodaljoin');
                ajax_join.innerHTML = html;
            }).catch(err => {
            console.warn('Something went wrong.', err)
        })
    }


    window.compositartInitModal = compositartInitModal;

})()


