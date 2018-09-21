$(document).ready(function () {
    var score = 0
    var total_markers = 6

    // updates the score label
    function updateScore() {
        score = (total_markers - jQuery("body").find("a-marker").length) / 2
        document.getElementById("score").innerHTML = "Score: " + score
    }

    // reposition the score label considering the negative margins in body element
    function repositionScore() {
        let margin_top = parseFloat(jQuery('body').css('margin-top').replace('-', '')) +
            (jQuery( window ).height() * 3 / 100)
            + 'px'
        let margin_left = parseFloat(jQuery('body').css('margin-left').replace('-', '')) +
            (jQuery( window ).width() * 3 / 100)
            + 'px'

        jQuery('#score').css({
            'margin-left': margin_left,
            'margin-top': margin_top
        })
    }

    // creating makers
    let nautico = document.querySelector("#nautico")
    let sport = document.querySelector("#sport")
    let flamengo = document.querySelector("#flamengo")
    let fluminense = document.querySelector("#fluminense")
    let corinthians = document.querySelector("#corinthians")
    let palmeiras = document.querySelector("#palmeiras")

    // remove the markers after get a match
    function removeElement(elementId) {
        // Removes an element from the document
        let element = document.getElementById(elementId)
        if (element !== undefined) {
            element.parentNode.removeChild(element)
        }
    }

    // verify all pairs until reaching maximum score
    function verifyMarkers() {
        validatePair(nautico, sport)
        validatePair(corinthians, palmeiras)
        validatePair(flamengo, fluminense)
        let timer = setTimeout(verifyMarkers, 2000)
        repositionScore()
        //stop timer after reaching the maximum score
        if (score === 3) {
            clearTimeout(timer)
        }
    }

    // validate if a pair was found, increment score and remove the markers
    function validatePair(teamA, teamB) {
        if (teamA.object3D.visible && teamB.object3D.visible) {
            removeElement(teamA.id)
            removeElement(teamB.id)
            updateScore()
        }
    }

    repositionScore()
    updateScore()
    verifyMarkers()
});
