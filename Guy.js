class Guy {
  constructor() {
    this.x = width / 2
    this.y = 0
    this.clickX = this.x
    this.clickY = this.y
    this.speed = 8; // starter speed.
    this.speed_change = 1
    this.color = 0
  }

  moveTo(x, y) {
    this.clickX = x
    this.clickY = y
    this.speed =  this.speed - this.speed_change
    
    
  }

  update() {
    let distanceX = this.clickX - this.x
    let distanceY = this.clickY - this.y
    let distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY); //Pythagorieam Triangle Math --> To make a new line to mouse click loaction. 

    if (distance == 0){
      distance = 1
    }; // CAN'T DIVIDE BY ZERO 

    this.x += (distanceX / distance) * this.speed  //Go there at the speed in both x and y 
    this.y += (distanceY / distance) * this.speed


    if (this.speed <= 0){
      this.speed_change = 0
      this.color += 10
    }
  }



  display() {
    fill(255,this.color,this.color)
    ellipse(this.x, this.y, 40, 40)
  }
}
