/**
 *  Mailn class
 */
class CmModal {
    constructor(button_class, id = 'cm', modal_type = 'standard') {

        document.body.classList.add('aimodal');
        document.body.classList.add(modal_type);
        if (! document.getElementById("box-" + id)) {
            this.aimodalHtml(id)
        }

        this.id = id;
        this.button_class = button_class;
        // this.modal_id = button_class + 'cc';
        // this.modal_name = document.querySelector('.box' );
        this.close_id = false;
        this.modal_id = document.querySelector('#box-' + id );
    }

    aimodalHtml(id){
        let cms = document.createElement('div');
        cms.setAttribute('id', 'box-' + id );
        cms.setAttribute('class', 'cm box' );
        document.body.insertBefore(cms, document.body.firstChild);

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

        let buttons_cont = document.createElement('div');
        buttons_cont.setAttribute('id', 'control-' + id);
        buttons_cont.setAttribute('class', 'control');
        mhs.appendChild(buttons_cont);/* main*/
        let mbs = document.createElement('div');
        mbs.setAttribute('id', 'content-' + id);
        mbs.setAttribute('class', 'content');
        mcs.appendChild(mbs);



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


    setFilterBlur(id, blur_value = 4){
        this.blur = document.getElementById(id);
    }

    doFilterBlur(id, blur_value = 4){
        if (this.blur){
            this.blur.style.filter = 'blur(' + blur_value + 'px)';
        }

    }
    removeFilterBlur(){
        if (this.blur){
            this.blur.style.filter = 'none'
        }

    }

    /** @param buttons_class */
    inButtonClick(buttons_class = this.button_class) {

        let buttons = document.querySelectorAll('.' + this.button_class);
        let self = this;
        for (let button of buttons) {

            button.onclick = function (e) {
                self.doFilterBlur();
                self.buttonse(button);
                let body = document.querySelector("body");
                body.style.overflow = 'hidden';
            };
        }
    }

    /**
     *  @param button
     *  */
    buttonse(button) {
        this.header(button);
        this.content(button);
        this.footer(button);
        this.modal_id.style.display = "block";
        this.modal_id.classList.add('active');
        this.modal_id.classList.remove('unactive');
    }

    closeId(id = false) {
        let self = this;
        this.close_id = id;
        let closes = document.getElementById(id);
        if (closes !== undefined) {
            closes.onclick = function () {

                modal_name.style.display = "none";
                let body = document.querySelector("body");
                body.style.overflow = 'inherit';
            };
        }
    }

    createButtonX() {
        let header_button_close = document.getElementById('control-' + this.id);
        // console.log('header close', header_button_close);
        // let x = document.createTextNode('×');
        let x = document.createTextNode('✕');
        let hspan = document.createElement('span');
        hspan.setAttribute('id', 'close-' + this.id );
        hspan.setAttribute('class', 'close');
        hspan.appendChild(x);
        header_button_close.appendChild(hspan);
    }


    closeX() {
        this.createButtonX();/* if (this.close_id !== false) return;*/
        let self = this;
        let closes = document.getElementById("close-" + this.id );
        if (closes !== undefined) {
            closes.onclick = function () {

                self.removeFilterBlur();
                self.modal_id.style.display = "none";
                let body = document.querySelector("body");
                body.style.overflow = 'inherit';
            };
        }
    }


    closeE() {

        if (this.close_id !== false) return;
        let self = this;
        self.modal_id.onclick = function (event) {

            if (event.target === self.modal_id) {
                self.removeFilterBlur();
                self.modal_id.style.display = "none";
                let body = document.querySelector("body");
                body.style.overflow = 'inherit';
            }
        }
    }



    onclickESC(){
        let self = this;

        // KEY PRESS
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }

            if (event.key === "Escape"){
                self.removeFilterBlur();
                self.modal_id.style.display = "none";
                let body = document.querySelector("body");
                body.style.overflow = 'inherit';
            }




        })

    }






   clickEsc(){
        console.log('clickEsc CmModal');
        alert('to jest esc CmModal');
    }


    onclickKEY(key){
        let self = this;

        // KEY PRESS
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }

            // alert('kliknięto dowolny klawisz');

            switch (event.key) {
                case "Down": // IE/Edge specific value
                case "ArrowDown":
                    // Do something for "down arrow" key press.


                    break;
                case "Up": // IE/Edge specific value
                case "ArrowUp":
                    // Do something for "up arrow" key press.
                    break;
                case "Left": // IE/Edge specific value
                case "ArrowLeft":
                    // Do something for "left arrow" key press.
                    break;
                case "Right": // IE/Edge specific value
                case "ArrowRight":
                    // Do something for "right arrow" key press.
                    break;
                case "Enter":
                    // Do something for "enter" or "return" key press.
                    break;
                case "Esc": // IE/Edge specific value
                case "Escape":
                     if (key === 'esc'){
                        self.clickEsc();
                     }

                    // Do something for "esc" key press.
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }, true);


    }





    header(button) {
        if (button === false) {
            document.getElementById('header-' + this.id ).style.display = 'none';
            return false;
        }
        if (button.dataset.title) {
            document.getElementById('title-' + this.id ).innerHTML = button.dataset.title;

        }else{
            document.getElementById('title-' + this.id ).innerHTML = '<div class="adver"> Wodpress plugin available on the link:  &nbsp;<a class="link-js" href="http://google.pl">AIREOBOOK</a> </div>';
        }
    };

    // content(button) {
    //     if (button === false) {
    //         document.getElementById('content-' + this.id ).style.display = 'none';
    //         return false;
    //     }
    //     let id_doc = button.dataset.content;
    //     let fn = button.dataset.fn;
    //     if (id_doc !== undefined) {
    //         let ala = document.getElementById('content-' + this.id );
    //         ala.innerHTML = document.getElementById(id_doc).innerHTML;
    //     }
    //     if (window[fn] && typeof window[fn] === 'function') {
    //         window[fn](button);
    //     }
    // };

    footer(button) {
        if (button === false) {
            document.getElementById('mfooter-' + this.id ).style.display = 'none';
            return false;
        }
        let id_doc = button.dataset.footer;
        if (id_doc !== undefined) {
            document.getElementById('mfooter-' + this.id ).innerHTML = document.getElementById(id_doc) ? document.getElementById(id_doc).innerHTML : '';
        }
    }

    // fullscreen() {
    //     let baza = document.getElementById('control' );
    //     let fc = document.createTextNode('⛶');
    //     let fcspan = document.createElement('span');
    //     fcspan.setAttribute('id', 'fullcreen' );
    //     fcspan.setAttribute('class', 'fullscreen');
    //     fcspan.appendChild(fc);
    //     baza.insertBefore(fcspan, baza.childNodes[0]);
    // }

    button_footer(button_id, button_name) {
        let baza = document.getElementById('footer' );
        let bf = document.createElement('button');
        bf.setAttribute('id', button_id);
        bf.setAttribute('class', 'button button' );
        bf.innerHTML = button_name;
        baza.appendChild(bf);
    }

    imagerButtonSize(size = 0, height_procent = 60) {
        let yt_buttons = document.querySelectorAll('.' + this.button_class);

        if (size !== 0){
            for (let yt_button of yt_buttons) {

                yt_button.style.width = size + 'px';
                yt_button.style.height = height_procent * size / 100 + 'px'
            }
        }

    }

    move(mydiv, mydivheader) {
        dragElement(document.getElementById(mydiv));
        var height = document.body.clientHeight;
        var width = document.body.clientWidth;
        let x;
        let y;

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + mydivheader)) {/* if present, the header is where you move the DIV from:*/
                document.getElementById(elmnt.id + mydivheader).onmousedown = dragMouseDown;
            } else {/* otherwise, move the DIV from anywhere inside the DIV:*/
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                x = e.clientX < 0 ? 0 : (e.clientX > width) ? width : e.clientX;
                y = e.clientY < (0 + 30) ? 0 + 30 : (e.clientY > height - 30) ? height - 30 : e.clientY;
                pos3 = x;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                x = e.clientX < 0 ? 0 : (e.clientX > width) ? width : e.clientX;
                y = e.clientY < (0 + 30) ? 0 + 30 : (e.clientY > height - 60) ? height - 60 : e.clientY;
                pos1 = pos3 - x;
                pos2 = pos4 - y;
                pos3 = x;
                pos4 = y;
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {/* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }
}