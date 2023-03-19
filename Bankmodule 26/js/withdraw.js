//add event handler with the withdraw button
//step1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2:get the withdraw amount from the withdraw input field
    //console.log('withdraw button clicked');
    const withdrawfield = document.getElementById('withdraw-field');
    const newwithdrawamountstring = withdrawfield.value;
    //make sure to convert the input into a number by using parseFloat
    const newwithdrawamount = parseFloat(newwithdrawamountstring);
    console.log(newwithdrawamount);
    //step-7:clear the withdraw field
    withdrawfield.value = '';
    if(isNaN(newwithdrawamount)){
        alert('Please provide a valid number');
        return;
    }
    //console.log(newwithdrawamount);
    //step-3:get previous withdraw total
    const withdrawtotalelement = document.getElementById('withdraw-total');
    const previouswithdrawtotalstring = withdrawtotalelement.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawtotalstring);
    //console.log(previouswithdrawtotal);
    
    //step-5:get the previous balance total
    const balancetotalelement = document.getElementById('balance-total');
    const previousbalancetotalstring = balancetotalelement.innerText;
    const previousbalancetotal = parseFloat(previousbalancetotalstring);
    //console.log(previousbalancetotal);
    
    if(newwithdrawamount > previousbalancetotal){
        alert('There is no enough amount');
        return;
    }
    //step-4:calculate total withdraw amount
    //4.5: set total withdraw amount
    const currentwithdrawtotal = previouswithdrawtotal + newwithdrawamount;
    withdrawtotalelement.innerText = currentwithdrawtotal;
    //step-6:calculate new balance total
    //6.5: set the new balance total
    const newbalancetotal = previousbalancetotal - newwithdrawamount;
    balancetotalelement.innerText = newbalancetotal;
    
})