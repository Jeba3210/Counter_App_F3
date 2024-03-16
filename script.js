let counter = 0;

const counterField = document.getElementById("count");
const errorField = document.getElementById("error");
const decrementField = document.getElementById("dec_btn");
const incrementField = document.getElementById("inc_btn");
const clearField = document.getElementById("clear");


decrementField.addEventListener('click', () => {
    if(counter == 0){
        errorField.innerHTML = "Error : Cannot go below 0" ;
        
    }else{
        counter--;
        counterField.innerHTML = counter;
        errorField.innerHTML = "" ;
    }
});

incrementField.addEventListener('click', () => {
    counter++;
    counterField.innerHTML = counter;
    errorField.innerHTML = "" ;
});

clearField.addEventListener('click' , () => {
    counter = 0;
    counterField.innerHTML = counter;
});

