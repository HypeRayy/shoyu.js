<h1>Install</h1>
<h2>npm i shoyu.js --save</h2>
<h1>Example</h1>
<p>
<br>const Discord = require('shoyu.js')<br>const client = new Discord.Client({token:"supersecrettokenhere"})<br>client.on('start', () => {<br>console.log('Ready!')<br>})<br>client.on('msg', (msg) => { <br>console.log(msg.content)<br>})<br>client.on('warns', (e) => {console.log(e)}) //log all errors, warns and debug info.<br>
</p>