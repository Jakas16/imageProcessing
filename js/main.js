/**
 * Created by DongWan on 2015-10-25.
 */


function handleFileSelect(evt) {
    var files = evt.target.files;

    for (var i = 0, f; f = files[i]; i++) {

        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        reader.onload = (function (theFile) {
            return function (e) {
                var span = document.createElement('span');
                span.innerHTML = ['<img id ="dong",img class="thumb" src="', e.target.result,
                    '" title="', escape(theFile.name), '"/>'
                ].join('');
                document.getElementById('list').insertBefore(span, null);
            };
        })(f);

        reader.readAsDataURL(f);
    }
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);

function negative() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i] = 255 - data[i];
            // green
            data[i + 1] = 255 - data[i + 1];
            // blue
            data[i + 2] = 255 - data[i + 2];
        }
        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}

function show() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 0;
        var y = 0;
        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);

        context.drawImage(imageObj, x, y);

        var data = imageData.data;
        console.log(imageData);
        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i] = data[i];
            // green
            data[i + 1] = data[i + 1];
            // blue
            data[i + 2] = data[i + 2];
        }


        context.putImageData(imageData, imageData.width, imageData.height);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}

function GrayScale() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            // red
            var value = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
            data[i] = value;
            // green
            data[i + 1] = value;
            // blue
            data[i + 2] = value;
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}

function bright() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
        var value = Number(prompt("put values"));
        for (var i = 0; i < data.length; i += 4) {
            // red
            if (data[i] + value > 255) {
                data[i] = 255;
            } else {
                data[i] = data[i] + value;
            }

            if (data[i + 1] + value > 255) {
                data[i + 1] = 255;
            } else {
                data[i + 1] = data[i + 1] + value;
            }

            if (data[i + 2] + value > 255) {
                data[i + 2] = 255;
            } else {
                data[i + 2] = data[i + 2] + value;
            }
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}

function MoreR() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
        var value = Number(prompt("put values of Red"));
        for (var i = 0; i < data.length; i += 4) {
            // red
            if (data[i] + value > 255) {
                data[i] = 255;
            } else {
                data[i] = data[i] + value;
            }

            data[i + 1] = data[i + 1];
            data[i + 2] = data[i + 2];
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}

function MoreG() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
        var value = Number(prompt("put values of Green"));
        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i] = data[i];
            if (data[i + 1] + value > 255) {
                data[i + 1] = 255;
            } else {
                data[i + 1] = data[i + 1] + value;
            }
            data[i + 2] = data[i + 2];
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function MoreB() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
        var value = Number(prompt("put values of Blue"));
        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i] = data[i];

            data[i + 1] = data[i + 1];
            if (data[i + 2] + value > 255) {
                data[i + 2] = 255;
            } else {
                data[i + 2] = data[i + 2] + value;
            }
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function Subtract() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
        var value = Number(prompt("put values"));
        for (var i = 0; i < data.length; i += 4) {
            // red
            if (data[i] - value < 0) {
                data[i] = 0;
            } else {
                data[i] = data[i] - value;
            }

            if (data[i + 1] - value < 0) {
                data[i + 1] = 0;
            } else {
                data[i + 1] = data[i + 1] - value;
            }

            if (data[i + 2] - value < 0) {
                data[i + 2] = 0;
            } else {
                data[i + 2] = data[i + 2] - value;
            }
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}

function Multiply() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
        var value = Number(prompt("put values"));
        for (var i = 0; i < data.length; i += 4) {
            // red
            if (data[i] * value > 255) {
                data[i] = 255;
            } else if (data[i] * value < 0) {
                data[i] = 0;
            } else {
                data[i] = data[i] * value;
            }

            if (data[i + 1] * value > 255) {
                data[i + 1] = 255;
            } else if (data[i + 1] * value < 0) {
                data[i + 1] = 0;
            } else {
                data[i + 1] = data[i + 1] * value;
            }

            if (data[i + 2] * value > 255) {
                data[i + 2] = 255;
            } else if (data[i + 2] * value < 0) {
                data[i + 2] = 0;
            } else {
                data[i + 2] = data[i + 2] * value;
            }
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function Division() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
        var value = Number(prompt("put values"));
        for (var i = 0; i < data.length; i += 4) {
            // red
            if (data[i] / value > 255) {
                data[i] = 255;
            } else if (data[i] / value < 0) {
                data[i] = 0;
            } else {
                data[i] = data[i] / value;
            }

            if (data[i + 1] / value > 255) {
                data[i + 1] = 255;
            } else if (data[i + 1] / value < 0) {
                data[i + 1] = 0;
            } else {
                data[i + 1] = data[i + 1] / value;
            }

            if (data[i + 2] / value > 255) {
                data[i + 2] = 255;
            } else if (data[i + 2] / value < 0) {
                data[i + 2] = 0;
            } else {
                data[i + 2] = data[i + 2] / value;
            }
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function ANDOperate() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i] = data[i] & 128;
            // green
            data[i + 1] = data[i + 1] & 128;
            // blue
            data[i + 2] = data[i + 2] & 128;
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function OROperate() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i] = data[i] || 128;
            // green
            data[i + 1] = data[i + 1] || 128;
            // blue
            data[i + 2] = data[i + 2] || 128;
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}

