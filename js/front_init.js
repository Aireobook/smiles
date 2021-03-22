window.addEventListener("load", init, false);
function init(){

    // aimodal_html();

    let yt = new YtModal('bmodal70');
    // yt.aimodalHtml();
    yt.closeX();
    yt.closeE();
    yt.onclickESC();
    yt.setFilterBlur('aiwrapper');
    yt.imagerButtonSize(120);
    yt.advertisement();
    yt.inButtonClick();

    let yt_big = new YtModal('bmodal_big');
    // yt_big.closeX();
    yt_big.closeE();
    yt_big.setFilterBlur('aiwrapper');
    yt_big.imagerButtonSize(0);
    yt_big.inButtonClick();

    let yt_world = new YtModal('world');
    // yt_big.closeX();
    yt_world.closeE();
    yt_world.setFilterBlur('aiwrapper');
    yt_world.imagerButtonSize(0);
    yt_world.inButtonClick();


    let image = new ImageModal('imager', 'image');
    image.closeX();
    image.onclickESC();
    // image.inButtonActive();
    image.inButtonClick();


}



    // let menu_toggle = document.getElementById('menu-toggle');
    // let aiwrapper = document.getElementById('aiwrapper');
    //
    // menu_toggle.onclick = function (e){
    //     e.preventDefault();
    //
    //     aiwrapper.classList.toggle('active');
    //
    // }




//
// let image = new ImageModal('aimg', 'imag', 'imag');
// image.content();
// image.inButtonClick();