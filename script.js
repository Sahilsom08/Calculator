let input = document.getElementById('input');
let buttons = document.getElementsByTagName('button');

let result = "";
const array = Array.from(buttons);
array.forEach( function(button){
    button.addEventListener('click',(e)=>{
        if( e.target.innerHTML == '='){
            result = eval(result);
            input.value = result;
        }
        else if( e.target.innerHTML == 'AC'){
            result = "";
            input.value = result;
        }
        else if( e.target.innerHTML == 'DE'){
            result = result.substring(0, result.length-1);
            // result = result.slice(0, result.length-1);
            input.value = result;
        }
        else{
            result += e.target.innerHTML;
            input.value = result;
        }
    })
})