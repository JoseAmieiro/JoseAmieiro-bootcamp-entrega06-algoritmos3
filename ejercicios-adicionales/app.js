                                // Ejercicios Esenciales de Repaso
        // Funciones básicas

// Implementa una función que muestre por consola “Hola Mundo”.
var hiWorld = () => {console.log("Hola Mundo")}
hiWorld();

// Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
var hiName = name => {console.log("Hola " + name)};
hiName("Pat");

// Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.
var upperCase = (str) => {
    console.log(str.toUpperCase());
}
upperCase("mariano");

// Implementa una función que dado un string como parámetro devuelva el string en minúsculas.
var lowerCase = (str) => {
    console.log(str.toLowerCase());
}
lowerCase("MOLA");

// Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.
var addition = (num1, num2) => {
    var suma = console.log(num1 + num2);
    return suma;
}
addition(14, 7)

// Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.

var concat = (str1, str2, str3) => {
    var allStrings = console.log(str1 + str2 + str3);
    return allStrings;
}
concat("Hola Mundo ", "Pat ", "mariano.")

// Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’
// inicializada a null.
function addId(obj) {
    obj.id = "postre";
}
var menu = {primerPlato: "sopa", segundoPlato: "pescado"}
addId(menu);
console.log(menu);

        // Funciones con if/else, switches y comprobaciones

// Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o
// null .

var checkParameter = (parameter) => {return (parameter === undefined  || parameter === null)}

console.log(checkParameter("jose"));

// Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.

var positiveOrnegativeNumber = (Number) => {
    if(Number > 0) {
        return "positive";
    } else if (Number < 0){
        return "negative";
    } else {
        return "neutro";
    }
}
console.log(positiveOrnegativeNumber(15));

// Implementa una función que admita un número como parámetro y diga, 
// por consola, si es mayor que 100, menor que 100 o exactamente 100.

var hundredNumber = (Number) => {
    if(Number > 100) {
        return "mayor que 100";
    } else if (Number < 100){
        return "menor que 100";
    } else {
        return "exactamente 100";
    }
}
console.log(hundredNumber(100.2));

// Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no.


var menuName = {primerPlato: "sopa", segundoPlato: "pescado", name: "menu del dia"}
var checkName = (obj) => {
    for(var prop in obj) {
        if (prop === "name") {
            return "El objeto tiene una propiedad llamada 'name'";
        }
    } return "El objeto NO tiene una propiedad llamada 'name'";
}
console.log(checkName(menu));
console.log(checkName(menuName));

// Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

// var divNumber = (num1, num2) => {
//     if((num1 % num2 ) == 0) {
//         console.log("El numero " + num1 + " es divisible entre " + num2);
//     } else {
//         console.log("El numero " + num1 + " ¡NO! es divisible entre " + num2);
//     }
// }

// divNumber(8, 3);

// CON TERNARIO

var divNumber = (num1, num2) => {((num1 % num2 ) == 0) ? console.log("El numero " + num1 + " es divisible entre " + num2) :
console.log("El numero " + num1 + " ¡NO! es divisible entre " + num2)}
   
divNumber(8, 3);


// Implementa una función que admita un string y un número como parámetro,
// y comprobar que tienen ese número de caracteres.

var lengthString = (str, num) => {(str.length == num) ? console.log("Tiene esos caracteres") : console.log("NO tiene esos caracteres")}
lengthString("Estamos aterrizando", 19);

// Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).

function dayOfWeek (numberDay) {
    var nameDay;
    switch (numberDay) {
        case 1:
            nameDay = "Lunes";
            break;
        case 2:
            nameDay = "Martes";
            break;
        case 3:
            nameDay = "Miércoles";
            break;
        case 4:
            nameDay = "Jueves";
            break;
        case 5:
            nameDay = "Viernes";
            break;
        case 6:
            nameDay = "Sábado";
            break;
        case 7:
            nameDay = "Domingo";
            break;

        default:
            nameDay = "Número de día inválido";
            break;
    }
    return nameDay;
}

console.log(dayOfWeek(6))


// Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.

