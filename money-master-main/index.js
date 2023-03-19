let calculate = document.getElementById('calculate');
calculate.addEventListener('click',function(){
    let input = document.getElementById('input');
    let income = parseFloat(input.value);
    let food = parseFloat(document.getElementById('food').value);
    let rent= parseFloat(document.getElementById('rent').value);
    let clothes = parseFloat(document.getElementById('clothes').value);
    if(income ==''|| typeof income !== 'number' ||  food ==''|| typeof food != 'number' ||  rent ==''|| typeof rent !== 'number' || rent<0 || clothes ==''|| typeof clothes !== 'number' || income<0 || food<0 ||  clothes<0){
        alert('Give only number');
    }
    else{
        let expencess = (food+rent+clothes).toFixed(2);
    if(expencess>income){
        alert('Income er chaite besi Khoroch kora jabe na');
    }
    else{
        let expences = document.getElementById('expences').innerText = expencess;
        let balance = document.getElementById('balance').innerText = (income - expencess).toFixed(2);
        
    }
    let saving = document.getElementById('saving');
    saving.addEventListener('click',function(){
        let save = parseFloat(document.getElementById('save').value);
        if(save>100){
            alert('100% er besi save kora somvob na')
        }
        else{
            let saveamount =(income*(save/100)).toFixed(2);
        let q = (income - expencess).toFixed(2);
        if(saveamount>q){
            alert('Tomer balance er chaite besi save korte parbe na');
        }
        else{
            document.getElementById('amount').innerText=saveamount;
            document.getElementById('remaining').innerText=(q-saveamount).toFixed(2);
        }
        }
    })
    }
});