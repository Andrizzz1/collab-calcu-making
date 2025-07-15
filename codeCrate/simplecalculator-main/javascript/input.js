let InputVal = document.querySelector('.inputNumber');

function addnumber(num){
    InputVal.value += num;
}

function Sum(){
    try{
        InputVal.value = (eval(InputVal.value)) ;
    }
    catch(error){
        InputVal.value = 'Error!!!!!'
    }  
}