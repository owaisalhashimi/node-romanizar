node-romanizar
==============

NodeJS CLI tool for romanizing Arabic words in HTML documents.

This tool replaces simple "markup" in HTML (or any text) files with HTML entities for commonly used Latin representations of Arabic letters.

## Usage ##

### In Text ###

'/AA/'
'/aa/'
'/EE/'	
'/ee/'
'/OO/'
'/oo/'
'/DD/'
'/dd/'
'/HH/'
'/hh/'
'/SS/'
'/ss/'
'/TT/'
'/tt/'
'/ZZ/'
'/zz/'
'/cc/'
'/,,/'	

'&#256;'
'&#257;'
'&#298;'
'&#299;'
'&#362;'
'&#363;'
'&#7692;'
'&#7693;'
'&#7716;'
'&#7717;'
'&#7778;'
'&#7779;'
'&#7788;'
'&#7789;'
'&#7826;'
'&#7827;'
'&#703;'
'&#702;'

### Command Line ###

<pre><code>romanizar -i &lt;path to input file&gt; [-o &lt;path to output file&gt;]</code></pre>

If the output is not specified, the produced file will be saved in the same folder as the input file, and its name will be: <pre>&lt;input-filename&gt;-romanized-ar.&lt;extension&gt;</pre>