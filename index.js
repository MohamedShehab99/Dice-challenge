var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);
console.log(randomNumber1);
console.log(randomNumber2);
if(randomNumber1===6) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice6.png")
}
else if(randomNumber1===5) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice5.png")
}
else if(randomNumber1===4) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice4.png")
}
else if(randomNumber1===3) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice3.png")
}
else if(randomNumber1===2) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice2.png")
}
else {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice1.png")
}

if(randomNumber2===6) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice6.png")
}
else if(randomNumber2===5) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice5.png")
}
else if(randomNumber2===4) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice4.png")
}
else if(randomNumber2===3) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice3.png")
}
else if(randomNumber2===2) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice2.png")
}
else {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice1.png")
}

if(randomNumber1>randomNumber2) {
    document.querySelector(".container h1").textContent="Player 1 wins";
}
else if(randomNumber1<randomNumber2) {
    document.querySelector(".container h1").textContent="Player 2 wins";
}
else if(randomNumber1===randomNumber2) {
    document.querySelector(".container h1").textContent= "Draw";
}