class Guy {
  constructor() {
    this.x = 0
    this.y = height/2
    this.clickX = this.x
    this.clickY = this.y
    this.speed = 8; // starter speed.
    this.speed_change = 1 //decrease amount. 
    this.color = 0
  }

  moveTo(x, y) { // where you click is where the dot goes. And the speed decreases accordingly. 
    this.clickX = x
    this.clickY = y
    this.speed =  this.speed - this.speed_change
    
    
  }

  update() { // go in a straight line to where you clicked. 
    let distanceX = this.clickX - this.x
    let distanceY = this.clickY - this.y
    let distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY); //Pythagorieam Triangle Math --> To make a new line to mouse click loaction. 

    if (distance == 0){
      distance = 1
    }; // CAN'T DIVIDE BY ZERO  

    this.x += (distanceX / distance) * this.speed  //Go there at the speed in both x and y 
    this.y += (distanceY / distance) * this.speed


    if (this.speed <= 0){ //Fade out when it has completly slowed down//passed out. 
      this.speed_change = 0 
      this.color += 10
    }
  }


  display() {  //the dot/ the guy
    fill(255,this.color,this.color)
    ellipse(this.x, this.y, 40, 40)
  }
}



/// This link, even though its solving a slightly seperate problem in a different way, helped me with this part.
// *** Particularly the image because It made me occur why my dot wasn't going to the correct place. Made with think of A^2 + b^2 = c^2 phythagorian. 
//https://stackoverflow.com/questions/70267458/how-do-i-make-a-object-move-towards-the-mouse-in-p5-js 