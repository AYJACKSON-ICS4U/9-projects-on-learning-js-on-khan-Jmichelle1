//declaring var
var xPositions = [];
var yPositions = [];

//randomize placement of raindrops
for (var j = 0; j < 400; j++){
    xPositions[j] = floor(random(1, 400));
    yPositions[j] = floor(random(1, 400));
}

//animate raindrops
draw = function() {
    background(204, 247, 255);
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        
        //change colour
        var colourOfDropGreen = floor(random(50, 255));
        var colourOfDropBlue = floor(random(50, 255));
        fill(0, colourOfDropGreen, colourOfDropBlue);
        
        //change shape
        if (i>=1 && i<=250) {
            ellipse(xPositions[i], yPositions[i], 5, 10);
        }
        else if (i>250 && i <=500) {
            rect(xPositions[i], yPositions[i], 3, 6, -7);
        }
        
        //move raindrop
        yPositions[i] += 5;
        if (yPositions[i] >= 400) {
            yPositions[i] = 1;
        }
    }
    
    //add more raindrops when mouse is clicked
    mouseClicked = function(){
        var j = xPositions.length;
        xPositions[j] = mouseX;
        yPositions[j] = mouseY;
    };
};
