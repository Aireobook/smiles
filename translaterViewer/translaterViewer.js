(function (){
    function compositartInitTranslaterViewer() {

        window.addEventListener('load', function (){

            let anchors = document.querySelectorAll(".__t");
            console.log('anchors_________________________________________', anchors);



            let el = document.createElement('div');
            el.setAttribute('id', 'tra');
            document.body.appendChild(el);


            el.style.width = '100%';
            // el.style.height = '100%';
            el.style.background = 'teal';
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

                let rec = record.textContent

                no[n] = document.createTextNode('\u00A0\u00A0\u00A0{');
                br[(n + 'a')] = document.createElement('br');
                br[(n + 'b')] = document.createElement('br');
                br[(n + 'c')] = document.createElement('br');
                    console.log('elemetn', (n + 'a'))
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




            // creating all cells
            for(let anchor of anchors ) {
                let ala = anchor.textContent;
                // creates a table row
                var row = document.createElement("tr");

                for (var j = 0; j < 2; j++) {
                    // Create a <td> element and a text node, make the text
                    // node the contents of the <td>, and put the <td> at
                    // the end of the table row
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode("cell in row "+ ala +", column "+ 'bbbbbbbbbbbbb');
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }

                // add the row to the end of the table body
                tblBody.appendChild(row);
            }

            // put the <tbody> in the <table>
            tbl.appendChild(tblBody);
            // appends <table> into <body>
            // el.appendChild(tbl);
            // sets the border attribute of tbl to 2;
            tbl.setAttribute("border", "2");








            // let table = document.createElement('table');
            //
            //
            // el.appendChild(table);
            //
            // for (let tr_ = 0; tr_ < 7; tr_++){
            //
            //     let tr = document.createElement('tr');
            //     table.appendChild(tr);
            //      if (tr_ === 0){
            //          let th1 = document.createElement('th');
            //          tr.appendChild(th1);
            //          var kol1 = document.createTextNode('bbbbbbbbbbbbb1');
            //          th1.appendChild(kol1)
            //
            //          let th2 = document.createElement('th');
            //          tr.appendChild(th2);
            //          var kol2 = document.createTextNode('bbbbbbbbbbbbb2');
            //          th2.appendChild(kol2);
            //
            //          let th3 = document.createElement('th');
            //          tr.appendChild(th3);
            //          var kol3 = document.createTextNode('bbbbbbbbbbbbb3');
            //          th3.appendChild(kol3)
            //
            //
            //      }else{
            //
            //
            //              let td1 = document.createElement('td');
            //              tr.appendChild(td1);
            //              var kol11 = document.createTextNode('cccccccccc1');
            //              td1.appendChild(kol11)
            //
            //
            //              let td2 = document.createElement('td');
            //              tr.appendChild(td2);
            //              var kol22 = document.createTextNode('cc2');
            //              td2.appendChild(kol22)
            //
            //
            //              let td3 = document.createElement('td');
            //              tr.appendChild(td3);
            //              var kol33 = document.createTextNode('cc3333');
            //              td3.appendChild(kol33)
            //
            //
            //
            //      }
            //
            //
            // }
















            //
            // let line = document.createElement('div');
            // line.setAttribute('id', 'linia');
            // line.innerText = ala;
            // el.appendChild(line);

            // var body = document.getElementsByTagName("body")[0];
            // var tbl = document.createElement("table");
            // var tblBody = document.createElement("tbody");
            //
            //
            //
            //     // creates a table row
            //     var row = document.createElement("tr");
            //
            //         for(let anchor of anchors ) {
            //             let ala = anchor.textContent;
            //
            //             for (var j = 0; j < 2; j++) {
            //                 // Create a <td> element and a text node, make the text
            //                 // node the contents of the <td>, and put the <td> at
            //                 // the end of the table row
            //                 var cell = document.createElement("td");
            //                 var cellText = document.createTextNode("cell in row "+ala+", column "+ ala);
            //                 cell.appendChild(cellText);
            //                 row.appendChild(cell);
            //             }
            //
            //         }
            //
            //     // add the row to the end of the table body
            //     tblBody.appendChild(row);
            //
            //
            //
            // tbl.appendChild(tblBody);
            // // appends <table> into <body>
            // el.appendChild(tbl);
            // // sets the border attribute of tbl to 2;
            // tbl.setAttribute("border", "2");


        })





    }

    window.compositartInitTranslaterViewer = compositartInitTranslaterViewer;
})()