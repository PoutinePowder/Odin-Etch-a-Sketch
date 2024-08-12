
const configButton = document.querySelector("#configButton");
const container = document.querySelector("#container");


configButton.addEventListener("click", () => {
    let input = prompt("Enter the size of one side: ");
    changeSize(input);
});


function changeSize(size) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${size})`;
    square.style.height = `calc(100% / ${size})`;
    container.appendChild(square);
  }

  const squares = document.querySelectorAll(".square");

  
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("activated");
    })
  })
}

  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }

  const squares = document.querySelectorAll(".square");

  
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("activated");
    })
  })

