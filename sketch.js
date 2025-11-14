let r = 10
let sleepr = 0
let sleepg = 0
let sleepb = 0
let counter = 0
let snooze_counter = 0 
let eyes_counter = 0
let time = 0
let starsx = new Array(30)
let starsy = new Array(30)
let alarmc = 255
let g;

function setup() {

 createCanvas(500,500);
 background(26, 0, 41); 

 g = new Guy()

}
 


function draw() {
   counter += 1 //time used in some antimations. 
   time += 1  //standard time for entire animation to run. 



   //TIMELINE
  if (time <= 150){
    sleeping()
  }

  else if (time <= 200 ){
    alarm(counter)
  }

  else if (time <= 300){
    sleeping()
  }

  else if (time <= 350){
    alarm(counter)
  }

  else if (time <= 550){
    snooze_counter += 1 

    snooze(snooze_counter)
  }

  else if (time <= 1180){
    eyes_counter +=1 
    eyesopen(eyes_counter)
  }

  else if (time <= 1350){
    coffee((random(100,275)))
  }


  else if (time <= 2600){
    maze()
    g.update()
    g.display();
  }

  

  else if (time <= 3100){
    background(0)
    stars()
  }

}







// FUNCTIONS BELOW 








function stars(){
  frameRate(5)
  background(0)

  starsx[0] = random(500) //Make first slot random position for star. 
  starsy[0] = random(500)
  

  for(let i = 0; i < starsx.length ; i++){ 
    fill(255-i*10)
    ellipse(starsx[i], starsy[i], 10, 10); //make fading stars. 
}

for(let i = starsx.length - 1;  i > 0; i-- ){
  starsx[i] = starsx[i-1];
  starsy[i] = starsy[i-1]; //cycle through fading stars. 
}
}

function coffee(drip){

  let pos = 100
  background(0)

  fill(255) //cup
  ellipse(width/2, height/2+50, 375, 400)

  
  strokeWeight(15) //handle
  stroke(255)
  line(width-65 ,height-192,width -20,height -192)
  line(width -20,height -192, width-20 ,height-112,)
  line(width-20 ,height-112,width-95 ,height-112)
  stroke(0)
  strokeWeight(0)

  fill(0) // background to create cup shape. 
  rect(0,50, width, height/2)
  fill(155) // spout
  rect(width/2-20,0, 40, 80)

  while (pos<350){ //cofee drops
    pos += random(20)

  stroke(0)
  fill(120, 52, 0)
  ellipse(width/2,pos,40,40)
  }

  fill(255) //cover up coffee dribble. 
  rect(width/2 -50,height/2 +50,100,100)



}

function maze(){
  background(0)
  
  stroke(255)
  strokeWeight(65) //single line creating maze. Left to right. 

  line(0,height/2,width/2,height-120)
  line(width/2,height-120, 65,65)
  line(65,65,65,height-65)
  line(65,height-65, width -120, height-32)
  line(width -120, height-32, width/2 -50, height/2 -200)
  line( width/ 2 -50, height/2 -200,width-20, height/2 +200 )
  line(width-20, height/2 +200 , width-70, height/2 )
  line( width-70, height/2 , height, height/2 )

  stroke(0) //Reset
  strokeWeight(0)
}


function mousePressed(){
  g.moveTo(mouseX,mouseY) // Guy movement. 
}


function sleeping(){

  fill(sleepr,sleepg,sleepb)
  stroke(0)

  ellipse(width/2,height/2, r,r) //growing circle. 

  r += 20

  if (r > width * 2){   //alternate between purple and black. 
    r = 10 

    if (sleepr == 0){ 
      sleepr = 26
      sleepb = 41
      sleepg = 0
    
    }
    else{
      sleepr = 0
      sleepb = 0
      sleepg = 0
    }
  }


}

function alarm(counter){


  if (counter % 10 == 0){ //alternate between red and black backroound rectangle every 10
    alarmc = 0
  }

  else{
    alarmc = 255
  }
  fill(alarmc,0,0)
  rect(0,0,width,height)
}


function eyesopen(counter){

  counter = counter/ 7  //slow down speed. 
  background(0)

  
  if (counter <= 40) { //open eyes

    open = counter
  }
  else{

    open = 40
  }
  if (counter <= 20) { // dilate pupils 

    pupil = counter
  }
  else{

    pupil = 20
  }

  if (counter>45){ //close eyes 
    open -= (counter-45)*5
  }

  if (counter>53){ //open quickly 
    open = 40
  }

  if (counter>60){ //close again. 
    open -= (counter-60)*5 
  }

  if (counter>68){ // quick open. 
    open = 40
  }

  if (counter>72){  //blinking for the next 3
    open = 0
  }
  if (counter>73){ 
    open = 40
  }
  if (counter>78){ 
    open = 0
  }
  if (counter>79){
    open = 40
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
  
  background(255,0,0)

  let snooze_r = 255 //orange color. 
  let snooze_b = 179 
  let snooze_g = 0


  if (counter <= 75){ //start with button on, finger off screen but moving foward. 

    fill(0)
    rect(100,0, 300,height,25) //screen
    fill(snooze_r, snooze_b, snooze_g)
    rect(125,200,250,75,15) //snooze button
    fill(150)
    rect(225,400,50,25,15) // other button
  
    fill(255, 225, 176) //finger
    stroke(0)
    rect(-2000 + counter * 20,200,800,125,50) 

  }
  else if(counter > 75){ //fade buttons, retract finger. 

    fill(0)
    rect(100,0, 300,height,25) //screen
  
    let extra_button = 150 - (counter - 75) * (counter/75)  //fade out other button. 
    fill(extra_button)
    rect(225,400,50,25,15) // other button



    let snooze_r = 255 - (counter - 75) * (counter/75) //fade out snooze button. 
    let snooze_b = 179 - (counter - 75)  * (counter/75)
    fill(snooze_r, snooze_b, snooze_g)
    rect(125,200,250,75,15) //snooze button


    fill(255, 225, 176)
    stroke(1)
    rect(250 -counter * 10  ,200,800,125,50)


  }
}


