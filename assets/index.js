const result = document.getElementById('result');
const valueRange = document.getElementById('value-range');
const range = document.getElementById('range');
const generator = document.getElementById('generator');
const copy = document.getElementById('copy');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = upperCase.toLocaleLowerCase();
const number = 0123456789;
const symbol = '!&$#@';
valueRange.innerText = range.value;
range.oninput = function inputvalue(){
      valueRange.innerText = this.value;
 }
 
 const generate = () =>{
     password = '';
    const junction = upperCase.concat(lowerCase, number, symbol);
    for(let i = 0; i<range.value; i++){
        password += junction.charAt(Math.floor(Math.random() * junction.length));
    }
    result.innerText = password;
}
generator.addEventListener('click', generate);

const copyPassword = () =>{
    const msg = document.getElementById('msg');
    const check = document.querySelector('.fa-check');
    if(navigator.clipboard.writeText(password)){
        msg.innerText = 'Copied';
        msg.classList.add('msg-color');
        check.classList.add('check');
    };

    setTimeout(()=>{
        msg.innerText = '';
        check.classList.remove('check');
        msg.classList.remove('msg-color');
    },2000);
    
}

copy.addEventListener('click', copyPassword);

