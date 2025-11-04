

let r = 10
let sleepr = 0
let sleepg = 0
let sleepb = 0
let counter = 0
let bc = (26, 0, 41)
let click = 0

let snooze_counter = 0 

let eyes_counter = 0

let time = 0


let starsx = new Array(300)
let starsy = new Array(300)

let alarmc = 255

let g;


function setup() {
 // put setup code here

 frameRate(30)

 createCanvas(500,500);
 background(26, 0, 41); 
 g = new Guy()

 yawn1 = new Yawn(0,0,.5)
 yawn2 = new Yawn(100,100,.5)







 
}
 


function draw() {
  // put drawing code here
  // background(150)
   counter += 1

   time += 1 


  print(counter)

  eyesopen(counter)



  // if (time <= 150){

  //   sleeping()

  // }

  // else if (time <= 200 ){

  //   alarm(counter)

  // }

  // else if (time <= 300){

  //   sleeping()

  // }

  // else if (time <= 350){

  //   alarm(counter)

  // }


  // else if (time <= 550){

  //   snooze_counter += 1 

  //   snooze(snooze_counter)

  // }

  // else if (time <= 780){

  //   eyes_counter +=1 
  //   eyesopen(eyes_counter)

  // }

  // else if (time <= 950){

  //   coffee((random(100,275)))

  // }


  // else if (time <= 1800){
    
  //   maze()
  //   g.update()
  //   g.display();
  // }

  

  // else if (time <= 2500){

  //   background(0)

  //   stars()
  // }
  




  




   //sleeping()
   //alarm(counter)
   // sleeping()
   //alarm(counter)
   //snooze(counter)
   //eyesopen(counter)
   // coffee((random(100,275)))
  // maze()
  //g.update()
 // g.display();
   // yawn1.update()
  // yawn1.display()

  // yawn2.update()
  // yawn2.display()
  // stars()

}

function stars(){



  starsx[0] = random(500)
  starsy[0] = random(500)
  

  for(let i = 0; i < starsx.length ; i++){ 
    fill(255-i*10)
    ellipse(starsx[i], starsy[i], 10, 10);
}

for(let i = starsx.length - 1;  i > 0; i-- ){
  starsx[i] = starsx[i-1];
  starsy[i] = starsy[i-1];
}


}






function coffee(drip){


  fill(255)
  ellipse(width/2, height/2+50, width, 400)

  fill(0)
  rect(0,50, width, height/2)

  fill(155)
  rect(width/2-20,0, 40, 80)

  stroke(0)
  fill(120, 52, 0)
  ellipse(width/2,drip,40,40)

}

function maze(){
  background(0)
  
  stroke(255)
  strokeWeight(65)

  line(width/2,0,width/2,height-120)
  line(width/2,height-120, 65,65)
  line(65,65,65,height-65)
  line(65,height-65, width -120, height-32)
  line(width -120, height-32, width-65, height/2)
  line( width-65, height/2,width-120, height/2 -60 )
  line(width-120, height/2 -60 , width-170, height/2 -150 )
  line( width-170, height/2 -150, width, 0 )
  stroke(0)
  strokeWeight(0)
  

  // beginShape();
  // vertex(width/2,0);
  // vertex(width/2,425);
  // vertex(width/2 -50 ,425);
  // vertex(width/2 -50 ,0);


  // // vertex(,);
  // // vertex(,);
  // // vertex(,);
  // // vertex(,);


  // endShape(CLOSE)

}


function mousePressed(){

  g.moveTo(mouseX,mouseY)


}


function sleeping(){

  fill(sleepr,sleepg,sleepb)
  stroke(0)
  ellipse(width/2,height/2, r,r)

  r += 20

  if (r > width * 2){
    
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
  

   background(255,0,0)

  

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
    rect(-2000 + counter * 20,200,800,125,50)

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
    rect(250 -counter * 10  ,200,800,125,50)


  }




print(counter)


}