var monthOfYear = (numberMonth) => {
    var nameMonth;
    switch (numberMonth) {
        case 1:
            nameMonth = "Enero";
            break;
        case 2:
            nameMonth = "Febrero";
            break;
        case 3:
            nameMonth = "Marzo";
            break;
        case 4:
            nameMonth = "Abril";
            break;
        case 5:
            nameMonth = "Mayo";
            break;
        case 6:
            nameMonth = "Junio";
            break;
        case 7:
            nameMonth = "Julio";
            break;
        case 8:
            nameMonth = "Agosto";
            break;
        case 9:
            nameMonth = "Septiembre";
            break;
        case 10:
            nameMonth = "Octubre";
            break;
        case 11:
            nameMonth = "Noviembre";
            break;
        case 12:
            nameMonth = "Diciembre";
            break;
        default: 
            nameMonth = "El numero introducido: " + numberMonth + " no es correcto.";
            break;
    }
    return nameMonth;
}
console.log(monthOfYear(10));


// Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.
var longerArray = (arr1, arr2) => {
    if(arr1.length > arr2.length) {
        console.log(arr1)
    } else {
        console.log(arr2)
    }
}
longerArray("muchasletras", "pocas");

// Implementa una función que admita 2 arrays como argumento, y 
// devuelva si el primer elemento de ambos arrays es
// igual o no.
var firstCharSame = (str1, str2) => {
    var firstCharacterStr1;
    var firstCharacterStr2;
    for(i = 0; i < str1.length; i++ ) {
        firstCharacterStr1 = str1[0];
    }
    for(i = 0; i < str2.length; i++ ) {
        firstCharacterStr2 = str2[0];
    }
    if(firstCharacterStr1 = firstCharacterStr2) {
        console.log("el primer caracter es igual");
    } else {
        console.log("el primer caracter NO es igual");
    }
}
firstCharSame("Hola", "huevo");

        // Funciones con arrays
// Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir,
// devuelva ‘undefined’ .

// FOR IN BUSQUEDA DE ALGO EN UN ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var nums = [1, 2, 3, 4];
var wholeArray = (arr) => {
    for (const key in arr) {
        if (arr.hasOwnProperty.call(arr, key)) {
            const key = arr[1];
            return key;
        } else {
            return undefined;
        }
    }
} 
console.log(wholeArray(nums));
// Implementa una función que admita un string como parámetro y devuelva la última letra.

function lastLetter(str) {
    for (var letter of str) {
        var letter = str[str.length - 1];
    }
    return letter;
}
var text = "Hola que dice el tio";
console.log(lastLetter(text));

// Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el
// resultado.

var changePosition = (array) => {
    var temp = array[0];
    var lastIndex = array.length - 1;
    array[0] = array[lastIndex];
    array[lastIndex] = temp;
}
var arrayPos = [1, 2, 3, 4, 5];
console.log(arrayPos)

        // Funciones con bucles

// Implementa una función que admita 2 parámetros, un número y un texto, 
// y que muestre por consola dicho texto tantas veces como indique el número.

var loopText = (numText, text) => {
    for (let i = 0; i < numText; i++) {
        var element = console.log(text);
    }
}
loopText(3, "hola muchacho");

// Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que
// tiene el objeto.

var numProp = (obj) => {
    var num = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          num++;
        }
      }
    return num;
}

const products = {
      description: "Goma de borrar",
      price: 0.25,
      tax: 0.1,
      stock: 2,
      units: 0,
    }

console.log(numProp(products));

// Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.

function printProp(obj) {
    for (var prop in obj) {
      console.log(prop + ": " + obj[prop]);
    }
  }
  var myObject = { 
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
  };
  
printProp(myObject);
  
// Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
// del array multiplicado por dicho número. Devuelve el resultado.

var summation = (arr, num) => {
    var result = 0;
    for (var elements of arr) {
        result += (Number(elements) * Number(num));
    }
    return result;
}


var myArray = [5, 3, -2, 7];

console.log(summation(myArray, -1));

// Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece
// dicho carácter en el string.

var repeatCharacter = (str, param) => {
    repeats = 0;
    for (var elements of str) {
        if(elements.toLowerCase() === param) {
            repeats++;
        }
    }
    return repeats;
}

