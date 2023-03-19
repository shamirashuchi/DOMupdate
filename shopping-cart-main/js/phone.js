function updatecaseenumber(isIncrease){
    const casenumberfield = document.getElementById('btn-phone');
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
function updatecaseetotalprice(newcasenumber){
    const casetotalprice = newcasenumber * 1219;
    const casetotalelement = document.getElementById('phone-total');
    casetotalelement.innerText = casetotalprice;
   
}
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newcasenumber = updatecaseenumber(true);
    updatecaseetotalprice(newcasenumber);
    calculatesubtotal();
});
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newcasenumber = updatecaseenumber(false);
    updatecaseetotalprice(newcasenumber);
    calculatesubtotal();
});
