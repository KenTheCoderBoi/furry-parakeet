status = ""
video = ""
objects = []
function preload(){
    video = createVideo("communism.mp4")
    video.hide()
}

function setup(){
    canvas = createCanvas(480,380)
    canvas.center()
}
function modelLoaded(){
    console.log("model loaded")
    status=true;
    video.loop()
    video.speed(1)
    video.volume(1)
}
function draw(){
    image(video,0,0,480,380)

    if(status!=""){
    objectDetector.detect(video,gotResult)    
    document.getElementById("status").innerHTML = "status:dectecting object"
        if(objects.length>0){
                document.getElementById("object_amount").innerHTML = ''+objects.length+' object dectected'
        for (i=0;i<objects.length;i++){

        fill("#FF0000")
        noFill()
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        stroke('#FF0000')
        text(objects[i].label,objects[i].x+15,objects[i].y+15)
        }}
        }
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "status:detecting object"
}
function gotResult(error,results){
objects = results
console.log(results)
}