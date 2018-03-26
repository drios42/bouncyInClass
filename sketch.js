var bouncys = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(60);

    for (var i = 0; i < 300; i++) {
        //
        bouncys[i] = new BouncyBall(random(width), random(height), random(25,70), random(1,4), color(random(255), random(255), random(255)));
    }
}

function draw() {
    background(255, 255, 0);
    fill(255, 0, 255);
    for(var i=0 ; i<bouncys.length;i++){
        bouncys[i].move();
        bouncys[i].show();
    }
}


class BouncyBall {
    constructor(x, y, size, speed, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
    }
    show() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }

    move() {
        this.x = this.x + this.speed;
    }
}


function mousePressed() {
   for(var i = 0; i<bouncys.length; i++){
       if( dist(mouseX,mouseY,bouncys[i].x, bouncys[i].y) < bouncys[i].size  ){
           bouncys[i].speed = bouncys[i].speed * -1;
          }
   }
}

          
          
          
          
          
          
          

//
//function keyPressed() {
//    myarray.splice(myarray.length - 1, 1);
//}
