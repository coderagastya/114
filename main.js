noseX= 0;
noseY= 0 ;
function preload() {
mushtash=loadImage('https://tse3.mm.bing.net/th?id=OIP.LZjY_i8nPa_SCorbtI42vQHaHa&pid=Api&P=0&w=157&h=157')
}

function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
console.log("poseNet is initialized");
}

function gotPoses(results) {
    if(results.lenght> 0 ){      
     console.log(results);
    mushX= results[0].pose.mush.x
    mushY= results[0].pose.mush.y
    console.log("mush x= "+ mushX)
    console.log("mush y= "+ mushY);
    }
    }

function draw(){
image(video,0,0,300,300)
fill(225, 0, 0)
stroke(225, 0, 0)
circle(mushX, mushY, 20)
image(mushtash, mushX, mushY, 30, 30)
}

function take_snapshot() {
    save("my_image.png")
}
