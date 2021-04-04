
compositartInitTranslaterViewer();

    function compositartInitTranslaterViewer() {

        window.addEventListener('load', function (){

            // let anchors = document.querySelectorAll(".__t");
            const anchors = document.querySelectorAll('[data-t]');
            // console.log('anchors_________________________________________', anchors);
            // console.log('anchors_________________________________________0', anchors[0]);
            // console.log('anchors_________________________________________0t', anchors[0].dataset.t);



            let el = document.createElement('div');
            el.setAttribute('id', 'tra');
            document.body.appendChild(el);


            el.style.width = '100%';
            // el.style.height = '100%';
            el.style.background = '#fbfded';
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.zIndex = '4444';
            el.style.padding = '23px';


            let main = document.createElement('div');
            var nwko = document.createTextNode('[');
            var nwkz = document.createTextNode(']');


            main.appendChild(nwko);

            let n = 0;
            let no = [];
            let nz = [];
            let br = [];
            let en = [];
            let pl = [];
            let br0 = document.createElement('br');
            main.appendChild(br0);

            // not last przecinek
            const n_max = anchors.length;

            for(let record of anchors ) {






                n++;

                // let rec = record.textContent
                let rec = record.innerHTML;
                // rec =  rec.replaceAll('\n', '<br>').trim();
                rec = rec.replace(/\s\s+/g, ' ');

                console.log('rec', rec)

                no[n] = document.createTextNode('\u00A0\u00A0\u00A0{');
                br[(n + 'a')] = document.createElement('br');
                br[(n + 'b')] = document.createElement('br');
                br[(n + 'c')] = document.createElement('br');
                    // console.log('elemetn', (n + 'a'))
                en[n] = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"en":"'+ rec +'",' );
                pl[n] = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"pl": "'  + '___"' );
                nz[n] = document.createTextNode('\u00A0\u00A0\u00A0},');
                // ostatni przecinek
                if (n < n_max){
                    nz[n] = document.createTextNode('\u00A0\u00A0\u00A0},');
                }else{
                    nz[n] = document.createTextNode('\u00A0\u00A0\u00A0}');
                }


                // console.log('nz n', nz + n  )
                    main.appendChild(no[n]);
                    main.appendChild(br[(n + 'a')]);
                        main.appendChild(en[n]);
                        main.appendChild(br[(n + 'b')]);
                        main.appendChild(pl[n])
                        main.appendChild(br[(n + 'c')]);
                main.appendChild(nz[n]);
                 // not last przecinek
                 // if (n < n_max) { main.appendChild(nz[n]); }else { main.appendChild(nz_not_p); }

                br[n] = document.createElement('br');
                main.appendChild(br[n]);
            }

            main.appendChild(nwkz);
            let bre1 = document.createElement('br');
            let bre2 = document.createElement('br');
            let bre3 = document.createElement('br');
            let bre4 = document.createElement('br');
            let bre5 = document.createElement('br');
            let bre6 = document.createElement('br');
            let bre7 = document.createElement('br');
            let space = document.createTextNode('END');
            main.appendChild(bre1);
            main.appendChild(bre2);
            main.appendChild(bre3);
            main.appendChild(space);
            main.appendChild(bre4);
            main.appendChild(bre5);
            main.appendChild(bre6);
            main.appendChild(bre7);
            el.appendChild(main);




            // get the reference for the body
            var body = document.getElementsByTagName("body")[0];

            // creates a <table> element and a <tbody> element
            var tbl = document.createElement("table");
            var tblBody = document.createElement("tbody");

















        })





    }

