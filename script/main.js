// select your elements first - what is the user going to interact with?
// there are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector("#navButton");

// this is a 1 to many connection to elements in the DOM
// the variable name is the "basket"
let theButtons = document.querySelectorAll('#buttonHolder img'),
	theHeading = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	dropZones = document.querySelectorAll('.drop-zone'),
	theNavEl = document.querySelector('a'),
	//store the dragged piece n a global vairable
	//because we need it in the handleDrop function
	draggedPiece;

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage() {	
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	draggedPiece = this;

	//store a reference to the puzzle piece image that we're dragging
	//so we can use it later and move it to a drop zone
}

function handleDragOver(e) { 
	e.preventDefault();
	console.log('dragged over me');
}

function handleDrop(e) {
	e.preventDefault();
	console.log('dropped something on me');

	//this lone is going to move the dragged piece from the left side of the board
	//into whatever drop zone we choose, appendChild means "add element to the container"
	this.appendChild(draggedPiece);
}

function blockDefault(e) {
	// bloc the default behavior of certain elements (a tags, forms, etc)
	e.preventDefault();

	console.log('do whatever we want instead')
}



// event handling at the bottom -> how things react when you use the targets
// how is the user going to interact with the elements / controls you provide?

// 1 to 1 event handling (1 variable, one element):
// navButton.addEventListener('click', changeBGImage);

// 1 to many event handling (1 variable, many elements):
// process a collection of elements and add an event handler to each
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// add the drag start handler to all of the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

// add the dragover handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

//add the drop event to the 
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop, blockDefault));

theNavEl.addEventListener('click', blockDefault);
