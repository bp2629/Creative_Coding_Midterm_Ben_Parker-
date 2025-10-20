let r = 10
let c = 0
let counter = 0
let increment = 20
let bc = (150)

let alarmc = 255

function setup() {
 // put setup code here

 createCanvas(500,500);
 background(bc); 
}

function draw() {
  // put drawing code here
  
   counter += 1


  print(counter)


  // sleeping()
  



  //alarm(counter)

  eyesopen(counter)
  
  


}


function sleeping(){

  // if (counter == stop){
  //   increment = 0
  //   r = 0


  // }

  fill(c)
  stroke(0)
  ellipse(width/2,height/2, r,r)

  r += increment

  if (r > width * 2){
    
    r = 10 
    
    if (c == 0){
      c = 150
    
    }
    else{
      c = 0
    }
  }


}

function alarm(counter){
  // color = color + counter - start
  // if (counter >= start){
  //   fill(color,0,0)
  //   rect(0,0,width,height)

  // }
  

  if (counter % 10 === 0){
    alarmc = 0
  }

  else{
    alarmc = 255
  }
  fill(alarmc,0,0)
  rect(0,0,width,height)




}


function eyesopen(counter){
  counter = counter/ 7

  background(255)

  
  if (counter <= 40) {

    open = counter
  }
  else{

    open = 40
  }



  if (counter <= 20) {

    pupil = counter
  }
  else{

    pupil = 20
  }

   
  fill(255, 0, 0, 128)
  ellipse(width/4,width/2,200,open) // left eye
  fill(0)
  ellipse(width/4,width/2,20,pupil)


  fill(255, 0, 0, 128)
  ellipse(3*width/4,width/2,200,open) //  right eye 
  fill(0)
  ellipse(3*width/4,width/2,20,pupil)








}
