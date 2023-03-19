function textelementvaluebyid(elementid){
    const phonetotalelement = document.getElementById(elementid);
    const currentphonetotalstring = phonetotalelement.innerText;
    const currentphonetotal = parseInt(currentphonetotalstring);
    return currentphonetotal;
}
function gettextelement(elementid,value){
    const subtotalElement = document.getElementById(elementid);
    subtotalElement.innerText = value;
}
function calculatesubtotal(){
    //calculate total
    const currentphonetotal = textelementvaluebyid('phone-total');
    const currentcasetotal = textelementvaluebyid('case-total');
    
    const currentsubtotal = currentphonetotal + currentcasetotal;
    gettextelement('sub-total',currentsubtotal);

    //calculate tax
    const taxamountstring = (currentsubtotal * 0.1).toFixed(2);
    const taxamount = parseFloat(taxamountstring);
    gettextelement('tax-amount',taxamount);

    const finalamount = currentsubtotal + taxamount;
    gettextelement('final-total',finalamount)
}