//step-1:Add event listener to the deposit button,so any amount given and the button is clicked.so event handler is in the right position
document.getElementById('btn-deposit').addEventListener('click',function(){
      //console.log("deposit button clicked");//to check event handler is working properly
      //step-2:get the deposit amount from the deposit input field
       const depositfield = document.getElementById('deposit-field');//id diye specificly input field access korlam
       const newdepositamountstring = depositfield.value;//deposit input field er value ta .value diye pabo
       //console.log(newdepositamountstring);//value passi kina dekhar jonno
       //step-2.5:convert string deposit amount to a number type
       const newdepositamount = parseFloat(newdepositamountstring);
       //step-3:clear the deposit input field after getting the value 
       depositfield.value = '';
       //step-4:get the previous(uporer) deposit total
       const deposittotalelement = document.getElementById('deposit-total');
       const previousdeposittotalstring = deposittotalelement.innerText;//uporer deposit er value anlam
       //step-4.5:convert the string to int
       const previousdeposittotal = parseFloat(previousdeposittotalstring);
       //step-5:calculate new deposit total and set the value to the deposit(uporer) total
       const newdeposittotal = previousdeposittotal + newdepositamount;
       //deposittotalelement hosse uporer deposit total ja textarea ba input e nai tai innertext diye niye aste hbe
       deposittotalelement.innerText= newdeposittotal;
       //step-6: get current balance total mane deposit korar age joto amount ase setake niye asa
       const balancetotalelement = document.getElementById('balance-total');
       const previousbalancetotalstring = balancetotalelement.innerText;
       const previousbalancetotalamount = parseFloat(previousbalancetotalstring);
       //step-7:calculate the new balance and set it to the balance total element
       const newbalancetotal = previousbalancetotalamount + newdepositamount;
       balancetotalelement.innerText=newbalancetotal;
       
})