let picker = document.getElementById("picker");

let colorBox = document.getElementById("colorBox");

let colorCode = document.getElementById("colorCode");



picker.addEventListener(
"input",
function(){

    let color = picker.value;


    colorBox.style.background = color;


    colorCode.innerHTML = color;


});



function copyColor(){

    navigator.clipboard.writeText(
        colorCode.innerHTML
    );


    alert("Color Code Copied 🎨");

}