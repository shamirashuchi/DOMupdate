//step-1:Add even handler with the withdraw button. jekhane click hbe sekhane evenhandler add hobe click korar jonno
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //console.log('withdraw button clicked');
    //step-2:get the withdraw amount from your withdraw input field
     const withdrawfield = document.getElementById('withdraw-field');
     //.value diye your withdraw er input foeld theke value nibo
     const newwithdrawamountstring = withdrawfield.value;
     const newwithdrawamount = parseFloat(newwithdrawamountstring);
     //console.log(newwithdrawamount);
     //step-3:clear the your withdraw input field
     withdrawfield.value = '';
     //step-4:get previous withdraw total(uporer withdraw)
     const withdrawtotalelement = document.getElementById('withdraw-total');
     //get the value of withdraw(uporerta) as it is span not input field
     const previouswithdrawtotalstring = withdrawtotalelement.innerText;
     const previouswithdrawtotal = parseFloat(previouswithdrawtotalstring);
     //step-5:calculate total withdraw amount and set it to the total withdraw element
     const newwithdrawtotal = previouswithdrawtotal + newwithdrawamount;
     withdrawtotalelement.innerText = newwithdrawtotal;
     //step-6:get previous balance
     const balanceelement = document.getElementById('balance-total');
     const previousbalancetotalstring = balanceelement.innerText;
     const previousbalancetotal = parseFloat(previousbalancetotalstring);
     //step-7:calculate new balance and set it to the balance total element
     const newbalancetotal = previousbalancetotal - newwithdrawamount;
     balanceelement.innerText = newbalancetotal;
})