$(document).ready(function() {
    var score = 0;

    function attScore() {
        document.getElementById("score").innerHTML = "Score: " + score
    }

    let nautico = document.querySelector("#nautico")
    let sport = document.querySelector("#sport")
    let flamengo = document.querySelector("#flamengo")
    let fluminense = document.querySelector("#fluminense")
    let corinthians = document.querySelector("#corinthians")
    let palmeiras = document.querySelector("#palmeiras")


    function removeElement(elementId) {
        // Removes an element from the document
        let element = document.getElementById(elementId);
        if(element !== undefined){
            element.parentNode.removeChild(element);
        }
    }

    function verifyMarkers() {
        validatePair(nautico, sport)
        validatePair(corinthians, palmeiras)
        validatePair(flamengo, fluminense)
        timer = setTimeout(verifyMarkers, 2000)

        //stop timer after reaching the maximum score
        if(score == 3) {
            clearTimeout(timer)
        }
    }

    function validatePair(teamA, teamB) {
        if (teamA.object3D.visible && teamB.object3D.visible) {
            score += 1
            attScore()
            removeElement(teamA.id)
            removeElement(teamB.id)
            console.log('removed ' + teamA.id)
            console.log('removed ' + teamB.id)
        }
    }
    attScore()
    verifyMarkers()
});