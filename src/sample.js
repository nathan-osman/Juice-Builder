// This is a sample JavaScript file created to demonstrate JuiceBuilder

/* @if use-math */

    /* @include src/math.js */
    
    var radius = input('Please enter a radius');
    alert('Area: ' + circleArea(radius));
    alert('Circumference: ' + circleCircumference(radius));
    
/* @endif */

// Juice's @include command is very flexible - it can quote and minify
// the file that is being included prior to actually embedding it:

/* @if embed-css */
    var stylesheet = /* @include src/style.css quote minify */;
/* @endif */

alert("All done!");