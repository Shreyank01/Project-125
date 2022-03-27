function setup() {
    canvas = createCanvas(500,400);
    canvas.position(800,200);

    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(200,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses)
}

noseX = 0;
noseY = 0;
left_wristX = 0;
right_wristX = 0;
diffrence = 0;

function modelLoaded() {
    console.log("posenet is initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + "nose y = " + noseY);

        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;
        diffrence = Math.floor(left_wristX - right_wristX);

   

    }
}

function draw() {
    background("white");
    textSize(diffrence);
    text("Shreyank" , noseX , noseY);

    document.getElementById("result").innerHTML = "The size of the text is " + diffrence;
}

