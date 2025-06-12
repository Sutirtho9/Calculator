
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

    }
    catch(error){
        display.value="Error"
    }

    
    

}