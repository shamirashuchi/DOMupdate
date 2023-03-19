console.log('This is separate js file');
//option 1:directly set on the HTML file
//<button onclick="console.log(65)">Another button</button>
//option 2:add onclick function on the html element
//<button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
//option 3:add another onclick function
const makeBlueButton =document.getElementById('make-blue');
        makeBlueButton.onclick= makeBlue;
        function  makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

//option 3: another:add another onclick function  
const purpleButton =document.getElementById('make-purple');
purpleButton.onclick= function makePurple(){
    document.body.style.backgroundColor = 'purple';
}
//option 4
const pinkButton = document.getElementById('make-pink');
       pinkButton.addEventListener('click',makePink)

       function makePink(){
        document.body.style.backgroundColor = 'pink';
       }
//option 4 Another
const makeGreenButton = document.getElementById('make-green');
       makeGreenButton.addEventListener('click',function makeGreen(){
        document.body.style.backgroundColor = 'green';
       })
//option 4 final
//document.getElementById('make-goldenrod').addEventListener('click',function(){}
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
   })