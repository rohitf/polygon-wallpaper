var canvas = document.getElementById('canvas');
var shapes = 5000;
var ctx, left, timer;

$(function(){
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        left = true;

        canvas.height = screen.height - 60;
    	canvas.width = screen.width + 20;
        
        //Try to cover all white spots
        drawShapes();
        drawShapes();
        drawShapes();

        timer = setInterval(function () {
            drawShapes();
        }, 5000);
    }
});

function drawShapes(){
    for (var i = 1; i <= shapes; i++) {
        ctx.beginPath();
        if (left) {
            ctx.moveTo(-10, randomize(canvas.height*2.5));
            left = false;
        } else {
            ctx.moveTo(randomize(canvas.width*2.5), -10);
            left = true;
        }
        ctx.lineTo(randomize(canvas.width + 50), randomize(canvas.height  + 50));
        ctx.lineTo(randomize(canvas.width + 50), randomize(canvas.height + 50));
        ctx.fillStyle = getRndColor();
        ctx.fill();
    }
}

function randomize(num) {
    var a = Math.floor(Math.random() * num);
    return a;
}

function sides() {
    var a = Math.floor(Math.random() * 10);
    return a;
}

function getRndColor() {
    var r = 255 * Math.random() | 0,
        g = 255 * Math.random() | 0,
        b = 255 * Math.random() | 0,
        alpha = 0.05;
    var final = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    return final;
}


$('#save').click(function () {
    clearInterval(timer);

    //Convert canvas to image    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var dataURL = canvas.toDataURL();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('canvasImg').src = dataURL;
    $('#canvas').hide();
    $('#canvasImg').show();
    
    // //Download image
    // var a = document.createElement('a');
    // a.href = dataURL;
    // a.download = "output.png";
    // document.body.appendChild(a);
    // console.log(a)
    // a.click();
    $('h4').text("Right click on the image to save a beautiful wallpaper!")
});
