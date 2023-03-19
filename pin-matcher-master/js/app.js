function getpin(){
    const pin = generatepin();
    const pinstring = pin + '';
    if(pinstring.length === 4){
        return pin;
    }
    else{
        console.log('pin not 3 digit found',pin);
        return getpin();
    }
}
function generatepin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getpin();
    const displaypinfield = document.getElementById('display-pin');
    displaypinfield.value= pin;
})
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typenumberfield = document.getElementById('typed-numbers');
    const previoustypenumber = typenumberfield.value;
    if(isNaN(number)){
        if(number === 'C'){
            typenumberfield.value="";
        }
        else if(number === '<'){
            const digits = previoustypenumber.split('');
            digits.pop();
            const remainingdigits = digits.join('');
            typenumberfield.value = remainingdigits;
        }
    }
    else{
        const newtypenumber = previoustypenumber + number;
        typenumberfield.value = newtypenumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displaypinfield = document.getElementById('display-pin');
    const currentpin = displaypinfield.value;
    const typenumberfield = document.getElementById('typed-numbers');
    const typenumber = typenumberfield.value;
    const msgsuccess = document.getElementById('pin-success');
    const msgwrong = document.getElementById('pin-wrong');
    if(typenumber === currentpin){
        
        msgsuccess.style.display='block';
        msgwrong.style.display='none';
    }
    else{
        
        msgwrong.style.display='block';
        msgsuccess.style.display='none';
    }
})