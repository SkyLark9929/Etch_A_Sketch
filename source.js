let pixel;
let row;
let gridSide;
let etchBoardContainer = document.querySelector('#etch_container');
let changeSizeButton = document.querySelector('#change_size');
changeSizeButton.addEventListener('click', createGrid);

// Checks whether the mouse is currently down
let mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

// It seems like we have two ways of accomplishing stuff, either through flex-basis\
// or through container div for each row. For now we will gow with second option.

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

function fillPixel(e){
    if(mouseDown){
        e.target.classList.add('black_pixel');
    };
}

function removeGrid(){

};