let pixel;
let row;
let gridSide;
let mouseDown = 0;

let etchBoardContainer = document.querySelector('#etch_container');

let changeSizeButton = document.querySelector('#change_size');
changeSizeButton.addEventListener('click', createGrid);

let changeColorInput = document.querySelector('#brush_color');
let brushColor = changeColorInput.value;
changeColorInput.addEventListener('change', listenColorInput);

// switches mousedown boolean
document.body.onmousedown = function() { 
  mouseDown == true;
}
document.body.onmouseup = function() {
  mouseDown == false;
}

// TODO
// Remove grid button

// TODO
// Change color button

// TODO
// Eraser button and pen button

// TODO
// Erase everything button

// TODO
// Brush size


// It seems like we have two ways of accomplishing stuff, either through flex-basis\
// or through container div for each row. For now we will gow with second option.

// FIXME
// Remove grid elements before adding new ones
function createGrid(){
  gridSide = prompt('Enter the number of pixels per sketch side. (No more than 100)');

  if (gridSide > 100){
    gridSide = 100;
    alert('Error: The number of pixels exceeds 100! Set to 100 instead.')
  };

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
}

// || fill the pixels
function fillPixel(e){
// Checks whether the mouse is currently down
  //if(mouseDown){
      e.target.style.backgroundColor = brushColor;
  //};
}
