let pixel;
let etchBoardContainer = document.querySelector('#etch_container');

// Checks whether the mouse is currently down
let mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

for (let i = 1; i < 10000; i++){
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', (e) => fillPixel(e));

    etchBoardContainer.appendChild(pixel);
};

function fillPixel(e){
    if(mouseDown){
        e.target.classList.add('black_pixel');
    };
}