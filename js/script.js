// JavaScript Document
$(document).ready(function(){
  $(".topnav").hide();
})
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

  // $(document).ready(function() {
  //   // Check if it's the first page
  //   if ($('body').hasClass('open')) {
  //     $('.topnav').hide(); // Hide the navigation bar
  //   }
  // });
    
  //   function redirectTo(pageId) {
  //   // Hide all pages
  //   var pages = document.getElementsByClassName('page');
  //   for (var i = 0; i < pages.length; i++) {
  //       pages[i].classList.remove('active');
  //   }
  //   // Show the selected page
  //   var selectedPage = document.getElementById(pageId);
  //   selectedPage.classList.add('active');
  // }

  


$("#button-home").click(function(){
       $("#open").hide();
       $(".topnav").show();
       $("#home").show();
  });
  
//login button
  $(".button-login").click(function(){
    $("#open").hide();
    $(".topnav").show();
    $("#login").show();
});
// login page button to take to home page
$("#button-login-page").click(function(){
  $("#login").hide();
  $(".topnav").show();
  $("#home").show();
});
// hamburger menu home button
$("#home-link").click(function(){
  $("section").not("#home").hide()
  $("#home").show()
});
// hamburger menu search button
$("#search-link").click(function(){
  $("section").not("#search").hide()
  $("#search").show()
});
// hamburger menu favourites button
$("#favourites-link").click(function(){
  $("section").not("#favourites").hide()
  $("#favourites").show()
});
// hamburger menu account button
$("#account-link").click(function(){
  $("section").not("#account").hide()
  $("#account").show()
});
// login to signup page button
$("#signup-button").click(function(){
  $("#login").hide()
  $("#register").show()
});
// view products page button
$("#button-viewmore").click(function(){
  $("#home").hide()
  $("#product").show()
});
// search castles from home page 
$(".search-castle-btn").click(function(){
  $("#home").hide()
  $("#search").show()
});
// booking page button from product page
$(".booking-form-submit").click(function(){
  $("#product").hide()
  $("#booking").show()
});
// booking confirmation page
$("#btn-booking").click(function(){
  $("#booking").hide()
  $("#bookingConfirm").show()
});

$('main').click(function(e){
  $('#myLinks').hide();
});
  

  

