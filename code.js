// // helloWorld function

function helloWorld() {
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";
// }


function sayHello(input) {
    if (input === true || input === false) {
    return "Hello, World!";
    }else{
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return input === 5 || input === "five" || input === "5";
}

// function isEven(input) {
//     if (input === 2) {
//         return true;
//     }
//     if (input === -4) {
//         return true;
//     }
//     if (input === 8) {
//         return true;
//     } else {
//         return false;
//     }
// }
function isEven(input) {
    return input % 2 == 0;
}

