//1.where to add
console.log('append js');
const placeslist = document.getElementById('places-list');
console.log(placeslist);
//2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

//3.add the child
placeslist.appendChild(li);

//where to add
const maincontainer = document.getElementById('main-container');
console.log(maincontainer);
//2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My foodlist';

//3.add the child
section.appendChild(h1);

const ul =document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText='borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText='salad';
ul.appendChild(li3);

section.appendChild(ul);

maincontainer.appendChild(section);


//set innerHtml directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML =`
<h1>My Dress section </h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>sando genzi</li>
</ul>
`
maincontainer.appendChild(sectionDress);