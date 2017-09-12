//declaring var
var triangleStarCentre = 200;
var starDirection = 0;
var circle = 200;
//animate
draw = function(){
    background(0, 217, 255);
    fill(201, 10, 10);
    textSize(30);
    text("Cherry Chocolate Bar!", 37, 30);
    textSize(15);
    text("Delicious! You'll never want another flavour!", 49, 350);
    
    //circle animation
    ellipse(200, 200, circle, circle);
    
    //star animation
    stroke(245, 245, 46);
    fill(245, 245, 46);
    triangle(100, 80, 110, 155, triangleStarCentre, triangleStarCentre);
    triangle(60, 130, 110, 200, triangleStarCentre, triangleStarCentre);
    triangle(60, 200, 130, 240, triangleStarCentre, triangleStarCentre);
    triangle(100, 258, 175, 260, triangleStarCentre, triangleStarCentre);
    triangle(155, 310, 213, 277, triangleStarCentre, triangleStarCentre);
    triangle(220, 316, 245, 275, triangleStarCentre, triangleStarCentre);
    triangle(255, 295, 263, 231, triangleStarCentre, triangleStarCentre);
    triangle(310, 255, 274, 200, triangleStarCentre, triangleStarCentre);
    triangle(240, 80, 187, 125, triangleStarCentre, triangleStarCentre);
    triangle(173, 50, 140, 128, triangleStarCentre, triangleStarCentre);
    triangle(300, 130, 221, 138, triangleStarCentre, triangleStarCentre);
    triangle(255, 162, 312, 200, triangleStarCentre, triangleStarCentre);
    
    //animate star
    
    //see if star position is larger than 50
    if (triangleStarCentre>=250){
        starDirection=1;
    }
    else if (triangleStarCentre<=150){
        starDirection=0;
    }
    
    //see if eyes should get bigger or smaller
    if (starDirection===0){
        triangleStarCentre++;
        circle--;
    }
    else if(starDirection===1){
        triangleStarCentre--;
        circle++;
    }
    
    //chocolate bar
    fill(71, 14, 14);
    rect(170, 140, 59, 111, 5);
    //squares
    strokeWeight(2);
    stroke(31, 6, 6);
    rect(172, 142, 27, 20, 1);
    rect(201, 142, 27, 20, 1);
    rect(172, 164, 27, 20, 1);
    rect(201, 164, 27, 20, 1);
    rect(201, 186, 27, 20, 1);
    
    //wrapper
    noStroke();
    fill(40, 14, 69);
    rect(170, 186, 59, 65, 5);
    fill(82, 49, 120);
    triangle(230, 186, 170, 200, 170, 170);
    //label
    fill(201, 10, 10);
    textSize(5);
    text("Cherry Chocolate Bar", 175, 209);
    ellipse(195, 225, 7, 7);
    ellipse(200, 227, 7, 7);
    stroke(13, 255, 0);
    line(196, 222, 201, 216);
    line(200, 223, 201, 216);
};
