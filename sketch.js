let state = 1;
let message = 'Menu'


function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
    if (state == 1) {
        background(0, 0, 0)
    }
    else if (state == 2) {
        background(255, 0, 0);
    }
    else if (state == 3) {
        background(0, 255, 0);
    }
    else {
        background(0, 0, 255);
    }
}
function mouseClicked() {

}