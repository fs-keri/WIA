/*
     Name: Keri Ritenour
     Date:  June 2, 2016
     Class & Section:  WIA-0001
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

window.onload = function() {

    var canvasOne = document.getElementById("canvas1");
    canvasOne.width = 150;
    canvasOne.height = 150;

    if (canvasOne) {
        var ctx = canvasOne.getContext("2d");

        if (ctx) {
            //Style
            ctx.strokeStyle = "black";
            ctx.fillStyle = "rgb(10, 49, 66)";
            ctx.lineWidth = 10;
            //Draw
            ctx.strokeRect(0, 0, 50, 100);
            ctx.fillRect(0, 0, 50, 100);
        }
    }


    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/


    var canvasTwo = document.getElementById("canvas2");
    canvasTwo.width = 150;
    canvasTwo.height = 150;

    if (canvasTwo) {
        var ctx2 = canvasTwo.getContext("2d");
        var degrees = 360;
        var radians = (degrees / 180) * Math.PI;

        if (ctx2) {
            ctx2.fillStyle = "rgba(255, 0, 0, 0.5)";
            ctx2.strokeStyle = "black";
            ctx2.lineWidth = 30;

            ctx2.beginPath();
            ctx2.arc(50, 50, 20, 0, (Math.PI / 180) * degrees);
            ctx2.fill();


            ctx2.beginPath();
            ctx2.arc(50, 50, 30, 0, (Math.PI / 180) * degrees);
            ctx2.stroke();
        }
    }


    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/

    var canvasThree = document.getElementById("canvas3");
    canvasThree.width = 300;
    canvasThree.height = 250;

    if (canvasThree) {
        var ctx3 = canvasThree.getContext("2d");


        if (ctx3) {
            ctx3.fillStyle = "blue";
            ctx3.strokeStyle = "green";
            ctx3.lineWidth = 3;

            ctx3.beginPath();
            ctx3.moveTo(100, 100);
            ctx3.lineTo(115, 155);
            ctx3.lineTo(160, 160);
            ctx3.lineTo(130, 185);
            ctx3.lineTo(150, 230);
            ctx3.lineTo(105, 200);
            ctx3.lineTo(70, 230);
            ctx3.lineTo(80, 190);
            ctx3.lineTo(40, 165);
            ctx3.lineTo(85, 155);
            ctx3.lineTo(100, 100);
            ctx3.fill();
            ctx3.stroke();
        }
    }


    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/

    var canvasFour = document.getElementById("canvas4");
    canvasFour.width = 400;
    canvasFour.height = 300;

    if (canvasFour) {
        var ctx4 = canvasFour.getContext("2d");

        if (ctx4) {
            ctx4.fillStyle = "green";
            ctx4.strokeStyle = "blue";
            ctx4.lineWidth = 4;

            ctx4.beginPath();
            ctx4.moveTo(100, 300);
            ctx4.bezierCurveTo(125, 75, 375, 75, 400, 200);
            ctx4.bezierCurveTo(400, 175, 300, 175, 300, 200);
            ctx4.bezierCurveTo(300, 175, 200, 175, 200, 200);
            ctx4.bezierCurveTo(200, 175, 100, 175, 100, 200);
            ctx4.stroke();
            ctx4.fill();
        }
    }


    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

    var canvasFive = document.getElementById("canvas5");
    canvasFive.width = 510;
    canvasFive.height = 40;

    if (canvasFive) {
        var ctx5 = canvasFive.getContext("2d");

        if (ctx5) {

            var theString = "Web Interaction and Animation Rocks!";

            ctx5.fillStyle = "#cad8ce";
            ctx5.font = "20pt Arial";
            ctx5.strokeStyle = "#0a3142";

            ctx5.fillText(theString, 30, 30);
            ctx5.strokeText(theString, 30, 30);
        }
    }


    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

    var canvasSix = document.getElementById("canvas6");
    canvasSix.width = 1000;
    canvasSix.height = 1300;

    if (canvasSix) {
        var ctx6 = canvasSix.getContext("2d");

        if (ctx6) {
            var srcImg = document.getElementById("logo");
            ctx6.drawImage(srcImg, 0, 0);

            var srcImg = document.getElementById("logo");
            ctx6.drawImage(srcImg, 150, 600, 550, 300);

            var srcImg = document.getElementById("logo");
            ctx6.drawImage(srcImg, 0, 600, 600, 600, 30, 1000, 550, 350);
        }
    }


    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/
    var canvasSeven = document.getElementById("canvas7");
    canvasSeven.width = 800;
    canvasSeven.height = 500;

    if (canvasSeven) {
        var ctx7 = canvasSeven.getContext("2d");

        if (ctx7) {

            ctx7.fillStyle = "yellow";

            ctx7.beginPath();
            ctx7.arc(0, 0, 90, 280, .5 * Math.PI);
            ctx7.fill();

            var theString = "Web Interaction and Animation Rocks!";

            ctx7.fillStyle = "#cad8ce";
            ctx7.font = "20pt Arial";
            ctx7.strokeStyle = "#0a3142";

            ctx7.fillText(theString, 100, 100);
            ctx7.strokeText(theString, 100, 100);

            ctx7.fillStyle = "green";
            ctx7.fillRect(0, 340, 800, 10);
        }
    }
}



