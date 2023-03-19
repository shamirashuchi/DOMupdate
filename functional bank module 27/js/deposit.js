//step-1:add evenlistener which  button will be clicked 
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2 and 3:by calling function
    const newdepositamount = getinputvaluebyid('deposit-field');
    //step-4
    //get previous deposit total
    const previousdeposittotal = gettextelementvaluebyid('deposit-total');
    //step-5.1://step-5:calculate new deposit total
    const newdeposittotal = previousdeposittotal + newdepositamount;
    //step-5.2:set deposit total value
    settextelementvaluebyid('deposit-total',newdeposittotal);
    //step-4 and step-6:get previous balance by using the function
    const previousbalancetotal = gettextelementvaluebyid('balance-total');
    //step-5.1://step-5:calculate new balance total
    const newbalancetotal = previousbalancetotal + newdepositamount;
    //step-5.2:set balance total value
    settextelementvaluebyid('balance-total',newbalancetotal);

})