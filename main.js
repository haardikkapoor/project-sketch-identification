function setup(){
  canvas = createCanvas(300, 300);
  canvas.center()
  canvas.mouseReleased(identify);
}

function preload(){
  model = ml5.imageClassifier("DoodleNet", modelLoaded);
}

function modelLoaded(){
  console.log("just use my website😁😢😃☺")
}

function draw(){
  stroke("black");
  strokeWeight(13)


  if (mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
}

function clearcanvas(){
  background("white")
}

function  identify(){
   model.classify(canvas, showResult);
}

function showResult(error, result){
  if(error){
    console.log(error);
  }
  else {
    console.log(result);
     guess = result[0].label
    document.getElementById("sketch").innerHTML= "Sketch :" + result[0].label;
    document.getElementById("confidence").innerHTML= "Accuracy :" + result[0].confidence;
  }
    
}


sketches = ["apple" , "cake" ,"door" , "candle" , "matches" , "chair" , "bed" ,"clock","square", "hexagon" ,"butterfly", "camera" , "calculator","book","map","car","cat","cell phone","circle" , "diamond" ,"coffee_cup" ,"cookie", "crown","eye" ,"fish" ,"flower" , "hat" , "ice cream" ,"house","line","purse","envelope"]

rn = Math.floor(Math.random()* 32);

sketch = sketches[rn];

document.getElementById("sketch_name").innerHTML = "Sketch to be drawn :" + sketch


function check(){
  if(guess==sketch){
    window.alert("wonder ful ur drawig skills are good ! now go and study or u will be failed 😀")
    clearcanvas()
}
else{
  window.alert("just keep ur studies in trash and focus in drawing or u will be failed in drawin😀😀😁")
}
}
