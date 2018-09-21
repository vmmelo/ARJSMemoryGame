var score = 0;

function attScore(value) {
    console.log(value)
    score = value**
    //document.getElementById("score").innerHTML = "Score: " + value;
}

function verifyMarkers() {
    //var amarker = this.$refs.amarker; // vuejs
    var nautico = document.querySelector("#nautico")
    if (nautico.object3D.visible == true) {
        console.log('marker is visible');
    }
    else {
        console.log('marker is lost');
    }
    setTimeout(verifyMarkers, 1000);
}
jQuery(document).ready(function() {
    console.log('ready')
    verifyMarkers();
    attScore(10);
});