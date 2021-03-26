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

        window.addEventListener('DOMContentLoaded', function () {

            // dodajemy <div id="ajaxmodaljoin"></div>
            const ajx = document.createElement('div');
            ajx.setAttribute('id', 'ajaxmodaljoin');
            document.body.appendChild(ajx);

            // nazwa klasy z buttonami uruchamiającymi okienka modal   @@@ caButton
            button_class = (typeof button_class !== 'undefined' || null === button_class) ? button_class : 'caButton';

                fetch(modals_page)
                    .then(res => res.text())
                    .then(html => {
                        let ajax_join = document.getElementById('ajaxmodaljoin');
                        ajax_join.innerHTML = html;
                        initCaModal(button_class);
                    }).catch(err => {
                    console.warn('Something went wrong.', err)
                })

        }, false);
    }


    // otwiera modal po kliknięciu w button
    function initCaModal(button_class) {

        const buttons = document.querySelectorAll('.' + button_class);

        let _travel;
        let _travel_width;
        let _caConfig;

        // ********************* wszystkie buttony .caButton *******************

        for (let button of buttons) {
            button.addEventListener('click', inBtnClickInitModal , false);

            function inBtnClickInitModal(e){
                e.stopPropagation();

                let modal_open_id = button.dataset.id;

            // let caConfig = document.getElementById('ceconfig');
                let caConfig = document.getElementById(modal_open_id);
                caConfig.style.display = "block";

                let travel = document.querySelector('#' + modal_open_id + ' .travel');
                // let close = document.querySelector('#' + modal_open_id + ' .close');
                let close_ok = document.querySelector('#' + modal_open_id + ' .close-ok');



                const style = getComputedStyle(travel);
                let  travel_width = parseInt(style.width);

                _travel = travel;
                _travel_width = travel_width;
                _caConfig = caConfig;

                    travel.style.right = '-' + travel_width;

                animateModalRight(travel, travel_width);

            }
        }

        // ********************* wszystkie buttony .close *******************

            let ajaxmodaljoin = document.getElementById('ajaxmodaljoin');

            let closeee = ajaxmodaljoin.querySelectorAll(".close");

            for (let clos of closeee){
                clos.addEventListener('click', close_modal_init, false);

                function close_modal_init(e){
                    console.log('eeeee----------------------', e)
                    console.log('this----------------------', this)


                    animateOUTodalRight(_travel, _travel_width, _caConfig )
                    // clos.removeEventListener('click', close_modal_init, false);
                    // caConfig.style.display = "none";
                }

            }











    }









    /** ***********************************************************************************************************/







    // Open
    function animateModalRight(travel, travel_width){
        // let travel = document.querySelector('#ceconfig .travel');
        // let tsr = parseInt(travel.style.right, 10 );

        var n = 0;
        amr(travel_width);
        function amr(width){
            travel.style.right = (n - width)  + "px";
            n += 10;
            if(n < width ){
                setTimeout(function (){
                    amr(width);
                }, 5)
            }
        }
    }



    // Close
    function animateOUTodalRight(travel, travel_width, caConfig){

        // let travel = document.querySelector('#ceconfig .travel');

        var n = 0;
        amrout(travel_width);
        function amrout(width){
            travel.style.right = (-n)  + "px";
            n += 10;

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



    window.compositartInitModal = compositartInitModal;

})()


