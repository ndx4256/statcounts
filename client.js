var u = document.getElementById("y");
u.addEventListener("click", v);

var p = document.getElementById("r");
gp();
setInterval(gp, 100);

function v() {
    // points = points + 1;
    // p.innerHTML =  "times clicked "+points;
    var request = new XMLHttpRequest();
    request.open("POST", "/points");
    request.send();
}

function gp() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", z);
    request.open("GET", "/getpoints");
    request.send();

}

function z() {
    var points = this.response;
    console.log(points)
    p.innerHTML = "times clicked " + points;
}
