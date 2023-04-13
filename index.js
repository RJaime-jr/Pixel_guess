let c = document.createElement("canvas");
let img1 = new Image();
let helpBut = document.getElementById("hint");
let pixelNum = [1, 4, 8, 16, 32, 64];
let arrNum = 5;
let imgBox = document.getElementById("imgBox");
let level = document.getElementById("level");
let enter = document.getElementById("enter");
let answer = false;


img1.onload = function () {
    document.getElementById('image1').remove();
    loadImage();

}


function loadImage() {
    //document.getElementById('image1').remove();
    w = img1.width;
    h = img1.height;

    c.width = w;
    c.height = h;
    ctx = c.getContext("2d");
    ctx.drawImage(img1, 0, 0);



    let pixelArr = ctx.getImageData(0, 0, w, h).data;
    let sample_size = pixelNum[arrNum];
    for (let y = 0; y < h; y += sample_size)
        for (let x = 0; x < w; x += sample_size) {
            let p = (x + (y * w)) * 4;
            ctx.fillStyle = "rgba(" + pixelArr[p] + "," + pixelArr[p + 1] + "," + pixelArr[p + 2] + "," + pixelArr[p + 3] + ")";
            ctx.fillRect(x, y, sample_size, sample_size);
        }

    let img2 = new Image();
    img2.src = c.toDataURL("image/jpeg");
    img2.width = 600;
    img2.id = ("img2")
    imgBox.appendChild(img2);
    //level.textContent = "Hint: " + arrNum;
    helpBut.textContent = "Hint: " + arrNum;
}

function reloadImage() {
    arrNum--;
    if (arrNum < 0) {
        arrNum = 5;
    }
    document.getElementById('img2').remove();
    loadImage();
    console.log(arrNum);


}

img1.src = document.getElementById("image1").src;



helpBut.onclick = function () {
    reloadImage();
}


enter.onclick = function () {
    // console.log(false);
    if (answer == false) {
        reloadImage();
        console.log(answer);



    }
    else {
        console.log(answer);

    }
}