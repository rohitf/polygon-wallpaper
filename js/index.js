var canvas = document.getElementById('canvas');

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
        alpha = 0.05; //Math.random().toFixed(1);
    var final = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    return final;
}

$('*').click(function () {
    clearInterval(timer);
    $('button').show();
});

$('button').click(function () {
    $(this).css('left', '-400px');
    $('h3').text("Right click and save a beautiful background!");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var dataURL = canvas.toDataURL();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('canvasImg').src = dataURL;
    $('#canvasImg').css('border', '5px solid black');
    $('#canvas').hide();
    $('#canvasImg').show();
});

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var left = true;

    canvas.height = 495;
	  canvas.width = canvas.height * 1.76;
  
    var timer = setInterval(function () {
        for (var i = 1; i <= 1000; i++) {
            ctx.beginPath();
            if (left) {
                ctx.moveTo(0, randomize(canvas.height + 10));
                left = false;
            } else {
                ctx.moveTo(randomize(canvas.width+ 10), 0);
                left = true;
            }
            ctx.lineTo(randomize(canvas.width + 50), randomize(canvas.height  + 50));
            ctx.lineTo(randomize(canvas.width + 50), randomize(canvas.height + 50));
            ctx.fillStyle = getRndColor();
            ctx.fill();
        }
    }, 1000);
}