var cards = document.querySelectorAll(".card");
for (var i=0; i<cards.length; i++) {
    cards[i].addEventListener('click', function(e) {
        var link = this.querySelector(".cardlink");
        link.click();
    }, false);
}

function myFunction() {

    $.post( "/search", {test: "testt"}, function( data ) {
        alert(data)
    });
}