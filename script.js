const container = document.querySelector("#container"); 
const button = document.querySelector("#resizeBtn");

function createGrid(size) {
    // Clear any existing squares
    container.innerHTML = "";

    // Set container dimensions (optional, fixed size)
    container.style.width = "960px";
    container.style.height = "960px";

    // Loop to create size x size squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Set the width/height dynamically so they fit evenly
        square.style.width = `${960 / size}px`;
        square.style.height = `${960 / size}px`;

        // Add hover effect
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

createGrid(16);

// Button click event
button.addEventListener("click", () => {
    let userSize = prompt("Enter number of squares per side (max 100)");

    // Convert to number
    userSize = Number(userSize);

    // Validate input
    if (userSize < 1 || userSize > 100 || isNaN(userSize)) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    // Create the new grid
    createGrid(userSize);
});