function updatecasenumber(isIncrease){
    const casenumberfield = document.getElementById('case-number-field');
    const casenumberstring = casenumberfield.value;
    const previousecasenumber = parseInt(casenumberstring);
    let newcasenumber;
    if(isIncrease === true){
        newcasenumber = previousecasenumber + 1;
    }
    else{
        newcasenumber = previousecasenumber - 1;
    }
    casenumberfield.value = newcasenumber;
    return newcasenumber;
}
function updatecasetotalprice(newcasenumber){
    const casetotalprice = newcasenumber * 59;
    const casetotalelement = document.getElementById('case-total');
    casetotalelement.innerText = casetotalprice;
}
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newcasenumber = updatecasenumber(true);
    updatecasetotalprice(newcasenumber);
    calculatesubtotal();
    
});
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newcasenumber = updatecasenumber(false);
    updatecasetotalprice(newcasenumber);
    calculatesubtotal();
});