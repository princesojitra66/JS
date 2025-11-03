const myColor = ["Red", "Green", "White", "Black"];
const outputDiv = document.getElementById("output");

// Red,Green,White,Black
outputDiv.innerHTML += `<p>${myColor.join(',')}</p>`;

// Red+Green+White+Black
outputDiv.innerHTML += `<p>${myColor.join('+')}</p>`;

// Red,Green,White
outputDiv.innerHTML += `<p>${myColor.slice(0, 3).join(',')}</p>`;

// Red
outputDiv.innerHTML += `<p>${myColor[0]}</p>`;

// Green,White
outputDiv.innerHTML += `<p>${myColor.slice(1, 3).join(',')}</p>`;

// Red,Green,White,Black,orange
const extendedColor = [...myColor, "orange"];
outputDiv.innerHTML += `<p>${extendedColor.join(',')}</p>`;