function XOROperate() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i] = data[i] ^ 128;
            // green
            data[i + 1] = data[i + 1] ^ 128;
            // blue
            data[i + 2] = data[i + 2] ^ 128;
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}



function GammaCorrection() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i] = Math.pow(data[i], (1 / 0.7));
            // green
            data[i + 1] = Math.pow(data[i + 1], (1 / 0.7));
            // blue
            data[i + 2] = Math.pow(data[i + 2], (1 / 0.7));
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function Binarization() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
        var value = Number(prompt("Put the values"));
        for (var i = 0; i < data.length; i += 4) {
            // red
            if (data[i] > value) {
                data[i] = 255;
            } else {
                data[i] = 0;
            }

            if (data[i + 1] > value) {
                data[i + 1] = 255;
            } else {
                data[i + 1] = 0;
            }

            if (data[i + 2] > value) {
                data[i + 2] = 255;
            } else {
                data[i + 2] = 0;
            }
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}

function EndIn() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        var MAXR = data[0];
        var MAXG = data[0];
        var MAXB = data[1];
        var MINR = data[1];
        var MINB = data[2];
        var MING = data[2];

        for (var i = 0; i < data.length; i += 4) {
            if (data[i] < MINR) {
                MINR = data[i];
            }

            if (data[i] > MAXR) {
                MAXR = data[i];
            }

            if (data[i + 1] < MING) {
                MING = data[i + 1];
            }

            if (data[i + 1] > MAXG) {
                MAXG = data[i + 1];
            }

            if (data[i + 2] < MINB) {
                MINB = data[i + 2];
            }

            if (data[i + 2] > MAXB) {
                MAXB = data[i + 2];
            }
        }

        MAXR = MAXR - 50;
        MINR = MINR + 50;
        MAXG = MAXG - 50;
        MING = MING + 50;
        MAXB = MAXB - 50;
        MINB = MINB + 50;
        var inR = 0;
        var outR = 0;
        var inG = 0;
        var outG = 0;
        var inB = 0;
        var outB = 0;

        for (var i = 0; i < data.length; i += 4) {
            // red
            inR = data[i];
            outR = ((inR - MINR) * 255) / (MAXR - MINR);


            inG = data[i + 1];
            outG = ((inG - MING) * 255) / (MAXG - MING);

            inB = data[i + 2];
            outB = ((inB - MINB) * 255) / (MAXB - MINB);

            if (inR < MINR) {
                outR = 0;
            }

            if (inR > MAXR) {
                outR = 255;
            } else {
                outR = ((inR - MINR) * 255) / (MAXR - MINR);
            }

            if (inG < MING) {
                outG = 0;
            }

            if (inG > MAXG) {
                outG = 255;
            } else {
                outG = ((inG - MING) * 255) / (MAXG - MING);
            }

            if (inB < MINB) {
                outB = 0;
            }

            if (inB > MAXB) {
                outB = 255;
            } else {
                outB = ((inB - MINB) * 255) / (MAXB - MINB);
            }

            data[i] = Math.floor(outR);
            data[i + 1] = Math.floor(outG);
            data[i + 2] = Math.floor(outB);
        }



        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function Noise() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;
        var z = 1 + Math.floor(Math.random() * 255);
        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            data[i] = data[i];
            data[i + 1] = data[i + 1];
            data[i + 2] = data[i + 2];
        }

        for (var i = 0; i < data.length; i = i + z) {
            data[i] = 1 + Math.floor(Math.random() * 255);
            data[i + 1] = 1 + Math.floor(Math.random() * 255);
            data[i + 2] = 1 + Math.floor(Math.random() * 255);
        }



        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function Sepia() {
    var noise = 20;
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;
        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        var r = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
        var g = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255];
        var b = [53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 61, 61, 61, 62, 62, 63, 63, 63, 64, 65, 65, 65, 66, 66, 67, 67, 67, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 73, 74, 74, 75, 75, 76, 77, 77, 78, 78, 79, 79, 80, 81, 81, 82, 82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 93, 93, 94, 94, 95, 95, 96, 97, 98, 98, 99, 99, 100, 101, 102, 102, 103, 104, 105, 105, 106, 106, 107, 108, 109, 109, 110, 111, 111, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 121, 121, 122, 122, 123, 124, 125, 126, 126, 127, 128, 129, 129, 130, 131, 132, 132, 133, 134, 134, 135, 136, 137, 137, 138, 139, 140, 140, 141, 142, 142, 143, 144, 145, 145, 146, 146, 148, 148, 149, 149, 150, 151, 152, 152, 153, 153, 154, 155, 156, 156, 157, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 164, 164, 165, 165, 166, 166, 167, 168, 168, 169, 169, 170, 170, 171, 172, 172, 173, 173, 174, 174, 175, 176, 176, 177, 177, 177, 178, 178, 179, 180, 180, 181, 181, 181, 182, 182, 183, 184, 184, 184, 185, 185, 186, 186, 186, 187, 188, 188, 188, 189, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 193, 194, 194, 194, 195, 196, 196, 196, 197, 197, 197, 198, 199];
        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i] = r[data[i]];
            // green
            data[i + 1] = g[data[i + 1]];
            // blue
            data[i + 2] = b[data[i + 2]];

            if (noise > 0) {
                var noise = Math.round(noise - Math.random() * noise);

                for (var j = 0; j < 3; j++) {
                    var IPN = noise + data[i + j];
                    data[i + j] = (IPN > 255) ? 255 : IPN;
                }
            }
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}



