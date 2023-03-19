//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
      //get the deposit amount from the deposit input field
      //for input field use .value to the value inside the input field
      const depositfield = document.getElementById('user-deposit');
      const newdepositamountstring =depositfield.value;
      const newdepositamount = parseFloat(newdepositamountstring);
      //get the current deposit total
      //for non-input(element other than input,textarea) use innertext to get the text
      const deposittotalelement=document.getElementById('deposit-total');
      const previousdeposittotalstring = deposittotalelement.innerText;
      const previousdeposittotal = parseFloat(previousdeposittotalstring);
      // step-4:add numbers to set the total deposit
      const currentdeposittotal = previousdeposittotal+newdepositamount;
      //set the deposit total
      deposittotalelement.innerText=currentdeposittotal;
      //step-5: get balance current total
      const balancetotalelement = document.getElementById('balance-total');
      const previousbalancetotalstring = balancetotalelement.innerText;
      const previousbalancetotal = parseFloat(previousbalancetotalstring);
      //step-6: calculate current total balance
      const currentbalancetotal = previousbalancetotal+newdepositamount;
      //set the balamce total
      balancetotalelement.innerText = currentbalancetotal;
      //step-7:clear the deposite field
      depositfield.value = '';
})