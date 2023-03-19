console.log('third file');
const main = document.getElementById("main-container");
const section = document.createElement('section');
section.innerHTML = `
<h1>My dynamic section</h1>
<p>Extra text added</p>
<ul>
    <li>first child</li>
    <li>first child</li>
    <li>first child</li>
    <li>first child</li>
</ul>
`
main.appendChild(section);