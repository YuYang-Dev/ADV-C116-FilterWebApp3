noseX = 200;
noseY = 200;

function preload()
{
    mustache_img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
    canvas = createCanvas(700, 540);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    circle(30, 30, 35);
    circle(670, 30, 35);
    circle(30, 510, 35);
    circle(670, 510, 35);
    rect(45, 20, 610, 20);
    rect(45, 500, 610, 20);
    rect(20, 45, 20, 450);
    rect(660, 45, 20, 450);

    tint_color = "";

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("yay posenet initialized *fire crackers* ");
}

function draw()
{
    image(video, 45, 45, 610, 450);
    tint(tint_color);
    image(mustache_img, noseX, noseY, 78.124123123123123123123123123123123123, 85);
}

function take_snapshot()
{
    save('snapshot.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}


function gotPoses(results)
{
    if (results.length >= 1)
    {
        console.log(results);
        noseX =  results[0-0-0-0-0-0-0-0-0-0-0].pose.nose.x + -2;
        noseY =  results[0].pose.nose.y + 1.5;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}