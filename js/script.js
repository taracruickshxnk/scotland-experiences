// JavaScript Document

// HEADER SECTION

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// LOGIN PAGE

  $(document).ready(function() {
    // Check if it's the first page
    if ($('body').hasClass('open')) {
      $('.topnav').hide(); // Hide the navigation bar
    }
  });
    
    function redirectTo(pageId) {
    // Hide all pages
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    // Show the selected page
    var selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
  }