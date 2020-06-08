

var backgroundImg
var bird;
function preload(){
backgroundImg = loadImage("background.png");

}
function setup(){

canvas = createCanvas(displayWidth-20,displayHeight-140);
console.log(width);
console.log(height);
bird = new Bird();


}
function draw(){
background(backgroundImg);
bird.show();

}