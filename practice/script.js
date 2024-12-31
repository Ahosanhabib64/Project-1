const count = document.getElementById('counter');
const plsBtn = document.getElementById('plsBtn');
const mnsBtn = document.getElementById('mnsBtn');
const colorCount = document.getElementById('colorCount')
counter = 0;

let updateCount = (v) => {
    counter = counter+v;
    count.textContent = counter;
    colorCount.textContent = counter;

    if(counter >= 10){
        plsBtn.setAttribute('disabled',true)
    }
    else{
        plsBtn.removeAttribute('disabled',false)
    }

    if(counter <= 0){
        mnsBtn.setAttribute('disabled',true)
    }
    else{
        mnsBtn.removeAttribute('disabled',false)
    }
}

plsBtn.addEventListener('click', ()=>{
    updateCount(1);
})

mnsBtn.addEventListener('click', ()=>{
    updateCount(-1);
 
})


const GenerateNewColor = ()=> {
    const r = Math.floor(Math.random()*255);
const g = Math.floor(Math.random()*255);
const b = Math.floor(Math.random()*255);

return`rgb(${r}, ${g}, ${b})`
}


const rgbColor = document.getElementsByClassName('rgb-color')
const generateBtn = document.getElementById('newColor');


generateBtn.addEventListener('click', ()=>{

    updateCount(1);

    let color = GenerateNewColor();
    const colorBox = document.getElementById('colorBox');
    const colorCode = document.getElementById('colorCode');

    colorBox.style.backgroundColor = color;
    colorCode.textContent = color;
})

const copyColor = document.getElementById('copyColorCode');

copyColor.addEventListener('click', ()=>{
const colorCode = document.getElementById('colorCode');

const inputTag = document.createElement('input');
    inputTag.value = colorCode.innerText;
    document.body.appendChild(inputTag);

    inputTag.select();
    document.execCommand('copy');
    document.body.removeChild(inputTag);
    alert('copy to clipboard');

})

