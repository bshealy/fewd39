// Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
$("body").fadeIn();

// Give each paragraph a yellow background only when the mouse is over it.
$('p').on("mouseover",
 function(){
   $('p').css('background','yellow')});

   $('p').on("mouseout",
    function(){
      $('p').css('background','none')});

// Make a click of the title (<h2>) and simultaneously fade it to 25 percent opacity and grow its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.
// Bonus: Make the style switcher work.
// Challenge: React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).
