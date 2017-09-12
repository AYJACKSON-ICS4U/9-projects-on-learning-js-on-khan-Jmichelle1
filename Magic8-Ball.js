//declaring var
var answer;
var vertex1 = 104;
var otherVertecies = 280;
var smallerBigger = 0;

//animation
draw = function(){
    
    background(255, 250, 0);
    //draw ellipse
    fill(0, 0, 0);
    ellipse(200, 200, 375, 375);
    
    //draw triangle, change colour depending on random number
    if (answer===1){
        fill(60, 0, 255);
    }
    else if (answer===2){
        fill(0, 191, 255);
    }
    else if (answer===3){
        fill(255, 0, 98);
    }
    else if (answer===4){
        fill(47, 255, 0);
    }
    else if (answer===5){
        fill(186, 186, 35);
    }
    
    triangle(200, vertex1, 280, otherVertecies, 120, otherVertecies);
    
    //change direction of animation
    if (vertex1 === 280) {
        smallerBigger = 1;
    }
    else if (vertex1 === 104) {
        smallerBigger = 0;
    }
    
    //animate triangle
    if (smallerBigger === 0){
        vertex1++;
        otherVertecies--;
    }
    else if (smallerBigger === 1){
        vertex1--;
        otherVertecies++;
    }
    
    //text colour
    fill(255, 255, 255);
    //check random number value
    if (answer === 1) {
        text("NOT YET", 176, 200);
        text("IMPLEMENTED", 159, 229); 
    }
    else if(answer === 2) {
        text("HIGHLY", 176, 200);
        text("PROBABLE", 167, 229);
    }
    else if(answer === 3) {
        text("YES", 189, 200);
    }
    else if(answer === 4) {
        text("NOT REALLY", 164, 200);
    }
    else if(answer === 5) {
        text("LOW", 185, 200);
        text("POSSIBILITY", 165, 229);
    }
};

//change answer when mouse is clicked
mouseClicked = function(){
    answer = floor(random(1, 6));
    draw();
};
