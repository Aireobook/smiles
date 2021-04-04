/**
 *
 * @param config
 * @returns {InitModalMCL}
 * @constructor
 *
 * Modals
 * Verssion:  0.7.0.
 */
function InitModalMCL(config){

   config = config || {};

    if ( !(this instanceof InitModalMCL)){
        return new InitModalMCL(config);
    }
    this._config = this._extendOpiotns(config)

    // dodajemy <div id="ajaxmodaljoin"></div>
    const ajx = document.createElement('div');
    ajx.setAttribute('id', 'ajaxmodaljoin');
    document.body.appendChild(ajx);

   modals_page = this._config.modals_page;

    fetch(modals_page)
        .then(res => res.text())
        .then(html => {
            let ajax_join = document.getElementById('ajaxmodaljoin');
            ajax_join.innerHTML = html;
            this.obietnica();
            InitTranlatar(); // !!!
        }).catch(err => {
        console.warn('Something went wrong.', err)
    })
}


InitModalMCL.prototype.obietnica = function (){

    let caButtons = document.querySelectorAll('.caButton');

    for (let button of caButtons){
        button.addEventListener('click', inBtnClickInitModale , false);
        let self = this;
        function inBtnClickInitModale(e){
            e.stopPropagation();
            self._clicked_button = button;


            // Opent this modal
            let modal_open_id = button.dataset.id;


            // let caConfig = document.getElementById(modal_open_id);
            self._modal_open_id = modal_open_id;

            let this_modal = document.getElementById(modal_open_id);
            self._this_modal = this_modal;

            let closes = document.querySelectorAll('#' + modal_open_id + ' .close');

            if (this_modal.classList.contains('center')){
                self.animatesCenter();
            }

            if (this_modal.classList.contains('right')){
                self.openAnimateModalRight()
            }
            if (this_modal.classList.contains('closable')){

            }


            // close

            for (let close of closes){
                close.addEventListener('click', has_close_modal_click, false)
                function has_close_modal_click(e){
                    e.stopPropagation();// blokuje rodzicow
                    e.stopImmediatePropagation(); // blokuje klikanie na dzieciach

                    if (this_modal.classList.contains('center')){
                        self.closeModal();
                    }
                    if (this_modal.classList.contains('right')){
                        self.closeAnimateoMdalRight();
                    }
                }

            }


        }
    }
}


/**********************************************************************
                                  Center
**********************************************************************/
// Open
InitModalMCL.prototype.animatesCenter = function(e) {
    this._this_modal.style.display = "block";

   let travel = document.querySelector('#' + this._modal_open_id + ' .travel');


   let mcl = document.querySelector('.mcl');
    let i;
    let n = 20;
    amr();
    function amr(){

        i = i >= 1 ? 1 : n/100;
        travel.style.transform = "scale(" + i + ")";
        mcl.style.opacity = i;
        n += 15;
        if(i < 1 ){
            setTimeout(function (){
                amr();
            }, 15)
        }
    }
}

// Close
InitModalMCL.prototype.closeModal = function(){

    let travel = document.querySelector('#' + this._modal_open_id + ' .travel');
    let mcl = document.querySelector('.mcl');
    let i;
    let n = 20;
    amrc();
    function amrc(){

        i = i >= 1 ? 1 : n/100;
          mcl.style.opacity = (1-i);
        n += 10;
        if(i < .9 ){
            setTimeout(function (){
                amrc();
            }, 10)
        }else{
            travel.parentElement.style.display = 'none';
        }
    }

}

/**********************************************************************
                                Right
 **********************************************************************/

// Open
InitModalMCL.prototype.openAnimateModalRight = function (travel_width){
       travel_width = 600;
    this._this_modal.style.display = "block";
    let travel = document.querySelector('#' + this._modal_open_id + ' .travel');
    let n = 0;
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
InitModalMCL.prototype.closeAnimateoMdalRight = function (travel_width){
     let self = this;
    // let travel = document.querySelector('#ceconfig .travel');
    travel_width = 600;

    let travel = document.querySelector('#' + this._modal_open_id + ' .travel');

    let n = 0;
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
            self._this_modal.style.display = 'none';
        }
    }
}





/**********************************************************************
                               Config
 **********************************************************************/

// obiekt zawera defultowe wartości dla config
InitModalMCL.prototype._defaultCongig = {
    button_class : 'caButton',
    modals_page: 'modals/modals.html'
}



// mixuje default i config
InitModalMCL.prototype._extendOpiotns = function (config){

    // tworzymy nowy obiekt
    let defaultConfig = JSON.parse(JSON.stringify(this._defaultCongig));

    for (let key in defaultConfig){
        if (defaultConfig.hasOwnProperty(key)){
            if (key in config){
                  defaultConfig[key] = config[key];
            }
        }
    }
    return defaultConfig;
}




/**********************************************************************
                               Start
 **********************************************************************/
window.addEventListener('DOMContentLoaded', function (){

    InitModalMCL({
        // button_class : 'caButton',
        // modals_page: 'modals/modals1111.html'
    })

})




