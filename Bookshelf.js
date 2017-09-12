//declaring object
var book = [
    {
        title: "The Giver",
        author: "Lois Lowry",
        colourR: 230,
        colourG: 250,
        colourB: 100,
        love: 0
    },
    {
        title: "Harry Potter",
        author: "J. K. Rowling",
        colourR: 50,
        colourG: 150,
        colourB: 33,
        love: 1
    },
    {
        title: "Lord of the Rings",
        author: "J. R. R. Tolkein",
        colourR: 110,
        colourG: 70,
        colourB: 33,
        love: 1
    },
    {
        title: "The Mortal Instruments",
        author: "Cassandra Clare",
        colourR: 84,
        colourG: 70,
        colourB: 243,
        love: 1
    },
    {
        title: "The Alloy of Law",
        author: "Brandon Sanderson",
        colourR: 50,
        colourG: 150,
        colourB: 33,
        love: 1
    },
    {
        title: "The Alloy of Law",
        author: "Brandon Sanderson",
        colourR: 166,
        colourG: 256,
        colourB: 33,
        love: 1
    },
    {
        title: "The Hobbit",
        author: "J. R. R. Tolken",
        colourR: 251,
        colourG: 147,
        colourB: 33,
        love: 1
    },
    {
        title: "Ender's Game",
        author: "Orson Scott Card",
        colourR: 85,
        colourG: 140,
        colourB: 243,
        love: 1
    },
    {
        title: "Percy Jackson",
        author: "Rick Riordan",
        colourR: 20,
        colourG: 40,
        colourB: 236,
        love: 0
    },
    {
        title: "The Heroes of Olympus",
        author: "Rick Riordan",
        colourR: 84,
        colourG: 120,
        colourB: 243,
        love: 1
    },
    {
        title: "The Kane Chronicles",
        author: "Rick Riordan",
        colourR: 251,
        colourG: 26,
        colourB: 59,
        love: 0
    },
    {
        title: "Ender's Shadow",
        author: "Orson Scott Card",
        colourR: 84,
        colourG: 70,
        colourB: 243,
        love: 0
    },
    {
        title: "Hogwarts: A History",
        author: "Bathilda Bagshot",
        colourR: 50,
        colourG: 150,
        colourB: 33,
        love: 1
    },
];

// draw shelves
for(var j = 0; j < 4; j++){
    fill(173, 117, 33);
    rect(0, j * 120, width, 10);
}

// draw books
for (var i = 0; i < book.length; i++){
    var bookNumber = book[i];
    //top shelf
    if (i >= 0 && i <= 4){
        //draw book
        fill(bookNumber.colourR, bookNumber.colourG, bookNumber.colourB);
        rect(i * 100, 20, 90, 100, 3);
        fill(0, 0, 0);
        text(bookNumber.title, i * 100, 29, 70, 100);
        text(bookNumber.author, i * 100, 76, 70, 100);
        //book was good
        if (bookNumber.love === 0){
            ellipse(42 + i * 100, 109, 18, 18);
            image(getImage("cute/Heart"), 35 + i * 100, 97, 15, 25);
        }
        //book was amazing
        else if (bookNumber.love === 1){
            ellipse(42 + i * 100, 111, 18, 18);
            image(getImage("cute/Star"), 35 + i * 100, 97, 15, 25);
        }
    }
    //middle shelf
    else if (i >= 5 && i <= 8){
        //draw book
        fill(bookNumber.colourR, bookNumber.colourG, bookNumber.colourB);
        rect((i-5) * 100, 140, 90, 100, 3);
        fill(0, 0, 0);
        text(bookNumber.title, (i-5) * 100, 151, 70, 100);
        text(bookNumber.author, (i-5) * 100, 200, 70, 100);
        //book was good
        if (bookNumber.love === 0){
            ellipse(42 + (i-5) * 100, 230, 18, 18);
            image(getImage("cute/Heart"), 35 + (i-5) * 100, 218, 15, 25);
        }
        //book was amazing
        else if (bookNumber.love === 1){
            ellipse(42 + (i-5) * 100, 232, 18, 18);
            image(getImage("cute/Star"), 35 + (i-5) * 100, 218, 15, 25);
        }
    }
    //bottom shelf
    else if (i >= 9 && i <= 12){
        //draw book
        fill(bookNumber.colourR, bookNumber.colourG, bookNumber.colourB);
        rect((i-9) * 100, 260, 90, 100, 3);
        fill(0, 0, 0);
        text(bookNumber.title, (i-9) * 100, 270, 70, 100);
        text(bookNumber.author, (i-9) * 100, 320, 70, 100);
        //book was good
        if (bookNumber.love === 0){
            ellipse(42 + (i-9) * 100, 351, 18, 18);
            image(getImage("cute/Heart"), 35 + (i-9) * 100, 339, 15, 25);
        }
        //book was amazing
        else if (bookNumber.love === 1){
            ellipse(42 + (i-9) * 100, 352, 18, 18);
            image(getImage("cute/Star"), 35 + (i-9) * 100, 338, 15, 25);
        }
    }
}
