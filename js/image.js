


window.saane_wheel = false;

function resize_image(){



    let mouse_down = false;
    let mouse_down_parent = false;
    let x = 0;
    let y = 0;
    let px = 0;
    let py = 0;
    let top_a = 0;
    let scale = 1;
    let w2;
    let h2;
    let w;
    let h;

    let top_r = 0;
    let left_r = 0;
    let h_0;
    let h_1;
    let top_0;
    let top_1;
    let left_0;
    let w_0;


    let leeeft;
    let tooop;
    let image_width;

    let mX = 0;
    let mY = 0;
    let mouseXg;
    let mouseYg;

    let leftAbsolute;
    let topAbsolute;

    let imagee = document.getElementById("imga");
    let width_c = document.documentElement.clientWidth;
    let heigh_c = document.documentElement.clientHeight;



    // console.dir(document.documentElement);

    // console.log('height_e 1', heigh_c);

    let parent = document.getElementById("content-image");

    imagee.height = heigh_c - 100;
    let h_image = imagee.height;
    let przerwa = heigh_c - h_image;
    imagee.style.top = `${(przerwa - 100)/2}px`;

    imagee.ondragstart = function() {
        return false;
    };


    function help(e){
        let width_c = document.documentElement.clientWidth; // szerokość głównego zmianiana jedynie ramką
        let width_parent_c =  parent.clientWidth // szerokość parent zmianiana jedynie ramką
        let width_image_a  = imagee.clientWidth // akutalna szerokość image


        let x = e.screenX; // pozycja myszy X
        let y = e.screenY

    }


    // console.log('image widthhhhhhhhhhhhh', w_image);
    // console.log((window.getComputedStyle(imagee).width));



    imagee.style.left = "0px";



        // imagee.addEventListener("wheel", myWheel);
        parent.addEventListener("wheel", aiWheelParent);
        // imagee.addEventListener("mousedown", myMouseDown);
        parent.addEventListener("mousedown", aiMouseDownParent);
        // imagee.addEventListener("mousemove", myMouseMove);
        // imagee.addEventListener("mousemove", aiMouseMove);
        parent.addEventListener("mousemove", aiMouseMoveParent);
        // imagee.addEventListener("mouseup", myMouseUP);
        parent.addEventListener("mouseup", aiMouseUpParent);









           function aiWheelParent(e){
// console.dir(e);
               console.log('--------------------');
 // console.dir(document.documentElement.lastChild.clientWidth);


               if ( ! window.saane_wheel || w === undefined){
                   // console.dir(e);
                   w =  window.saane_wheel = imagee.clientWidth;
                   h =  imagee.clientHeight;
                   top_0 = imagee.style.top;
                   top_0 = parseInt(top_0, 10);
                   h_0 = imagee.clientHeight;
                   // console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::: 1 Wheel');

               }

               console.log('window.saane_wheel', window.saane_wheel);

                // console.log('w', w);
                // console.log('h', h);



               scale += e.deltaY * -0.002;
               scale = Math.min(Math.max(1, scale), 2);


                  imagee.width = w * scale  ||  400 ;
                  imagee.height = h * scale  || 440 ;



               h_1 = imagee.clientHeight;
               top_r = top_0 - ( h_1 - h_0)/2
               let hh = imagee.clientHeight;
               console.log('hh', hh);
               top_r = Math.min(Math.max(-hh * .1, top_r), hh * .1); // top bottom
               imagee.style.top = `${top_r}px`;


               if (scale === 1){
                   // alert(333);
                   imagee.style.top = "0px";
                   imagee.style.left = "0px";
               }



           }

        function aiMouseDownParent(e){
            e.preventDefault();
            mouse_down_parent = true;

            // console.log('aiMouseDownParent');
            imagee.style.cursor = "move";
        }

        function aiMouseMoveParent(e){
            // console.log('- - - - - - - - - - - - - - - - - - -');

            if (mouse_down_parent){

                imagee.style.cursor = "move";
                if ( ! window.saane_move){
                    // w =  window.saane_move = imagee.clientWidth;
                    // h =  imagee.clientHeight;
                    top_0 = imagee.style.top;
                    top_0 = parseInt(top_0, 10);

                    left_0 = imagee.style.left;
                    left_0 = parseInt(left_0, 10);

                    w_0 = imagee.clientWidth;
                    h_0 = imagee.clientHeight;

                    // console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::: 2 Move');


                }
               // console.dir(e);

                let ww = imagee.clientWidth
                let hh = imagee.clientHeight;
                // console.log('szerokość aktualna', imagee.clientWidth);

                let dmX = e.movementX * 4;
                let dmY = e.movementY * 4;


                left_r += dmX;
                top_r += dmY;






                left_r = Math.min(Math.max(-ww * .2, left_r), ww * .2);  // left right
                top_r = Math.min(Math.max(-hh * .6 + 100, top_r), hh * .05 + 20); // top bottom
                top_r = Math.min(Math.max(-1405, top_r), 235);

                imagee.style.left = left_r + 'px';
                imagee.style.top  = top_r  + 'px';







            }

        }


        function aiMouseUpParent(e){
            mouse_down_parent = false
            e.preventDefault();

            imagee.style.cursor = "auto";

            console.log('aiMouseUpParent');
        }












}




