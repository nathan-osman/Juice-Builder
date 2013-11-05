## Juice Builder

Juice Builder is a Python-based build framework for HTML, JavaScript, and CSS files. By using Juice, you gain preprocessor-like capabilities in HTML, JavaScript, and CSS. Some examples of where this might be useful:

- You are stuck deploying static HTML that contains a lot of common elements.
- You want to produce multiple JS files that differ based on some parameter known ahead of time.
- You want to incorporate a build system for JavaScript files into your project that manages minification for you.

## Using Juice

You use Juice by running the `juice.py` program, which will look for a `juice.json` file in the current directory and attempt to build it. The `juice.json` file contains a list of files included in the project and a list of options that are available.

A sample `juice.json` file looks like this:

    {
        "options": {
            "debug": { "value": false, "help": "enable debug messages" }
        },
        "files": [
            { "filename": "src/sample.js", "output": "sample.min.js", "compress": true }
        ]
    }

The above `juice.json` will look for a file `src/sample.js`, parse the Juice commands in the file, minify the file (using [Google's Closure Compiler](http://closure-compiler.appspot.com)), and write the output to `out/sample.min.js`. All of this can be done using the following command:

    python juice.py

If you wanted to enable the `debug` option, you would instead run the command:

    python juice.py --enable-debug

### Juice Example

Here is an example of Juice in action:

    // We only want the following line included in the output file
    // if the 'debug' option is set
    
    /* @if debug */
    alert(some_value);
    /* @endif */

### Projects Using Juice

- [StackTack](https://github.com/nathan-osman/StackTack)
- [Stack Exchange Post Editor](https://github.com/nathan-osman/Stack-Exchange-Post-Editor)