console.log(repeatCharacter("¿Ahora cuantas aes tiene mi string?", "a"))

// Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada
// elemento por consola.

var allElements = (arr) => {
    for (elements of arr) {
        console.log(elements)
    }
}
allElements(myArray)
allElements(text)


// Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo
// muestre por consola.

var allElementsReverse = (arr) => {
    for(i = arr.length; i >= 0; i--) {
        console.log(arr[i])
    }
}
allElementsReverse(myArray)
allElementsReverse(text)

// Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos
// son menores a dicho número, y cuántos no.

var comparitiveNumber = (arr, num) => {
    var positive = 0;
    var negative = 0;
    for (element of arr) {
        if(element == Number(num)) {
            positive++;
        } else {
            negative++;
        }
    } 
    var end = console.log("tenemos " + positive + " que coinciden y " + negative + " que no.");
    return end
}
comparitiveNumber(myArray, 3)

// Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el
// segundo.

function elementsInArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        return true;
      }
    }
    return false;
  }
  
  array3 = [1, 2, 3, 7];
  array4 = [5, 6, 8, 4, 9];

  console.log(elementsInArray(array3, array4))

// Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo
// y viceversa. Muestra los arrays transformados por consola.

function changeArray (arr1, arr2) {
    var temp;
    temp = arr1;
    arr1 = arr2;
    arr2 = temp;
    return [arr1, arr2]; 
}

console.log(changeArray(array3, array4));

// Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
// los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.

function buildObject(arr) {
    var objeto = {};
    for ( i = 0; i < arr.length; i++) {
      var propiedad = 'prop' + (i + 1);
      objeto[propiedad] = arr[i];
    }
    return objeto;
  }

  console.log(buildObject(array3))

// Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
// Muestra por consola cada elemento por el que iteres.

var iterateArrayByNumber = (myArray, num) => {
  
    for ( i = num; i < myArray.length; i++) {
        console.log(myArray[i]);
      }
}

array5 = [1, 2, 3, 4, 5, 6, 7, 8]

iterateArrayByNumber(array5, 5)

// Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.

var stringInArray = (array, str) => {
    for (var element in array) {
        if (array[element] === str) {
          return console.log(str + " existe en el array");
        }
      }
      return console.log(str + " No existe en el array");
}

var arrayStrings = ["hola", "adios", "ciao", "hasta luego"];
stringInArray(arrayStrings, "ciao")

// Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
// pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
// otra función equivalente que haga la traducción inversa.

var frutas = ["manzana", "platano", "sandia", "piña"];
var fruits = ["apple", "banana", "watermelon", "pineapple"];

var traductionFruit = (fruit) => {
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i] === fruit) {
          return fruits[i];
        }
      }
      return fruit + " no se encuentra en el diccionario de traducción.";
}

console.log(traductionFruit("manzana"));
console.log(traductionFruit("pera"));

var traduccionDeFruta = (fruta) => {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === fruta) {
          return frutas[i];
        }
      }
      return fruta + " no se encuentra en el diccionario de traducción.";
}

console.log(traduccionDeFruta("apple"));
console.log(traduccionDeFruta("lemon"));

// Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.

function reverseText(text) {
    var result = "";
    for(i = text.length -1; i >= 0; i--) {
        result += text[i];
    }
    return result
}
var txt = "Llevo todo el dia estudiando"
console.log(reverseText(txt))

// Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.

function mutatedText(texto1) {
    var result = "";
    for (let i = 0; i < texto1.length; i++) {
        if (i % 2 === 0) {
            result += texto1[i].toUpperCase();
        }
        else {
            result += texto1[i].toLowerCase();
        }
    }
     return result;
}

console.log(mutatedText(txt));

// Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
// de cada subarray y mostrarlos por consola.

var arrOfArr = (arrays) => {
    for (let i = 0; i < arrays.length; i++) {
        var subarray = arrays[i];
        for (let j = 0; j < subarray.length; j++) {
            console.log(subarray[j]);
        }
      }
}

var arrInarr = [[1,2,3], ["jamon", "bacon", "tomate"], [4, 5, 6]];
arrOfArr(arrInarr)