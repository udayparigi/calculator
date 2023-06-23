let input = document.getElementById('inputfield');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == '^2'){
            var result = document.getElementById("result");
            var currentValue = parseFloat(result.value);
            var squaredValue = currentValue * currentValue;
            result.value = squaredValue;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
function square() {
    var input = document.getElementById("inputfield");
    var currentValue = parseFloat(input.value);
    var squaredValue = currentValue * currentValue;
    input.value = squaredValue;
}