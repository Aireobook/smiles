class YtModal extends CmModal {


    constructor(button_class, id= 'yt', modal_type = 'yt2') {
        super(button_class, id, modal_type);
    }


    aimodalHtml(id){
        let cms = document.createElement('div');
        cms.setAttribute('id', 'box-' + id );
        cms.setAttribute('class', 'yt box' );
        document.body.appendChild(cms, document.body.firstChild);

        let cs = document.createElement('div');
        cs.setAttribute('id', 'wrapper-' + id );
        cs.setAttribute('class', 'wrapper');
        cms.appendChild(cs);

        let mcs = document.createElement('div');
        mcs.setAttribute('id', 'travel-' + id );
        mcs.setAttribute('class', 'travel');
        cs.appendChild(mcs);

        let mhs = document.createElement('div');
        mhs.setAttribute('id', 'header-' + id );
        mhs.setAttribute('class', 'header');
        mcs.appendChild(mhs);

        let title = document.createElement('div');
        title.setAttribute('id', 'title-'  + id);
        title.setAttribute('class', 'title');
        mhs.appendChild(title);

        let buttons_cont = document.createElement('div');
        buttons_cont.setAttribute('id', 'control-' + id);
        buttons_cont.setAttribute('class', 'control');
        mhs.appendChild(buttons_cont);/* main*/
        let mbs = document.createElement('div');
        mbs.setAttribute('id', 'content-' + id);
        mbs.setAttribute('class', 'content');
        mcs.appendChild(mbs);

        let player = document.createElement('div');
        player.setAttribute('id', 'player');  /* ! player dla youtube*/
        player.setAttribute('class', 'player');
        mbs.appendChild(player);

        let mfs = document.createElement('div');
        mfs.setAttribute('id', 'mfooter-' + id );
        mfs.setAttribute('class', 'mfooter');
        mcs.appendChild(mfs);
        let mfc = document.createElement('div');
        mfc.setAttribute('id', 'aifooter');
        mfc.setAttribute('class', 'aifooter ');
        mfs.appendChild(mfc);
        let t = document.createElement('span');
        t.setAttribute('id', 'infor');
        t.setAttribute('class', 'infor');
        mfc.appendChild(t);
        let b = document.createElement('div');
        b.setAttribute('id', 'contener-button');
        b.setAttribute('class', 'container-button');
        mfc.appendChild(b);
    }


    advertisement(){
        // let h = document.getElementById("header-" + this.id ).innerHTML += 'alamakota';



    }


    onclickESC() {

        console.log('player1', player);
        let self = this;

        // KEY PRESS
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            let yt_modal = document.getElementById("box-" + self.id );
            if (yt_modal.classList.contains("active")){


                if (event.key === "Escape"){

                    self.removeFilterBlur();
                    player.stopVideo();
                    self.modal_id.style.display = "none";
                    self.modal_id.classList.add('unactive');
                    self.modal_id.classList.remove('active');

                    let body = document.querySelector("body");
                    body.style.overflow = 'inherit';
                }

            }
        })

    }


    closeX() {

        // this.createButtonM();
        // this.closeButtonM();
        this.createButtonX();

        let self = this;
        let closes = document.getElementById("close-" + this.id );
        if (closes !== null) {
            closes.onclick = function () {
                self.removeFilterBlur();
                player.stopVideo();
                self.modal_id.style.display = "none";
                self.modal_id.classList.add('unactive');
                self.modal_id.classList.remove('active');

                let body = document.querySelector("body");
                body.style.overflow = 'inherit';
            };
        }



        let minimize = document.getElementById("minimize-" );
        let content = document.getElementById("content-" );
        if (minimize !== null) {
            minimize.onclick = function () {
                // content.style.width = "300px";
                // content.style.height = "auto";
                player.stopVideo();


                console.log('namefilm', self.old_video_id);

                window.w = window.open(
                    // 'http://localhost:63342/airebook/minima.html?v=' + self.old_video_id  ,
                    'https://www.youtube.com/airebook/minima.html?v=' + self.old_video_id  ,
                    'winname',
                    'directories=no,status=no, titlebar=no,toolbar=no,location=yes,status=no,menubar=no,scrollbars=no,resizable=,width=420,height=340'
                );
                window.w.focus();
                irun();
            };
        }


        function irun(){
            var myVar = setInterval(myTimer, 1000);

            function myTimer() {
                if (! window.w.closed) {
                    window.w.focus ();
                }
            }

            function myStopFunction() {
                clearInterval(myVar);
            }

            window.addEventListener('beforeunload', function(e) {
                closeOpenedWindow();
            }, false);



            function closeOpenedWindow() {
                window.w.close();
            }
        }

        // }




    }





    closeE() {
        let self = this;
        self.modal_id.onclick = function (event) {
            if (event.target === self.modal_id) {
                self.removeFilterBlur();
                player.pauseVideo();
                self.modal_id.style.display = "none";
                self.modal_id.classList.add('unactive');
                self.modal_id.classList.remove('active');

                let body = document.querySelector("body");
                body.style.overflow = 'inherit';
            }
        }
    }


    content(e) {
        let that = this;

        let video;
        if (window.innerWidth <= e.dataset.width) {
            e.dataset.height = window.innerWidth / e.dataset.width * e.dataset.height;
            e.dataset.width = window.innerWidth;
        }
        let id_cmodal = document.getElementById('content-' + this.id );
        id_cmodal.style.width = (e.dataset.width || 460) + 'px';
        id_cmodal.style.height = (e.dataset.height || 320) + 'px';
        video = e.dataset.videocode;
        let youtubeScriptId = 'youtube-api';
        let youtubeScript = document.getElementById(youtubeScriptId);
        if (youtubeScript === null) {
            let tag = document.createElement('script');
            let firstScript = document.getElementsByTagName('script')[0];
            tag.src = 'https://www.youtube.com/iframe_api';
            tag.id = youtubeScriptId;
            firstScript.parentNode.insertBefore(tag, firstScript);
        } else {
            if (this.old_video_id !== video) {
                window.player.loadVideoById({'videoId': video});
            }
            window.player.playVideo();
        }
        let video_ai = video;
        console.log('window.player______________', window.player);




        // window.player.removeEventListener(event:String, listener:String):Void
        this.old_video_id = video;
        window.onYouTubeIframeAPIReady = function () {
            window.player = new window.YT.Player('player', {
                height: '100%',
                width: '100%',
                videoId: video,
                events: {'onReady': onPlayerReady}
            });
        };

        function onPlayerReady(event) {
            event.target.playVideo();
        }
    }
}
