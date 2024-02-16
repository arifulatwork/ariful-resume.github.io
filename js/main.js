
    // Get the modal
    var modal = document.getElementById("portfolio-modal");

    // Get the link that opens the modal
    var portfolioLink = document.querySelector('a[data-target="portfolio-modal"]');

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close");

    // When the user clicks the link, open the modal
    portfolioLink.onclick = function(event) {
        event.preventDefault(); // Prevent default link behavior
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
