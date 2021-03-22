
function unescapeHTML(escapedHTML) {
    return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}


(function rep(){
    let element = document.querySelector('code');
    element.innerHTML = element.innerHTML.replaceAll("\&", '&amp;');
    element.innerHTML = element.innerHTML.replaceAll("<", '&lt;');
    element.innerHTML = element.innerHTML.replaceAll(">", '&gt;');
    element.innerHTML = element.innerHTML.replaceAll("/", '&#47;');
    element.innerHTML = element.innerHTML.replaceAll("!", '&#33;');
    element.innerHTML = element.innerHTML.replaceAll("\"", '&quot;');

})();





