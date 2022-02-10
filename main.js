function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}
function takesnapshot(){
    save("1055359_backgrounds-fun-wallpapers-zone_2716x1810_h.jpg")
}

function modelloaded(){
    console.log('Posenet Is Initialized');
}

function gotPoses(result){
    if(result.lenght > 0)
    {
    console.log(result);
    console.log("nose x ="+result[0].pose.nose.x);
    console.log("nose y ="+result[0].pose.nose.y);
}
}
function draw(){
    image(video,0,0,300,300);
}