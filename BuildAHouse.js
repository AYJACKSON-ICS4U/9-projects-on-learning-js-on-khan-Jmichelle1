//set background colour
background(219, 255, 255);

//chimney
fill(255, 140, 0);
rect(100, 45, 40, 70);
fill(0, 0, 0);
rect(98, 35, 45, 10);

//roof
fill(197, 200, 214);
triangle(200, 28, 350, 150, 50, 150);

//window
fill(143, 71, 8);
arc(200, 130, 85, 85, 180, 360);
fill(53, 218, 240);
arc(200, 130, 80, 80, 180, 360);

//flowers
for (var x = 158; x < 245; x=x+8) {
    for (var y = 118; y < 126; y=y+5) {
        if(1===y%2){
            fill(235, 181, 181);
            ellipse(x+5, y-1, 5, 5);
        }
        else if(0===y%2){
            fill(255, 0, 0);
            ellipse(x+3, y+1, 5, 5);
        }
        
    }
}

//box
fill(250, 250, 250);
rect(155, 125, 90, 10);

//house
strokeWeight(1);
fill(255, 255, 255);
rect(60, 150, 280, 207);

//bricks
fill(173, 103, 12);
for (var x = 68; x < 330; x=x+30) {
    for (var y = 154; y < 350; y=y+20) {
        rect(x, y, 25, 15);
    }
}

//windows
strokeWeight(3);
fill(53, 218, 240);
for (var x = 82; x < 330; x=x+167) {
    for (var y = 155; y < 350; y=y+100) {
        rect(x, y, 70, 70);
    }
}

//door
fill(120, 80, 19);
rect(180, 280, 50, 77);

//door knob
fill(242, 229, 44);
strokeWeight(1);
ellipse(220, 325, 10, 10);



//grass
strokeWeight(2);
for (var x = 1; x < 400; x=x+5) {
    for (var y = 350; y < 400; y=y+5) {
        if(0===y%2){
            stroke(0, 218, 10);
        }
        else if(1===y%2){
            stroke(23, 161, 27);
        }
        line(x, y, x+5, y+5);
        line(x+5, y+5, x, y);
    }
}


//bushes
strokeWeight(1);
for (var x = 1; x < 400; x=x+61) {
    var bushDistance = floor(random(10, 30));
    for (var y = 365; y < 400; y=y+bushDistance) {
        var bushSize = floor(random(10, 30));
        var xDistance = floor(random(1, 40));
        if(0===y%2){
            fill(82, 222, 87);
        }
        else if(1===y%2){
            fill(23, 161, 27);
        }
        ellipse(x+xDistance, y, bushSize, bushSize);
    }
}
