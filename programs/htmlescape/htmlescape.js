
function rep(){

    let element = document.querySelector('#inputString');
    

    element.value = element.value.replaceAll("\&", '&amp;');
    element.value = element.value.replaceAll("<", '&lt;');
    element.value = element.value.replaceAll(">", '&gt;');
    element.value = element.value.replaceAll("/", '&#47;');
    element.value = element.value.replaceAll("!", '&#33;');
    element.value = element.value.replaceAll("\"", '&quot;');

}


function eraseText(){
    let element2 = document.querySelector('#inputString');
    element2.value = '';
}


function copy_to_clipboard() {

    let copyText = document.getElementById("inputString");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

}

function reload(){
    window.location.reload(true);
}