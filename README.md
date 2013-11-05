<h2>Juice Builder</h2>
<p>Juice Builder is a Python-based build framework for HTML, JavaScript, and CSS files. By using Juice, you gain preprocessor-like capabilities in HTML, JavaScript, and CSS. Some examples of where this might be useful:</p>
<ul>
  <li>You are stuck deploying static HTML that contains a lot of common elements.</li>
  <li>You want to produce multiple JS files that differ based on some parameter known ahead of time.</li>
  <li>You want to incorporate a build system for JavaScript files into your project that manages minification for you.</li>
</ul>
<h3>Using Juice</h3>
<p>You use Juice by running the <code>juice.py</code> program, which will look for a <code>juice.json</code> file in the current directory and attempt to build it. The <code>juice.json</code> file contains a list of files included in the project and a list of options that are available.</p>
<p>A sample <code>juice.json</code> file looks like this:</p>
<pre><code>{
    "options": {
        "debug": { "value": false, "help": "enable debug messages" }
    },
    "files": [
        { "filename": "src/sample.js", "output": "sample.min.js" }
    ]
}</code></pre>
<p>The above <code>juice.json</code> will look for a file <code>src/sample.js</code>, parse the Juice commands in the file, minify the file (using <a href="http://closure-compiler.appspot.com">Google's Closure Compiler</a>), and write the output to <code>out/sample.min.js</code>. All of this can be done using the following command:</p>
<pre><code>python juice.py</code></pre>
<p>If you wanted to enable the <code>debug</code> option, you would instead run the command:</p>
<pre><code>python juice.py --enable-debug</code></pre>
<h3>Juice Example</h3>
<p>Here is an example of Juice in action:</p>
<pre><code>// We only want the following line included in the output file
// if the 'debug' option is set

/* @if debug */
alert(some_value);
/* @endif */</code></pre>
<h3>Projects Using Juice</h3>
<ul>
  <li><a href="https://github.com/nathan-osman/StackTack">StackTack</a></li>
  <li><a href="https://github.com/nathan-osman/Stack-Exchange-Post-Editor">Stack Exchange Post Editor</li>
</ul>
