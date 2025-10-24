class Guy {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.clickX = this.x;
    this.clickY = this.y;
    this.speed = 10; // starter speed.
  }

  moveTo(x, y) {
    this.clickX = x;
    this.clickY = y;
    this.speed =  this.speed - .99
  }

  update() {
    let distanceX = this.clickX - this.x;
    let distanceY = this.clickY - this.y;
    let distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY); //Pythagorieam Triangle Math --> To make a new line to mouse click loaction. 

    if (distance == 0){
      distance = 1
    }; // CAN'T DIVIDE BY ZERO 

    this.x += (distanceX / distance) * this.speed;  //Go there at the speed in both x and y 
    this.y += (distanceY / distance) * this.speed;
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, 48, 48);
  }
}
