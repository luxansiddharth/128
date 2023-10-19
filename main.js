song="";
rightWristX=0;
rightWristY=0;
 
leftWristX=0;
leftWristY=0;



function preload()
{
    song=loadsound("music.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{

    console.log('Posenet is initialized');
} 
function gotPoses(results)
{
if(results.length>0)

{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
   console.log("leftWristX= " + leftWristX + "LeftWristY= " +leftWristY);

   rightWristX=results[0].pose.rightWrist.x;
   rightWristY=results[0].pose.rightWrist.y;
   console.log("RightWristX = " + rightWristX + "RightWristY= " +rightWristY);
}



}





function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
}
