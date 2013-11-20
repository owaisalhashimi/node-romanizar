node-romanizar
==============

NodeJS CLI tool for romanizing Arabic words in HTML documents.

This tool replaces simple "markup" in HTML (or any text) files with HTML entities for commonly used Latin representations of Arabic letters.

## Usage ##

### In Text ###

The markup on the left encodes the characters on the right:

- '/AA/' &rarr; '&#256;'
- '/aa/' &rarr; '&#257;'
- '/EE/' &rarr; '&#298;'
- '/ee/' &rarr; '&#299;'
- '/OO/' &rarr; '&#362;'
- '/oo/' &rarr; '&#363;'
- '/DD/' &rarr; '&#7692;'
- '/dd/' &rarr; '&#7693;'
- '/HH/' &rarr; '&#7716;'
- '/hh/' &rarr; '&#7717;'
- '/SS/' &rarr; '&#7778;'
- '/ss/' &rarr; '&#7779;'
- '/TT/' &rarr; '&#7788;'
- '/tt/' &rarr; '&#7789;'
- '/ZZ/' &rarr; '&#7826;'
- '/zz/' &rarr; '&#7827;'
- '/cc/' &rarr; '&#703;'
- '/,,/' &rarr;	'&#702;'

### Command Line ###

<pre><code>romanizar -i /path/to/input/file.html [-o /path/to/output/file.html]</code></pre>

If the output is not specified, the produced file will be saved in the same folder as the input file, and will be named as follows:

Given:
<pre>[input-filename].html</pre>
Filename:
<pre>[input-filename]-romanized-ar.html</pre>
