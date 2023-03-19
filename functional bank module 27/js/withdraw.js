//step-1:add withdraw button event handler
document.getElementById('btn-withdraw').addEventListener('click',function(){
      //step-2:get withdraw amount by using getinputvaluebyid function
      const newwithdrawamount = getinputvaluebyid('withdraw-field');
      //step-3:get previous withdraw amount by using gettextelementvaluebyid function
      const previouswithdrawtotal = gettextelementvaluebyid('withdraw-total');
      //step-4:calculate new withdraw total and set the value
      const newwithdrawtotal = previouswithdrawtotal + newwithdrawamount;
      //step-4.5: set new withdraw total by using settextelementvaluebyid function
      settextelementvaluebyid('withdraw-total',newwithdrawtotal);
      //step-5:get previous balance total by using gettextelementvaluebyid function
      const previousbalancetotal = gettextelementvaluebyid('balance-total');
      //step-6:calculate new balance total
      const newbalancetotal = previousbalancetotal - newwithdrawamount;
      //step-7:set balance total using ettextelementvaluebyid
      settextelementvaluebyid('balance-total',newbalancetotal);
})