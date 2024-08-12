
const configButton = document.querySelector("#configButton");
const container = document.querySelector("#container");


function changeSize(size) {
    container.remove();
}



configButton.addEventListener("click", () => {
    let input = prompt("Enter the size of one side: ");
    changeSize(input);
});



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


