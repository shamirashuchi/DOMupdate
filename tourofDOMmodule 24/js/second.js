console.log('second file');

const secondlist = document.getElementById('second-list');
//
const li = document.createElement('li');
li.innerText = 'My dynamic item'

secondlist.appendChild(li);