// Cuadrado
console.log("Cuadrado");
// forma facil 
// for (i = 0; i < 7; i++){
//     console.log(i, "*******")
// }

var square = (n, char) => { 
    var row = "";
  for (var i = 0; i < n; i++) {
    row += char;
  }
  for (var i = 0; i < n; i++) {
    console.log(row);
  }
}
square(5, "*");

// Cuadrado con Borde
console.log("Cuadrado con Borde");
var squareWithBorder = (n, charBorder, charInner) => {  
    var rowUpandDown = "";
    var row = "";
    for (var i = 0; i < n; i++) {
            rowUpandDown += charBorder;
        }
    
    console.log(rowUpandDown)
    for (var i = 0; i < n; i++) {
        if (i == 0 || i == (n-1)) {
            row += charBorder;
        } else {
            row += charInner;
        }
    }
    for (var i = 0; i < n-2; i++) { 
       if (i == 0 || i == (n-1)) {
            // row[i] += charBorder;
            charInner = charBorder;
        }   
        console.log(row);
    }
    console.log(rowUpandDown)
}

squareWithBorder(5, "B", "*");


//Cuadrado Diagonal Left-Right
console.log("Cuadrado Diagonal Left-Right");


var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => { 
    for (var row = 0; row < n; row++) {
        var line = "";
        for (let col = 0; col < n; col++) {
            if (col == row) {
                line += charDiagonal;
            } else if (col > row) {
                line += charUp;
            } else {
                line += charDown;
            }
        }
        console.log(line);
    }
}

squareDiagonalLR(5, "\\", "A", "B");

// Cuadrado Diagonal Right-Left
console.log("Cuadrado Diagonal Right-Left");

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
    for (var row = 0; row < n; row++) {
        var line = "";
        for (var col = 0; col < n; col++) {
            if (col == row) {
                line = charDiagonal + line;
            } else if (col > row) {
                line = charUp + line;
            } else {
                line = charDown + line;
            }
        }
        console.log(line);
    }
}

squareDiagonalRL(5, "/", "A", "B")

// Medio Diamante
console.log("Medio Diamante");

var halfDiamond = (n, char) => {
    var line = "";
    for(i = 0; i <= n; i++) {
        for (j = 0; j < i; j++) {
            line += char;
        }
        console.log(line)
        line = "";
    }
    for(i = n - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            line += char;
        }
        console.log(line)
        line = "";
    }
}
halfDiamond(7, "*")


// Pirámide
console.log("Pirámide");

function pyramid(n, char) {
    for(i = 1; i <= n; i++) {
        var file = "";
        for(j = 1; j <= n - i; j++) {
            file += " ";
            }
        for(k = 1; k <= 2 * i - 1; k++) {
            file += char;
        }
        console.log(file);
    }
  }

pyramid(5, "*");

// Diamante
console.log("Diamante");
function diamond(n, char) {
    for(i = 1; i <= n; i++) {
        var file = "";
        for(j = 1; j <= n - i; j++) {
            file += " ";
            }
        for(k = 1; k <= (2 * i) - 1; k++) {
            file += char;
            }
        console.log(file);
    }
    for(i = n-1; i >= 1; i--) {
        var file = "";
        for (j = n - i; j >= 1; j--) {
            file += " ";
        }
        for (k = 1; k <= (2 * i) - 1; k++) {
            file += char;
            }
        console.log(file);
    }
}

diamond(8, "*");