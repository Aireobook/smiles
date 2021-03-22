class ImageModal extends CmModal {
    constructor(button_class, modal_id, modal_type = 'image') {
        super(button_class, modal_id, modal_type, 'image');
        // this.fullscreen();
    }

    inButtonClick(buttons_class = this.button_class) {
        let buttons = document.querySelectorAll('.' + buttons_class);
        let self = this;


        for (let button of buttons) {
            button.onclick = function (e) {
                window.saane_wheel = false;
                // self.doFilterBlur();





                let imaa = document.getElementById('content-image');
                let ii = document.getElementById("imga");


                let us = imaa.removeChild(ii);


                let im = document.createElement('img');
                im.setAttribute('id', 'imga');
                im.setAttribute('class', 'image-model');
                imaa.appendChild(im);


                self.buttonse(button);
                resize_image();
                let body = document.querySelector("body");
                body.style.overflow = 'hidden'
            };
        }
    }

    content(button) {
        console.log('buttom', button)
        let image = button.dataset.image;
        if (image !== undefined) {

            let file = button.dataset.image;
            const filename = file.replace(/^.*?([^\\\/]*)$/, '$1');


            let data_title = button.dataset.title;


            // if (data_title !== undefined) {
            //     document.getElementById('title-' ).innerText = data_title;
            // } else {
            //     document.getElementById('title-' ).innerText = '';
            // }




            // Create element olny not isset
            if (! document.getElementById("imga")) {
                // let pla = document.getElementById("content-image" );
                // let im = document.createElement('img');
                // im.setAttribute('id', 'imga');
                // im.setAttribute('class', 'image-model');
                // pla.appendChild(im);
            }




            let img = document.getElementById("imga").src = image;
            let fullscreen = document.getElementById('fullcreen-' );
            if (fullscreen !== null) {
                fullscreen.addEventListener("click", () => {
                    let i = document.getElementById('imga').requestFullscreen();
                });
            }



        }
    }




    aimodalHtml(id){
        let cms = document.createElement('div');
        cms.setAttribute('id', 'box-' + id );
        cms.setAttribute('class', 'imag box' );
        document.body.appendChild(cms, document.body.firstChild);

        let cs = document.createElement('div');
        cs.setAttribute('id', 'wrapper-' + id );
        cs.setAttribute('class', 'wrapper');
        cms.appendChild(cs);

        let mcs = document.createElement('div');
        mcs.setAttribute('id', 'travel-' + id );
        mcs.setAttribute('class', 'travel');
        cs.appendChild(mcs);

        let mhs = document.createElement('div');
        mhs.setAttribute('id', 'header-' + id );
        mhs.setAttribute('class', 'header');
        mcs.appendChild(mhs);

        let title = document.createElement('div');
        title.setAttribute('id', 'title-'  + id);
        title.setAttribute('class', 'title');
        mhs.appendChild(title);

        // let control = document.createElement('div');
        // control.setAttribute('id', 'control-'  + id);
        // title.setAttribute('class', 'control');
        // mhs.appendChild(control);
        //





        let buttons_cont = document.createElement('div');
        buttons_cont.setAttribute('id', 'control-' + id);
        buttons_cont.setAttribute('class', 'control');
        mhs.appendChild(buttons_cont);/* main*/

            // let close = document.createElement('span');
            // let x = document.createTextNode('✕');
            // close.setAttribute('id', 'close-'  + id);
            // close.setAttribute('class', 'close');
            // close.appendChild(x);
            // buttons_cont.appendChild(close);

        let mbs = document.createElement('div');
        mbs.setAttribute('id', 'content-' + id);
        mbs.setAttribute('class', 'content');
        mcs.appendChild(mbs);

        // let bes = document.createElement('div');
        // bes.setAttribute( 'id', 'bes-' + id);
        // bes.setAttribute('class', 'bes');
        // mbs.appendChild(bes);

        let im = document.createElement('img');
        im.setAttribute('id', 'imga');
        im.setAttribute('class', 'image-model');
        mbs.appendChild(im);






        let mfs = document.createElement('div');
        mfs.setAttribute('id', 'mfooter-' + id );
        mfs.setAttribute('class', 'mfooter');
        mcs.appendChild(mfs);
        let mfc = document.createElement('div');
        mfc.setAttribute('id', 'aifooter-' + id );
        mfc.setAttribute('class', 'aifooter ');
        mfs.appendChild(mfc);
        let t = document.createElement('span');
        t.setAttribute('id', 'infor-' + id);
        t.setAttribute('class', 'infor');
        mfc.appendChild(t);
        let b = document.createElement('div');
        b.setAttribute('id', 'contener-button-' + id);
        b.setAttribute('class', 'container-button');
        mfc.appendChild(b);



    }







    createButtonX() {
        window.saane_wheel = false;
        let header_button_close = document.getElementById('header-' + this.id);

        let x = document.createTextNode('✕');
        let hspan = document.createElement('span');
        hspan.setAttribute('id', 'close-' + this.id );
        hspan.setAttribute('class', 'close');
        hspan.appendChild(x);
        header_button_close.appendChild(hspan);
    }


}
