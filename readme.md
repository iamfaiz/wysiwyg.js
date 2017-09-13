<h1 class="center">WYSIWYG.JS</h1>
<p>An easy to use jQuery WYSIWYG editor plugin. As there are various other jquery wysiwyg plugins, this one aims to give developers complete control over GUI. Using this plugin you can create a wysiwyg editor very easily. Some child plugins ( ready made wysiwyg editors ) will be added later to prove the amazing functionality of the plugin.</p>

<h2>Quick Example</h2>
<h4>HTML</h4>
<pre><code class="language-html">&lt;textarea&gt;&lt;/textarea&gt;</code></pre>
<h4>jQuery</h4>
<pre><code class="language-javascript">$("textarea").wysiwyg(options);</code></pre>

<h2>Options</h2>
<p>Options are some arguments that determines when to make text bold, italic, pretty much all the stuff. (To see all the options available see <a href="#">options</a> page).</p>
<h4>Simple example of options:</h4>
<pre>
	<code class="language-javascript">
		var options = {
			controls: {
				bold: $(".bold"),
				italic: $(".italic")
			}	
		}
	</code>
</pre>

<p>So, now whenever you'll click <code>.bold</code> element it will start bold writing. Or if you highlight some text and click <code>.bold</code> it will make it bold.</p>


<h2>Input controls ( <code>options.inputControls</code> )</h2>
<p>These are the controls that takes some kind of input for example to change the font size of the text you need to give the size. For this you usually provide an element like <code>select</code> or <code>input</code>. And on their change event it will run the command. For example to change the font size you would just need to highlight the text and change the select box value. It will apply that font size to the text. So to sum up, provide it the element and on it's <code>.change</code> event that specific command will execute.</p>

<h4>Example: </h4>
<pre>
	<code class="language-javascript">
		var options = {
			controls: {
				bold: $(".bold"),
				italic: $(".italic")
			},
			inputControls: {
				fontSize: $("#theSize"),
				insertImage: $("#imageURL") // you would just need provide #imageURL the image url to insert the image
			}
		}
	</code>
</pre>
