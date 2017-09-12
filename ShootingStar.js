//declaring var
var xPos = 380;
var yPos = -20;
var xT1Corner1 = 397;
var yT1Corner1 = 357;
var xT1Corner2 = 392;
var yT1Corner2 = 347;
var xT1Corner3 = 378;
var yT1Corner3 = 345;
var xT2Corner1 = 397;
var yT2Corner1 = 350;
var xT2Corner2 = 383;
var yT2Corner2 = 357;
var xT2Corner3 = 385;
var yT2Corner3 = 335;

draw = function() {
    background(29, 40, 115);
    
    noStroke();
    //background stars
    fill(232, 157, 157);
    ellipse(234, 234, 3, 3);
    fill(204, 164, 242);
    ellipse(148, 99, 5, 5);
    fill(155, 216, 235);
    ellipse(265, 109, 3, 3);
    fill(240, 228, 168);
    ellipse(65, 360, 3, 3);
    fill(240, 240, 240);
    ellipse(292, 298, 7, 7);
    fill(242, 204, 164);
    ellipse(150, 264, 3, 3);
    fill(235, 150, 150);
    ellipse(213, 169, 3, 3);
    
    //moon
    fill(204, 198, 198);
    ellipse(59, 141, 60, 60);
    //crater
    fill(158, 153, 153);
    ellipse(71, 152, 10, 10);
    ellipse(65, 157, 8, 8);
    ellipse(78, 142, 6, 6);
    ellipse(54, 160, 4, 4);
    ellipse(45, 133, 4, 4);
    ellipse(61, 143, 4, 4);
    
    //first star
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    //trail for star
    stroke(255, 196, 0);
    line(xPos, yPos, 380, -20);
    //second star
    triangle(xT1Corner1, yT1Corner1, xT1Corner2, yT1Corner2, xT1Corner3, yT1Corner3);
    triangle(xT2Corner1, yT2Corner1, xT2Corner2, yT2Corner2, xT2Corner3, yT2Corner3);
    
    //move star down to the left
    xPos--;
    yPos+=2;
    
    //move star up to the left
    xT1Corner1 -= 3;
    yT1Corner1 -= 2;
    xT1Corner2 -= 3;
    yT1Corner2 -= 2;
    xT1Corner3 -= 3;
    yT1Corner3 -= 2;
    xT2Corner1 -= 3;
    yT2Corner1 -= 2;
    xT2Corner2 -= 3;
    yT2Corner2 -= 2;
    xT2Corner3 -= 3;
    yT2Corner3 -= 2;
};
