document.getElementById('add-btn').addEventListener('click',function(){
    const value = document.getElementById('text-input').value;
    const container = document.getElementById("parent-container");
    const li = document.createElement('li');
    li.innerText = value;
    li.classList.add("new-li");
    container.appendChild(li);
    const alllist = 
})