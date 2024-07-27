
// grow text
document.getElementById("comp-ly4rzz911").addEventListener('click', growText)

//shrink text
document.getElementById("comp-ly4rzz97").addEventListener('click', shrinkText)

// gray scale
document.getElementById("comp-ly4rzz9d").addEventListener('click', escaleGray)

// high contrast
document.getElementById("comp-ly4rzz9l").addEventListener('click', highContrast)

// negative contrast
document.getElementById("comp-ly4rzz9r").addEventListener('click', negativeContrast)

//back light
document.getElementById("comp-ly4rzz9x1").addEventListener('click', backLight)

// underlined links
document.getElementById("comp-ly4rzza24").addEventListener('click', uderlinedLinks)

// readable font
document.getElementById("comp-ly4rzza91").addEventListener('click', readableFont)

//reset 
document.getElementById("comp-ly4rzzag").addEventListener('click', resetAccessibility)

let spanSize = document.getElementsByClassName("user-name")[0];
let currentSize = window.getComputedStyle(spanSize, null).getPropertyValue('font-size');

localStorage.setItem("spanSize", currentSize);

let isGray = false;

// function to grow text sizes
function growText() {
    let spans = document.querySelectorAll("span, a, p");
    let maxValue = 30;
for
    spans.forEach((item) => {
        let currentSize = window.getComputedStyle(item, null).getPropertyValue('font-size');
        let currentSizeValue = parseFloat(currentSize);

        if (currentSizeValue < maxValue) {
            let newSize = currentSizeValue + 2;
            item.style.fontSize = newSize + 'px';
        }
    });

}
// function to shrink tall text sizes
function shrinkText() {
    let spans = document.querySelectorAll("span, a, p");
    let minValue = 5;

    spans.forEach((item) => {
        let currentSize = window.getComputedStyle(item, null).getPropertyValue('font-size');
        let currentSizeValue = parseFloat(currentSize);

        if (currentSizeValue > minValue) {
            let newSize = currentSizeValue - 2;
            item.style.fontSize = newSize + 'px';
        }
    });
}

// function that activates grayscale
function escaleGray() {
    let body = document.body;
    if (isGray) {
        body.style.filter = "";
        isGray = false;
    } else {
        body.style.filter = "grayscale(100%)";
        isGray = true
    }
    console.log(isGray)
}

// function that activates high contrast

function highContrast() {
    let body = document.body;
    let isHighContrast = body.style.backgroundColor === "black" && body.style.color === "white";

    if (isHighContrast) {
        body.style.backgroundColor = "";
        body.style.color = "";
        body.style.filter = "";
        // Reset all spans' background and color to initial state
        document.querySelectorAll("img, span , p , section").forEach((item) => {
            item.style.backgroundColor = "";
            item.style.color = "";
        });
        let header = document.querySelector("header")
        header.style.backgroundColor = "";
        header.style.color = "";

    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        body.style.filter = "";
        // Set all spans' background and color to negative contrast state
        document.querySelectorAll("img, span , p , section").forEach((item) => {
            item.style.backgroundColor = "black";
            item.style.color = "white";
        });
        let header = document.querySelector("header")
        header.style.backgroundColor = "black";
        header.style.color = "white";

        isGray = false;
    }
}
// function that activates negative contrast

function negativeContrast() {
    let body = document.body;
    let isNegativeContrast = body.style.backgroundColor === "black" && body.style.color === "yellow";

    if (isNegativeContrast) {
        body.style.backgroundColor = "";
        body.style.color = "";
        body.style.filter = "";
        // Reset all spans' background and color to initial state
        document.querySelectorAll("img, span , p , section").forEach((item) => {
            item.style.backgroundColor = "";
            item.style.color = "";
        });
        let header = document.querySelector("header")
        header.style.backgroundColor = "";
        header.style.color = "";

    } else {
        body.style.backgroundColor = "black";
        body.style.color = "yellow";
        body.style.filter = "";
        // Set all spans' background and color to negative contrast state
        document.querySelectorAll("img, span , p , section").forEach((item) => {
            item.style.backgroundColor = "black";
            item.style.color = "yellow";
        });
        let header = document.querySelector("header")
        header.style.backgroundColor = "black";
        header.style.color = "yellow";

        isGray = false;

    }

}

// function that activates back light
function backLight() {
    let body = document.body;
    let isBackLightContrast = body.style.backgroundColor === "white" && body.style.color === "black";

    if (isBackLightContrast) {
        body.style.backgroundColor = "";
        body.style.color = "";
        body.style.filter = "";
        // Reset background and color to initial state
        document.querySelectorAll("img, span , p , section").forEach((item) => {
            item.style.backgroundColor = "";
            item.style.color = "";
        });
        let header = document.querySelector("header")
        header.style.backgroundColor = "";
        header.style.color = "";

    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        body.style.filter = "";
        // Set background and color to negative contrast state
        document.querySelectorAll("img, span , p , section").forEach((item) => {
            item.style.backgroundColor = "white";
            item.style.color = "black";
        });
        let header = document.querySelector("header")
        header.style.backgroundColor = "white";
        header.style.color = "black";

        isGray = false;

    }
}

// fuction that activates underlined links
function uderlinedLinks() {
    document.querySelectorAll("a").forEach((item) => {
        if (item.style.textDecoration === "underline") {
            item.style.textDecoration = "none";
        } else {
            item.style.textDecoration = "underline";
        }
    });
}

// function that readable font
let isReadable = false;
function readableFont() {
    document.querySelectorAll("span, p, a").forEach((item) => {
        if (isReadable) {
            item.style.fontSize = "";
            item.style.fontFamily = "";
        } else {
            item.style.fontSize = "1.5rem";
            item.style.fontFamily = "Verdana, Arial, Helvetica, sans-serif";
        }
    });
    isReadable = !isReadable;
    console.log(isReadable)
}

// function that reset accessibility
function resetAccessibility() {
    // Select all altered elements 
    let spanElements = document.querySelectorAll("span");
    let divElements = document.querySelectorAll("div");
    let anchorElements = document.querySelectorAll("a");
    let textaElements = document.querySelectorAll("p");
    let body = document.body;
    let nameElements = document.querySelectorAll(".user-name");

    document.querySelectorAll("img, p, a, div, span").forEach((item) => {
        item.style.backgroundColor = "";
        item.style.color = "";
        item.style.fontSize = "";
        item.style.fontFamily = "";
        item.style.textDecoration = "none";
    })

    nameElements.forEach((item) => {
        item.style.backgroundColor = "";
        item.style.color = "";
        item.style.fontSize = localStorage.getItem("spanSize");
        item.style.fontFamily = "";
    });

    // Redefine body style.
    body.style.filter = "";
    body.style.backgroundColor = "";
    body.style.color = "";
    body.style.fontSize = "";
    body.style.fontFamily = "";

}
