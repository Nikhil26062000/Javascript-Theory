/*
async and defer are both attributes used with the <script> tag in HTML to control how the loading and execution of external JavaScript files occur. They serve similar purposes but have some key differences:

async:
When you include the async attribute in a <script> tag, it tells the browser to continue parsing the HTML document while fetching the script file in the background.
The script is executed as soon as it is downloaded, potentially interrupting the parsing of the document.
Multiple scripts with the async attribute may execute in any order relative to each other and the document's parsing.
Use async when the script doesn't rely on other scripts or the DOM being fully loaded and doesn't need to maintain a specific execution order relative to other scripts.

!<script async src="script.js"></script>




defer:
When you include the defer attribute in a <script> tag, it tells the browser to continue parsing the HTML document while fetching the script file in the background, similar to async.
However, unlike async, scripts with the defer attribute are only executed after the document has been fully parsed.
Multiple scripts with the defer attribute will execute in the order they appear in the document, after the document has been parsed.
Use defer when the script relies on the DOM being fully loaded or other scripts being executed in a specific order.

In summary, both async and defer allow for non-blocking loading of external scripts, but async executes the script as soon as it's downloaded, potentially interrupting the document parsing, while defer waits until the document is fully parsed before executing the script in the order it appears in the document.

!<script defer src="script.js"></script>


*/