function preload(){

}

function draw(){
  image(video,0,0,400,300);
}

function setup(){
  canvas = createCanvas(400,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function takeSnapshot(){
    save('My_Filter_Image.png');
}

function modelLoaded(){
   console.log('PoseNet is Initialized');
}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
    console.log(" X="+results[0].pose.nose.x);
    console.log(" Y="+results[0].pose.nose.y);
  }
}
