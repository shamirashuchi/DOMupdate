const sections = document.querySelectorAll('section');
//console.log(sections);
for(const section of sections){
    console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius ='15px';
    section.style.paddingLeft = '7px';
    //priority high
    section.style.backgroundColor = 'lightgray';
}
//const placescontainer = document.getElementById('places-container');
//placescontainer.style.backgroundColor = 'yellow';

//priority low.!important dile priority high hoye jabe
const placescontainer = document.getElementById('places-container');
placescontainer.classList.add('yellow-bg');
placescontainer.classList.add('text-center');
placescontainer.classList.remove('large-text');