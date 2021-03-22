


if (typeof aimodal_html === "undefined"){

    function aimodal_html() {

        let cms = document.createElement('div');
        cms.setAttribute('id', 'box');
        cms.setAttribute('class', 'box' );
        document.body.insertBefore(cms, document.body.firstChild);

        let cs = document.createElement('div');
        cs.setAttribute('id', 'wrapper');
        cs.setAttribute('class', 'wrapper');
        cms.appendChild(cs);

        let mcs = document.createElement('div');
        mcs.setAttribute('id', 'travel');
        mcs.setAttribute('class', 'travel');
        cs.appendChild(mcs);

        let mhs = document.createElement('div');
        mhs.setAttribute('id', 'header');
        mhs.setAttribute('class', 'header');
        mcs.appendChild(mhs);

        let title = document.createElement('div');
        title.setAttribute('id', 'title');
        title.setAttribute('class', 'title');
        mhs.appendChild(title);

        let buttons_cont = document.createElement('div');
        buttons_cont.setAttribute('id', 'control');
        buttons_cont.setAttribute('class', 'control');
        mhs.appendChild(buttons_cont);/* main*/
        let mbs = document.createElement('div');
        mbs.setAttribute('id', 'content');
        mbs.setAttribute('class', 'aimodal-content');
        mcs.appendChild(mbs);

        let player = document.createElement('div');
        player.setAttribute('id', 'player');  /* ! player dla youtube*/
        player.setAttribute('class', 'player');
        mbs.appendChild(player);
        let mfs = document.createElement('div');
        mfs.setAttribute('id', 'footer');
        mfs.setAttribute('class', 'footer');
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
}