
const displayArray=[];
function AppendElement(input){
    displayArray.push(input);
    CreateDisplay();
}
function clearDisplay(){
    display.value=" ";
    displayArray.length=0;
}

function CreateDisplay() {
    const display = document.getElementById("display");
    display.value=" ";
    for(let i=0;i<displayArray.length;i++){
        display.value+=displayArray[i];
    }
}

function DeleteElement(){
    displayArray.splice(displayArray.length-1,1);
    CreateDisplay()
}

function calculate(){
    let calc_value=" ";
    for(let i=0;i<displayArray.length;i++){
    calc_value+=displayArray[i];
    }
    try{
        display.value=eval(calc_value);
        displayArray.length=0;
        displayArray.push(display.value);

    }
    catch(error){
        display.value="Error"
    }
}

//Event Listeners
const opp_buttons = document.querySelectorAll('.opp_btn');
opp_buttons.forEach(button =>{
    button.addEventListener('click',()=>{
    const opp =button.innerText;
    if(opp==='x'){
        AppendElement('*')
    }else{
        AppendElement(opp); 
    }
    });
})

const del_btn=document.querySelector('.delbtn').
addEventListener('click',()=>{
    DeleteElement();
})

const clear_btn=document.getElementById('cleardisplay').
addEventListener('click',()=>{
    clearDisplay();
})

const calc_btn=document.querySelector('.calc').
addEventListener('click',()=>{
    calculate();
})

document.addEventListener("keydown",(event)=>{
    const key= event.key;
    if(!isNaN(key) || "*/+-".includes(key)){
        AppendElement(key);
    } else if(key==='Backspace'){
        DeleteElement();
    }else if(key==='Enter'){
        calculate();
    }
    else if(key==='Escape'){
        clearDisplay();
    }
});
