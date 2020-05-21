var myPanel = document.getElementById("panel");
var subpanel = document.getElementById("panel-container");

myPanel.onmousemove = transformPanel;
myPanel.onmouseenter = handleMouseEnter;
myPanel.onmouseleave = handleMouseLeave;

var mouseX, mouseY;

var transformAmount = 3;

function transformPanel(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
    const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

    subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
}

function handleMouseEnter() {
    setTimeout(() => {
        subpanel.style.transition = "";
    }, 100);
    subpanel.style.transition = "transform 0.1s";
}

function handleMouseLeave() {
    subpanel.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel.style.transition = "";
    }, 100);

    subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}







var myPanel2 = document.getElementById("panel2");
var subpanel2 = document.getElementById("panel-container2");

myPanel2.onmousemove = transformPanel2;
myPanel2.onmouseenter = handleMouseEnter2;
myPanel2.onmouseleave = handleMouseLeave2;

var mouseX, mouseY;

var transformAmount =3;

function transformPanel2(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel2.offsetLeft + myPanel2.clientWidth / 2;
    const centerY = myPanel2.offsetTop + myPanel2.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel2.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel2.clientHeight / 2));

    subpanel2.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
}

function handleMouseEnter2() {
    setTimeout(() => {
        subpanel2.style.transition = "";
    }, 100);
    subpanel2.style.transition = "transform 0.1s";
}

function handleMouseLeave2() {
    subpanel2.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel2.style.transition = "";
    },0);

    subpanel2.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}




var myPanel3 = document.getElementById("panel3");
var subpanel3 = document.getElementById("panel-container3");

myPanel3.onmousemove = transformPanel3;
myPanel3.onmouseenter = handleMouseEnter3;
myPanel3.onmouseleave = handleMouseLeave3;

var mouseX, mouseY;

var transformAmount =3;

function transformPanel3(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel3.offsetLeft + myPanel3.clientWidth / 2;
    const centerY = myPanel3.offsetTop + myPanel3.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel3.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel3.clientHeight / 2));

    subpanel3.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
}

function handleMouseEnter3() {
    setTimeout(() => {
        subpanel3.style.transition = "";
    }, 100);
    subpanel3.style.transition = "transform 0.1s";
}

function handleMouseLeave3() {
    subpanel3.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel3.style.transition = "";
    },0);

    subpanel3.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}

