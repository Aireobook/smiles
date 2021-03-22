
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.001;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;

    console.log('scale1', scale);
    console.log('scale2', `scale(${scale})`);

}

// let scale = 1;
// const el = document.querySelector('div');
// el.onwheel = zoom;