// Create web server
// 1. Import express
const express = require('express');
const app = express();
// 2. Create a route
app.get('/comments', (req, res) => {
    console.log('GET request received');
    res.send('Hello from comments.js');
});
// 3. Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
// 4. Test the server
// - Start the server: node comments.js
// - Open the browser and go to http://localhost:3000/comments
// - You should see the text "Hello from comments.js" on the browser
// - Go to the terminal and you should see the text "GET request received" 
//   printed on the terminal
// - Stop the server by pressing Ctrl+C