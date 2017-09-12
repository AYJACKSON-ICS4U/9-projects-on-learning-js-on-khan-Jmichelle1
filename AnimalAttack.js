//declaring variables
var bodyX = 200;
var bodyY = 220;
var bodyW = 100;
var bodyH = bodyW*3/5;
var eyes = 15;
var eyesPos = 145;
var eyesBig = 0;
var pawY = 271;
var earHeight = 115;
var earBase = 140;
var earBase2 = 130;
var DistancefromCenter = 200;
var pawSize = 18;

draw = function() {
    noStroke();
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 107); // body
    ellipse(bodyX, bodyY-70, bodyH, 47); // face
    
    //ears
    fill(240, 209, 36);
    triangle(DistancefromCenter-25, earBase, DistancefromCenter-30, earHeight, DistancefromCenter-10, earBase2);
    triangle(DistancefromCenter+10, earBase2, DistancefromCenter+30, earHeight, DistancefromCenter+25, earBase);
    
    //tail
    stroke(240, 209, 36);
    strokeWeight(10);
    line(DistancefromCenter-43, DistancefromCenter+44, DistancefromCenter-121, DistancefromCenter+26);
    
    //back paws
    fill(240, 209, 36);
    ellipse(DistancefromCenter-35, DistancefromCenter+55, pawSize-5, pawSize);
    ellipse(DistancefromCenter+35, DistancefromCenter+55, pawSize-5, pawSize);
    
    //legs
    stroke(196, 169, 32);
    strokeWeight(10);
    line(DistancefromCenter-15, DistancefromCenter+10, DistancefromCenter-28, pawY);
    line(DistancefromCenter+15, DistancefromCenter+10, DistancefromCenter+28, pawY);
    
    //paws
    noStroke();
    ellipse(DistancefromCenter-28, pawY, pawSize, pawSize);
    ellipse(DistancefromCenter+28, pawY, pawSize, pawSize);
    
    //nose
    fill(235, 120, 120);
    ellipse(DistancefromCenter, DistancefromCenter-44, 5, 4);
    
    //eyes
    //whites
    fill(250, 250, 250);
    ellipse(DistancefromCenter-10, eyesPos, eyes, eyes);
    ellipse(DistancefromCenter+10, eyesPos, eyes, eyes);
    //irises
    fill(92, 53, 11);
    ellipse(DistancefromCenter-10, eyesPos, eyes*1/2, eyes);
    ellipse(DistancefromCenter+10, eyesPos, eyes*1/2, eyes);
    
    //see if eyes are larger than 50
    if (eyes>=50){
        eyesBig=1;
    }
    else if (eyes===1){
        eyesBig=0;
    }
    
    //see if eyes should get bigger or smaller
    if (eyesBig===0){
        eyes++;
        pawY+=1;
    }
    else if(eyesBig===1){
        eyes--;
        pawY-=1;
    }
};
