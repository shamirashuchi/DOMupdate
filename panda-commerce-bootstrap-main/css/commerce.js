// const h=document.getElementsByTagName('h2');
// for (let hi of h) {
//     hi.style.backgroundColor = 'lightblue';
// }

// document.getElementById('backpack').style.backgroundColor='tomato';
// const hh = document.getElementsByClassName('card');
// for (let hhh of hh) {
//     hhh.style.borderRadius = '30px';
// }

// document.getElementsByClassName('panda-btn-buy-now')[3].addEventListener('click',function(){
//           console.log('button clicked');
// })

// const gayeb = document.getElementsByClassName('panda-btn-buy-now');
// for(let g of gayeb){
//     g.addEventListener('click',function(event){
//         event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
//     })
// }

// let input = document.querySelector(".input");
// let button = document.querySelector(".button");
// button.disabled = true;
// input.addEventListener("change", stateHandle);

// function stateHandle() {
//     if(input.value === "") {
//         button.disabled = true;
//     } else if(input.value === "sontan@bap.com") {
//         button.disabled = false;
//     }
// }
document.getElementById("img").addEventListener("mouseenter",function(){
    document.getElementById('img').src = "images/bags/bag-1.png";
});
document.getElementById("img").addEventListener("mouseleave", function(){
    document.getElementById('img').src = "images/bags/bag-3.png";
});

document.getElementById('subscribe').addEventListener('dblclick',function(){
    document.getElementById('subscribe').style.backgroundColor='blue';
});
