background(89, 216, 255);
var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColour1, bodyColour2, bodyColour3, eyeColour1, eyeColour2, eyeColour3, tailColour1, tailColour2, tailColour3, tailWidth, tailHeight){
    noStroke();
    //colour of the fish
    fill(bodyColour1, bodyColour2, bodyColour3);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    fill(tailColour1, tailColour2, tailColour3);
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(eyeColour1, eyeColour2, eyeColour3);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

//function to draw seaweed
var seaweed = function(){
    var centerX = random(20, 380);
    var centerY = random(20, 350);
    stroke(0, 250, 0);
    strokeWeight(2);
    line(centerX, 400, centerX, centerY);
};

//function to draw rocks
var rocks = function(){
    //declaring var
    var xPos = random(10, 390);
    var yPos = random(380, 400);
    var rockWidth = random(2, 20);
    var rockHeight = random(2, 20);
    var rockColour = random(90, 200);
    
    noStroke();
    fill(255, rockColour, 0);
    ellipse(xPos, yPos, rockWidth, rockHeight);
};

//draw fish when mouse is clicked
mouseClicked = function(){
    //defining var
        
    var bodyLength = random(10, 100);
    var bodyHeight = random(10, 100);
    var bodyColour1 = random(1, 300);
    var bodyColour2 = random(1, 300);
    var bodyColour3 = random(1, 300);
    var eyeColour1 = random(1, 300);
    var eyeColour2 = random(1, 300);
    var eyeColour3 = random(1, 300);
    var tailColour1 = random(1, 300);
    var tailColour2 = random(1, 300);
    var tailColour3 = random(1, 300);
    var tailWidth = random(10, 50);
    var tailHeight = random(10, 50);
    
    drawFish(mouseX, mouseY, bodyLength, bodyHeight, bodyColour1, bodyColour2, bodyColour3, eyeColour1, eyeColour2, eyeColour3, tailColour1, tailColour2, tailColour3, tailWidth, tailHeight);
    seaweed();
    rocks();
};

