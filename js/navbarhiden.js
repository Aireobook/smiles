



let prevScrollpos = window.pageYOffset;
console.log('prevScrollpos', prevScrollpos);

window.onscroll = function() {


    let currentScrollPos = window.pageYOffset;
    // console.log('currentScrollPos', currentScrollPos);

    if (prevScrollpos  > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}