let pixel;
let etchBoardContainer = document.querySelector('#etch_container');

for (let i = 1; i < 8000; i++){
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', (e) => fillPixel(e));

    etchBoardContainer.appendChild(pixel);
};

function fillPixel(e){
    e.target.classList.add('black_pixel');
}