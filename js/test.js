
window.addEventListener("load", init2, false);


/**
 *  class open otwiera menu
 *  class active zazanacza aktywne
 */
function init2(){



    let sidebar = document.getElementById('sidebar-content');
    sidebar.style.visibility = "visible";


    let anchors = document.querySelectorAll(".anchor");


    for(let anchor of anchors ){
        console.log('anchor', anchor);

        // let arrown = anchor;

        let sub = anchor.querySelector('.sub');

        sub.style.display = 'block';
        let height4 = sub.offsetHeight;
        sub.style.height = "0px";
        sub.style.display = 'none';
        sub.style.height = "0px";
        sub.style.visibility = "visible";
        sub.style.display = 'block';

        if (anchor.classList.contains('open')){
            console.log('anchor2', anchor);
            anchor.classList.add('activen');
            sub.style.height = height4 + "px";
        }

        anchor.onclick = function () {
                if (this.classList.contains('activen')){
                    this.classList.remove('activen');
                    sub.style.height = "0px";
                }else {
                    this.classList.add('activen');
                    sub.style.height = height4 + "px";
                }
        }
    }



}