function FlipHorizontal() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;
        var p1 = 0.99;
        var p2 = 0.99;
        var p3 = 0.99;
        var er = 0; // extra red
        var eg = 0; // extra green
        var eb = 0; // extra blue
        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
        var k = imageObj.width;
        var j = imageObj.height;
        for (var m = 0; m < k / 2; m++) {
            for (var n = 0; n < j; n++) {
                var a = (n * k + m);
                var a2 = (n * k + ((k - 1) - m));
                var ip1 = data[a * 4] * p1 + er;
                var ip2 = data[a * 4 + 1] * p2 + eg;
                var ip3 = data[a * 4 + 2] * p3 + eb;

                data[a * 4] = data[a2 * 4] * p1 + er;
                data[a * 4 + 1] = data[a2 * 4 + 1] * p2 + eg;
                data[a * 4 + 2] = data[a2 * 4 + 2] * p3 + eb;

                data[a2 * 4] = ip1;
                data[a2 * 4 + 1] = ip2;
                data[a2 * 4 + 2] = ip3;

            }
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function HDR() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;
        var p1 = 0.99;
        var p2 = 0.99;
        var p3 = 0.99;
        var er = 0; // extra red
        var eg = 0; // extra green
        var eb = 0; // extra blue
        context.drawImage(imageObj, x, y);
        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        function changeSinContrast(par) {
            var dPow = 4;
            var iMid = 128;

            if (par > 0 && par < iMid) {
                par = Math.sin(Math.PI * ((90 - (par / dPow)) / 180)) * par;
            } else if (par >= iMid) {
                par = Math.sin(Math.PI * ((90 - ((256 - par)) / dPow) / 180)) * par;
            }

            return par;
        }

        var iMid = 128;
        var dPow = 3;
        for (var i = 0; i < data.length; i += 4) {
            // red
            data[i + 0] = changeSinContrast(imageData.data[i + 0]);
            // green
            data[i + 1] = changeSinContrast(imageData.data[i + 1]);
            // blue
            data[i + 2] = changeSinContrast(imageData.data[i + 2]);
        }

        context.putImageData(imageData, x + 800, y);


    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function Mosaic() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var x = 69;
        var y = 50;
        var blockSize = Math.max(1, parseFloat(4 || 10));

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for (var q = 0; q < imageObj.height; q += blockSize) {
            var offsetY = imageObj.width * 4 * q;
            var blockSizeY = (imageObj.height > q + blockSize) ? blockSize : q + blockSize - q;
            var cCols = {
                r: 0,
                g: 0,
                b: 0
            }

            for (var e = 0; e < imageObj.width; e++) {
                var index = offsetY + e * 4;
                if (imageObj.width % blockSize == 0) {
                    var cw = (((e + blockSize < imageObj.width) ? blockSize : imageObj.width - e) / 2) | 0;
                    var ch = (((q + blockSize < imageObj.height) ? blockSize : imageObj.height - y) / 2) | 0;

                    var cindex = (imageObj.width * 4 * (q + ch)) + ((e + cw) * 4);
                    cCols.r = data[cindex];
                    cCols.g = data[cindex + 1];
                    cCols.b = data[cindex + 2];
                }

                for (var by = 0; by < blockSizeY && (q + by) < imageObj.height; by++) {
                    var deltaY = by * imageObj.width * 4;
                    data[index + deltaY] = cCols.r;
                    data[index + 1 + deltaY] = cCols.g;
                    data[index + 2 + deltaY] = cCols.b;
                }
            }
        }


        context.putImageData(imageData, x + 800, y);
    }


    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}


