

class RightModal extends CmModal {
    constructor(button_class, modal_type = 'right') {
        super(button_class, modal_type, 'right');
    }

    content(button) {

        // console.log('button e:', button);
        // console.log('this modal id', this.modal_id);

        if (! button) {
            // document.getElementById('box-' ).style.visibility = 'hidden';
            return false;
        }

        // console.log('button', button);

        let id_doc = button.dataset.content;
        let fn = button.dataset.fn;

        console.log('fn',fn);

        if (id_doc !== undefined) {
            let ala = document.getElementById('content-' );
            ala.innerHTML = document.getElementById(id_doc).innerHTML;
        }
        if (window[fn] && typeof window[fn] === 'function') {
            // alert('jest');
            // create_technical();
             window[fn](this);
        }
    };
}





