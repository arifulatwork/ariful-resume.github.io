// Get the portfolio modal
var portfolioModal = document.getElementById("portfolio-modal");

// Get the link that opens the portfolio modal
var portfolioLink = document.querySelector('a[data-target="portfolio-modal"]');

// Get the <span> element that closes the portfolio modal
var portfolioCloseBtn = portfolioModal.querySelector(".close");

// When the user clicks the link to open the portfolio modal, open it
portfolioLink.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    portfolioModal.style.display = "block";
}

// When the user clicks on <span> (x) in the portfolio modal, close it
portfolioCloseBtn.onclick = function() {
    portfolioModal.style.display = "none";
}

// Get the resume modal
var resumeModal = document.getElementById("resume-modal");

// Get the link for the resume
var resumeLink = document.getElementById("resume-link");

// When the user clicks the resume link, open the resume modal
resumeLink.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    resumeModal.style.display = "block";
}

// Get the <span> element that closes the resume modal
var resumeCloseBtn = resumeModal.querySelector(".close");

// When the user clicks on <span> (x) in the resume modal, close the modal
resumeCloseBtn.onclick = function() {
    resumeModal.style.display = "none";
}

// When the user clicks anywhere outside of the resume modal, close it
window.onclick = function(event) {
    if (event.target == resumeModal) {
        resumeModal.style.display = "none";
    } else if (event.target == portfolioModal) {
        portfolioModal.style.display = "none";
    }
}


// -----------------for my book--------------------


// Get the books modal
var booksModal = document.getElementById("books-modal");

// Get the link for the books
var booksLink = document.getElementById("books-link");

// When the user clicks the books link, open the books modal
booksLink.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    booksModal.style.display = "block";
}

// Get the <span> element that closes the books modal
var booksCloseBtn = booksModal.querySelector(".close");

// When the user clicks on <span> (x) in the books modal, close the modal
booksCloseBtn.onclick = function() {
    booksModal.style.display = "none";
}

// When the user clicks anywhere outside of the books modal, close it
window.onclick = function(event) {
    if (event.target == booksModal) {
        booksModal.style.display = "none";
    }
}



// Welcome Image

document.addEventListener("DOMContentLoaded", function() {
    var visitedProfile = localStorage.getItem("visitedProfile");

    // If it's the user's first visit, show the image modal
    if (!visitedProfile) {
        var imageModal = document.getElementById("image-modal");
        imageModal.style.display = "block";
        
        // Set the flag indicating the user has visited the profile
        localStorage.setItem("visitedProfile", "true");
    }

    // Close the modal when the close button is clicked
    var closeBtn = document.querySelector("#image-modal .close");
    closeBtn.addEventListener("click", function() {
        imageModal.style.display = "none";
    });

    // Close the modal when clicking outside the modal
    window.addEventListener("click", function(event) {
        if (event.target == imageModal) {
            imageModal.style.display = "none";
        }
    });
});

// Welcome Image End
