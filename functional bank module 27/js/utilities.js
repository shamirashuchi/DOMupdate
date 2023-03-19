//step-2:get the element by id,get the value from the element,convert string value to a number
function getinputvaluebyid(inputfieldid){
    //inputfield nibo and document.getelementbyid inputid use korbe karon
    const inputfield = document.getElementById(inputfieldid);
    const inputfieldvaluestring = inputfield.value;
    const inputfieldvalue = parseFloat(inputfieldvaluestring);
    //step:3 clear the input field
    inputfield.value = '';
    return inputfieldvalue;
}
//function for step-4 and step-6 as they are same
function gettextelementvaluebyid(elementid){
    const element = document.getElementById(elementid);
    const elementvaluestring = element.innerText;
    const value = parseFloat(elementvaluestring);
    return value;
}
//step-5.2:set the value to the textelement(uporer) total.mane je element er value set korbo seta paite hbe.kon value set korbo seta thik kore ane set korte hbe
function settextelementvaluebyid(elementid,newvalue){
     const textelement = document.getElementById(elementid);
     textelement.innerText = newvalue;
}