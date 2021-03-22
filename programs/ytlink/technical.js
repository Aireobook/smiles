
if (typeof create_technical !== "function"){

    function create_technical(){

        // alert('crate_technical2222');

        // console.log('self:', self);
        // let modal_id = 'setupcc';
        //
        //
        // let travel = document.getElementById('travel-' + modal_id);
        //
        // let ala = document.getElementById('player-' + modal_id);
        //
        // // console.log('ala', ala.childNodes.length);

        let ala = document.getElementById('container');





            let in_link = document.createElement('input');
            in_link.setAttribute("type", "text");
            in_link.setAttribute("onfocus", "this.value=''");
            in_link.setAttribute("name", "buying_cost");
            in_link.setAttribute("size", "50");
            in_link.setAttribute("class", "a");
            in_link.setAttribute("id", "a");
            // in_link.setAttribute("placeholder", "https://youtu.be/2YgtAztroaQ");
            ala.appendChild(in_link);
            ala.appendChild(document.createElement("br"));
            let s = document.createElement("small");
            ala.appendChild(s);
            var t = document.createTextNode("Example: https://youtu.be/2YgtAztroaQ");
            s.appendChild(t);

            ala.appendChild(document.createElement("br"));
            ala.appendChild(document.createElement("br"));

            let image_result = document.createElement('input');
            image_result.setAttribute("type", "text");
            image_result.setAttribute("id", 'b');
            image_result.setAttribute("size", "50");
            ala.appendChild(image_result);

            ala.appendChild(document.createElement("br"));
            ala.appendChild(document.createElement("br"));
            let btn_create = document.createElement("button");
            btn_create.setAttribute("onclick", "tech_yt_image()");
            btn_create.innerHTML = "Create image link";
            ala.appendChild(btn_create);




            let btn_copy = document.createElement("button");
            btn_copy.setAttribute("onclick", "tech_yt_cliboard()");
            btn_copy.innerHTML = "Copy image link";
            ala.appendChild(btn_copy);



            ala.appendChild(document.createElement("br"));
            ala.appendChild(document.createElement("br"));
            ala.appendChild(document.createElement("br"));

            let imagea = document.createElement('img');
            imagea.setAttribute('id', 'imagea');
            imagea.setAttribute("width", "200");
            imagea.setAttribute('height', 'auto');

            imagea.setAttribute('src', "" );

            ala.appendChild(imagea);
            ala.appendChild(document.createElement("br"));
            ala.appendChild(document.createElement("br"));

            let image_name = document.createElement('input');
            image_name.setAttribute("type", "text");
            image_name.setAttribute("id", 'c');
            image_name.setAttribute("size", "50");
            ala.appendChild(image_name);

            ala.appendChild(document.createElement("br"));

            let btn_copy_image = document.createElement("button");
            btn_copy_image.setAttribute("onclick", "tech_image_cliboard()");
            btn_copy_image.innerHTML = "Copy image name";
            ala.appendChild(btn_copy_image);

            let tech_yt_info = document.createElement('div');
            tech_yt_info.setAttribute('id', 'tech-yt-info');
            travel.appendChild(tech_yt_info);

        }




}



function tech_yt_image() {
    // alert(55);
    let a = document.getElementById('a').value;

    let result = a.replace('https://youtu.be/','').trim();
    if (result.length > 5){
        let image_name = result + ".jpg";
        let imga = 'http://img.youtube.com/vi/' + result + '/hqdefault.jpg';


        document.getElementById('b').value = imga;
        tech_yt_preview(imga);

        document.getElementById('c').value = result;

    }else {
        document.getElementById('b').value = 'error';
    }

}




function tech_yt_cliboard() {
    let copyText = document.getElementById("b");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

}

function tech_image_cliboard() {
    let copyTexti = document.getElementById("c");
    copyTexti.select();
    copyTexti.setSelectionRange(0, 99999)
    document.execCommand("copy");

}




function tech_yt_preview(result){
        console.log('result:', result);
        let imagea = document.getElementById('imagea');
           imagea.src = result;
}
