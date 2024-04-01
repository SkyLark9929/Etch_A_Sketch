let pixel;
let row;
let gridSide;
let mouseDown;
let backgroundColor = '#FFFFFF';

let etchBoardContainer = document.querySelector('#etch_container');
etchBoardContainer.addEventListener('mousedown', setMouseDown); // Tells that the mouse is down
etchBoardContainer.addEventListener('mouseup', setMouseUp); // Tells that the mouse is up

let changeSizeSlider = document.querySelector('#change_size');
changeSizeSlider.addEventListener('input', createGrid);

let changeColorInput = document.querySelector('#brush_color');
let brushColor = changeColorInput.value;
changeColorInput.addEventListener('change', listenColorInput);

let btnEraseEverything = document.querySelector('#erase_everything');
btnEraseEverything.addEventListener('click', eraseEverything);

createGrid(); // creates initial grid with default slider value

// mouse up/down swithces
function setMouseDown(e){
  mouseDown = true;
};

function setMouseUp(e){
  mouseDown = false;
};

// TODO
// Eraser/pen selector with button text changing depending on whether it is eraser or pen.

// TODO
// Brush size

function createGrid(){
  // remove existing rows
  removeExistingRows();
  
  gridSide = changeSizeSlider.value;

  // generate rows
  for (let i = 1; i < gridSide; i++){
      row = document.createElement('div');
      row.classList.add('row');
      etchBoardContainer.appendChild(row);

      // generate pixels inside of rows
      for (let _ = 1; _ < gridSide; _++){
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', (e) => fillPixel(e));
        row.appendChild(pixel);
      };
  };
};

// || listen to the brush color input
function listenColorInput(e){
  brushColor = e.target.value;
};

// || fill the pixels
function fillPixel(e){
// Checks whether the mouse is currently down
  if(mouseDown){
  e.target.style.backgroundColor = brushColor;
  };
};

function eraseEverything(){
  pixels = document.querySelectorAll('.pixel');
  for (pixel of pixels){
    pixel.style.backgroundColor = backgroundColor;
  };
};

function removeExistingRows(){
  while(etchBoardContainer.firstChild){
    etchBoardContainer.removeChild(etchBoardContainer.firstChild);
  };
};