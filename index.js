//pd = 2.2046*kg

let input = document.querySelector(".input-weight");
let convert_btn = document.querySelector(".convert-btn");
let output = document.querySelector(".output-weight");


convert_btn.onclick = (e) => {
    let i_dropdown = document.querySelector("#input-dropdown").value;
    let o_dropdown = document.querySelector("#output-dropdown").value;
    let result;
    let inputValue = parseFloat(input.value);

    if (isNaN(inputValue)) {
        output.innerText = "Please enter a valid number.";
        output.style.color = "red";
        output.style.fontWeight = "normal";
        return;
    } else {
        output.style.color = "black";
        output.style.fontWeight = "normal";
    }

    if (i_dropdown === "Kg" && o_dropdown === "Lb") {
        result = inputValue * 2.2046;
    } else if (i_dropdown === "Lb" && o_dropdown === "Kg") {
        result = inputValue / 2.2046;
    } else if (i_dropdown === "Kg" && o_dropdown === "Oz") {
        result = inputValue * 35.274;
    } else if (i_dropdown === "Oz" && o_dropdown === "Kg") {
        result = inputValue / 35.274;
    } else if (i_dropdown === "Lb" && o_dropdown === "Oz") {
        result = inputValue * 16;
    } else if (i_dropdown === "Oz" && o_dropdown === "Lb") {
        result = inputValue / 16;
    } else {
        result = inputValue;
    }

    output.innerText = `${result.toFixed(2)} ${o_dropdown}`;
    output.style.fontWeight = "bold";


}