function Embossing1() {
    var imgsrc = document.getElementById("dong").src;

    function drawImage(imageObj) {
        var matrix = [-2, -1, 0, -1, 1, 1, 0, 1, 2];

        function normalizeMatrix(m) {

            var j = 0;

            for (var i = 0; i < m.length; i++) {

                j += m[i];

            }

            for (var i = 0; i < m.length; i++) {

                m[i] /= j;

            }

            return m;

        }




        function convertCoordinates(x, y, w) {

            return x + (y * w);

        }



        function findColorDiff(dif, dest, src) {

            return dif * dest + (1 - dif) * src;

        }

        var canvas = document.getElementById('myCanvas');

        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1500, 900);
        var x = 69;
        var y = 50;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        matrix = normalizeMatrix(matrix);

        var mSize = Math.sqrt(matrix.length);

        for (var i = 1; i < imageObj.width - 1; i++) {
            for (var j = 1; j < imageObj.height - 1; j++) {
                var sumR = sumG = sumB = 0;

                for (var h = 0; h < mSize; h++) {
                    for (var w = 0; w < mSize; w++) {
                        var r = convertCoordinates(i + h - 1, j + w - 1, imageObj.width) << 2;

                        var currentPixel = {
                            r: data[r],
                            g: data[r + 1],
                            b: data[r + 2]
                        };

                        sumR += currentPixel.r * matrix[w + h * mSize];
                        sumG += currentPixel.g * matrix[w + h * mSize];
                        sumB += currentPixel.b * matrix[w + h * mSize];
                    }
                }
                var rf = convertCoordinates(i, j, imageObj.width) << 2;
                data[rf] = findColorDiff(0.5, sumR, data[rf]);
                data[rf + 1] = findColorDiff(0.5, sumR, data[rf]);
                data[rf + 2] = findColorDiff(0.5, sumR, data[rf]);

            }
        }


        context.putImageData(imageData, x + 800, y);
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        drawImage(this);
    };
    imageObj.src = imgsrc;
}

function fileinfo() {

    var file = document.getElementById("files").files[0];
    document.getElementById("table").innerHTML += "<tr><td>파일이름</td><td>" + file.name + "</td></tr>";
    document.getElementById("table").innerHTML += "<tr><td>파일크기</td><td>" + file.size + "</td></tr>";
    document.getElementById("table").innerHTML += "<tr><td>파일타입</td><td>" + file.type + "</td></tr>";
    document.getElementById("table").innerHTML += "<tr><td>파일수정날짜</td><td>" + file.lastModifiedDate + "</td></tr>";
}



var ctx, canvas;
var started = false;
var x, y;


window.onload = function () {

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
};


function drawStart() {
    ctx.beginPath();
    ctx.moveTo(x, y);
    started = true;
}

function drawMove() {

    if (event.clientX || event.clientX == 0) {
        x = event.clientX - 85;
        y = event.clientY - 200;
    }
    if (started) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function drawEnd() {
    ctx.stroke();
    ctx.beginPath();
    started = false;
}

function toDataURL() {
    document.getElementById('theImage').src = canvas.toDataURL();
}

function reload() {
    location.reload();
}