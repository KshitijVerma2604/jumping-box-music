var fixedRect1,fixedRect2,fixedRect3,fixedRect4,movingRect;
var red,green,blue,yellow;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);
    //create 4 different surfaces
    red="red";
    green="green";
    blue="blue";
    yellow="yellow";

    fixedRect1=createSprite(100,590,200,20);
    fixedRect1.shapeColor=red;

    fixedRect2=createSprite(300,590,200,20);
    fixedRect2.shapeColor=blue;

    fixedRect3=createSprite(500,590,200,20);
    fixedRect3.shapeColor=yellow;

    fixedRect4=createSprite(700,590,200,20);
    fixedRect4.shapeColor=green;

    //create box sprite and give velocity
    movingRect=createSprite(50,580,50,50);
    movingRect.shapeColor="white";
    movingRect.velocityY=4;
    movingRect.velocityX=5;
}

function draw() {
    background("black");
    //create edgeSprite
    
    
    //add condition to check if box touching surface and make it box
    
     
    if(movingRect.isTouching(fixedRect1)){
    
       movingRect.shapeColor=red;
       music.play();
       movingRect.bounceOff(fixedRect1);
    }
    if(movingRect.isTouching(fixedRect2)){
        
        movingRect.shapeColor=blue;
        music.play();
        movingRect.bounceOff(fixedRect2);
    }
    if(movingRect.isTouching(fixedRect3)){
        
        movingRect.shapeColor=yellow;
        music.play();
        movingRect.bounceOff(fixedRect3);
    }
    if(movingRect.isTouching(fixedRect4)){
        
        movingRect.shapeColor=green;
        music.play();
        movingRect.bounceOff(fixedRect4);
    }
    edges=createEdgeSprites();
    movingRect.bounceOff(edges);
    drawSprites();
}
