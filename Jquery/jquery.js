
/*
// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btnz");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

*/

//Default active on home
$('#s1').addClass("active");


/*
Smooth scrolling
*/
$("#s1").click(function() {
     $('html, body').animate({
         scrollTop:        $("#burgertime").offset().top-65
     }, 1000);
  return false;
 });

$("#s2").click(function() {
     $('html, body').animate({
         scrollTop:        $("#sandwichtime").offset().top-100
     }, 1000);
  return false;
 });

$("#s3").click(function() {
     $('html, body').animate({
         scrollTop:        $("#sidestime").offset().top-100
     }, 1000);
  return false;
 });

$("#s4").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#specialtytime").offset().top-100
     }, 1000);
  return false;
 });

$("#toTop").click(function() {
     $('html, body').animate({
         scrollTop:        $("#burgertime").offset().top-65
     }, 1000);
  return false;
 });

$("#s5").click(function() {
     $('html, body').animate({
         scrollTop:        $("#desserttime").offset().top-45
     }, 1000);
  return false;
 });

/*$('#2').waypoint(function(event, direction) {

  $(".nav-container ul li").children().removeClass("active");
  $("#s2").addClass("active");
  
  if (direction === 'down') {
    offset = 90;
  } 
  else {
    offset = 20;
  }
});*/


/*
Using jquery waypoints to change active on scroll
*/
$('#sandwichtime').waypoint(function() {

  $(".navbar2 ul li").children().removeClass("active");
  $("#s2").addClass("active");
  
}, { offset: 101 });


$('#sidestime').waypoint(function() {
  $(".navbar2 ul li").children().removeClass("active");
  $("#s3").addClass("active");
}, { offset: 101 });

$('#specialtytime').waypoint(function() {
  $(".navbar2 ul li").children().removeClass("active");
  $("#s4").addClass("active");
}, { offset: 101 });

$('#burgertime').waypoint(function() {
  $(".navbar2 ul li").children().removeClass("active");
  $("#s1").addClass("active");
}, { offset: 0 });

$('#sandwichtime').waypoint(function() {
  $(".to-top").addClass("visible");
}, { offset: 100 });

$('#burgertime').waypoint(function(event, direction) {
  $(".to-top").removeClass("visible");
}, { offset: 30 });

$('#desserttime').waypoint(function() {
  $(".navbar2 ul li").children().removeClass("active");
  $("#s5").addClass("active");
}, { offset: 101 });
