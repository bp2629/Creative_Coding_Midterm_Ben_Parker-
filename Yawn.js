class Yawn {
  constructor(x = width / 2, y = height / 2, size = .5) {
    this.x = x
    this.y = y
    this.size = size
    this.counter = 0

  }


  update() {
    this.counter += 1;
    if (this.counter > 200){
      this.counter = 0;
    } 
   
  }
  
  display() {

    push()
    translate(this.x,this.y)
    scale(this.size)

    if (this.counter<200){ 
      fill(255) 
      ellipse(width/2,height/2,width,height)
    
      fill(0) 
      ellipse(width/4,height/4 - (this.counter/4) +10, 100 , 50 - (this.counter/4) )
    
      fill(0) 
      ellipse(3* width/4,height/4  - (this.counter/4) + 10, 100 , 50 - (this.counter/4) )
    
      fill(0)
      ellipse(width/2 - 20,height/2 - (this.counter/4),20,20)
    
    
      fill(0)
      ellipse(width/2 + 20,height/2 - (this.counter/4),20,20)
    
      fill(0)
      ellipse(width/2, 3* height /4, 300,this.counter)}

      pop()
  
   }
}
