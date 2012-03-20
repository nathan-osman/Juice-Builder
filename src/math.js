// This tiny little file provides a couple of math-related functions

function circleArea(radius) {
    /* @if debug */
        alert('Radius specified: ' + radius);
    /* @endif */
    return Math.PI * radius * radius;
}

function circleCircumference(diameter) {
    /* @if debug */
        alert('Diameter specified: ' + diameter);
    /* @endif */
    return Math.PI * diameter;
}