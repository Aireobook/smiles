
function draw(){
    let valueX = 0;
    let valueY = 0;
    const number = 17;
    const timer = 917;
    let dx = 0;
    let dy = 0;
    let dxl = 0;
    let dyl = 0;

    let gX = 0;
    let gY = 0;

    let licznikLeftVal = document.getElementById('licznik-left-val');
    let licznikRightVal = document.getElementById('licznik-right-val');

    let indicatorLeft = document.getElementById('indicator-left');
    let indicatorRight = document.getElementById('indicator-right');
    viewTable();

    licznikLeftVal.innerHTML = "0"; // harmless in this case
    licznikRightVal.innerHTML = "0"; // harmless in this case

    function getRandomMonet() {
        // let mr = Math.random();
        // console.log('mor', mr);
        // if (mr < .5){  return 0; }
        // if (mr >= .5){  return 1; }
      return Math.random()<0.5?0:1

    }

    function getRandomX() {
        return  Math.random() * 500;
    }
    function getRandomY() {
        return  Math.random() * 400;
    }



   let start = document.getElementById('start');
   let stop = document.getElementById('stop');
   let pause = document.getElementById('pause');
   let reset = document.getElementById('reset');
   // let clear = document.getElementById('clear');

   start.addEventListener('click', aiInit);
   // stop.addEventListener('click', aiStop );
   reset.addEventListener('click', aiReset );

   pause.addEventListener('click', function (){
       alert('Pause');
   });





    function aiClear(){
        var c = document.getElementById("riCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 900, 800);


        var canvas = document.getElementById("leCanvas");
        var ctx2 = canvas.getContext("2d");
        ctx2.clearRect(0, 0, 1500, 1400);

        valueX = 0;
        valueY = 0;
        licznikLeftVal.innerHTML = "0"; // harmless in this case
        licznikRightVal.innerHTML = "0"; // harmless in this case
         dx = 0;
         dy = 0;
         dxl = 0;
         dyl = 0;

        gX = 0;
        gY = 0;

        indicatorLeft.style.width = "0";
        indicatorRight.style.width = "0";

    }



    function clearInit(){
        var cr = document.getElementById("red");
        var ctxr = cr.getContext("2d");
        ctxr.clearRect(0, 0, 900, 800);

        var cy = document.getElementById("yellow");
        var ctxy = cy.getContext("2d");
        ctxy.clearRect(0, 0, 900, 800);

        var cg = document.getElementById("green");
        var ctxf = cg.getContext("2d");
        ctxf.clearRect(0, 0, 900, 800);
    }


    // function counting(){
    //
    //     for (let x = 0; x < 3; x++) {
    //         setTimeout(function(y) {
    //
    //         }, x * timer, x);
    //     }
    // }






    function aiStart(){

      let self = this;

        // aiInit();
       radius = 30;
       for (let i = 0; i < number; i++) {
            setTimeout(function() {
                runRadnom();
                if (i === number -1){

                        endProcess();
                }




            }, i * timer, i);




        }
    }


    function aiStop(){
        alert('stop');
    }



    function aiInit(){
        let timese = 2000;

        aiClear();
        for (let x = 1; x < 5; x++) {
            setTimeout(function(y) {
              // window['init' + x]();
            eval('init'+x+"()");

            }, x * timese, x);
        }



    }


    function init1(){
        var c = document.getElementById("red");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(30, 30, 30, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.fillStyle = "red";
        ctx.fill();
    }

    function init2(){
        var c = document.getElementById("yellow");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(30, 30, 30, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.fillStyle = "yellow";
        ctx.fill();
    }

    function init3(){
        var c = document.getElementById("green");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(30, 30, 30, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.fillStyle = "green";
        ctx.fill();

    }


    function init4(){
        aiStart();
    }



    function runRadnom(){

        if(getRandomMonet()){
            valueX++;




            let x = getRandomX();
            let y = getRandomY();
            left(x, y, radius);
        }else{
            valueY++;
            let x = getRandomX();
            let y = getRandomY();
            right(x, y, radius);
        }

        licznikLeftVal.innerHTML = `${valueX}`;
        licznikRightVal.innerHTML = `${valueY}`;

        indicator(valueX, valueY);



    }


    function indicator(x, y){
        // let indicatorLeft = document.getElementById('indicator-left');
        // let indicatorRight = document.getElementById('indicator-right');
          console.log('-------------------')
         console.log('x_',x);
         console.log('y_',y);



        let result = parseInt((x - y), 10);
        console.log('result', result)

        if (result === 0){
            dxl = 0;
            dyl = 0;
        }

        if (result>0){

            dx = result;
            dxl = Math.log(dx + 1) * 10;
            console.log('dxl', dxl);
        }

        if (result<0){

            dy = - result;
            dyl = Math.log(dy + 1) * 10;
            console.log('dyl', dyl);
        }




        indicatorLeft.style.width = `${dxl}%`;
        indicatorRight.style.width = `${dyl}%`;


        gX = x;
        gY = y;
        // console.dir(indicatorLeft);

    }





    function left(x, y, radius){

        // let x = 40;
        // let y = 140;
        // let radius = 40;

        x += 50;
        y += 50;

        var canvas = document.getElementById("leCanvas");
        var ctx2 = canvas.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(x, y, radius, 0, Math.PI * 2);
        ctx2.stroke();
        ctx2.fillStyle = "#007e8a75";
        ctx2.fill();
    }



    function right(x, y, radius){
        x += 50;
        y += 50;

        var c = document.getElementById("riCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.fillStyle = "#8a790075";
        ctx.fill();


    }


    function viewTable(){
        let td_green = document.getElementById('td_green');
        let td_yellow = document.getElementById('td_yellow');

        td_green.innerText = getVictoryX();
        td_yellow.innerText = getVictoryY();


    }



    // addVictoryX();
   console.log('vx',localStorage.getItem("vx"))
   console.log('vy',localStorage.getItem("vy"))


    function endProcess(){
        clearInit();
        console.log('gX__', gX);
        console.log('gY__', gY);

        if (gX > gY){
            addVictoryX();
        }
        else if(gX < gY){
            addVictoryY();
        }

        viewTable();


    }


    function addVictoryX(){
        localStorage["vx"] = (parseInt(localStorage["vx"]) || 0) + 1;
    }

    function getVictoryX(){
        return localStorage.getItem('vx');
    }

    function getVictoryY(){
        return localStorage.getItem('vy');
    }

    function addVictoryY(){
        localStorage["vy"] = (parseInt(localStorage["vy"]) || 0) + 1;
    }


    function aiReset(){
        // localStorage.removeItem('vx');
        // localStorage.removeItem('vy');

        localStorage.setItem('vx' , "0");
        localStorage.setItem('vy' , "0");

        viewTable();
    }


    console.log('vx',localStorage.getItem("vx"))
    console.log('vy',localStorage.getItem("vy"))

}
