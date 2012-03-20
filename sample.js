// This is a sample JavaScript file created to demonstrate JuiceBuilder

/* @if print-integer */
    /* @if use-prime */
        document.write(43);
    /* @else */
        document.write(42); // what else?
    /* @endif */
/* @else */
    document.write('No integer will be printed!');
/* @endif */

document.write("All done!");