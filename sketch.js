let r = 10
let c = 0
let counter = 0
let increment = 20
let bc = (150)

let alarmc = 255

let g;

function setup() {
 // put setup code here

 createCanvas(500,500);
 background(bc); 
 g = new Guy()
}

function draw() {
  // put drawing code here
  background(150)
   counter += 1


  print(counter)

  g.update()

  g.display();

  // sleeping()
  



  //alarm(counter)

  //eyesopen(counter)
  
  //snooze(counter)

}


function mousePressed(){

  g.moveTo(mouseX,mouseY)
  




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

  background(0)

  
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



function snooze(counter){

  background(150)

  

  let snooze_r = 255 
  let snooze_b = 179 
  let snooze_g = 0

  



 
  

  if (counter <= 75){

    fill(0)
    rect(100,0, 300,height,25) //screen
    fill(snooze_r, snooze_b, snooze_g)
    rect(125,200,250,75,15) //snooze button
    fill(150)
    rect(225,400,50,25,15) // other button
  
    fill(255, 225, 176)
    stroke(0)
    rect(-800 + counter * 4,200,800,125,50)

  }
  else if(counter > 75){

    fill(0)
    rect(100,0, 300,height,25) //screen
  
    let extra_button = 150 - (counter - 75) * (counter/75)
    fill(extra_button)
    rect(225,400,50,25,15) // other button



    let snooze_r = 255 - (counter - 75) * (counter/75)
    let snooze_b = 179 - (counter - 75)  * (counter/75)
    fill(snooze_r, snooze_b, snooze_g)
    rect(125,200,250,75,15) //snooze button


     fill(255, 225, 176)
    stroke(1)
    rect(-200 -counter * 4 ,200,800,125,50)


  }




print(counter)


}


