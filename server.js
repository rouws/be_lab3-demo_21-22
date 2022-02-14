const express = require('express')

/*****************************************************
 * Define some constants and variables
 ****************************************************/
const app = express();
const port = 3000;

/*****************************************************
 * Middleware
 ****************************************************/


/*****************************************************
 * Set template engine
 ****************************************************/



/*****************************************************
 * Routes
 * 
 * GET /                        
 *   home - show movielist
 ****************************************************/

app.get('/', (req, res) => {
    res.send('hello world!')
})


/*****************************************************
 * If no routes give response, show 404 Page
 ****************************************************/


/*****************************************************
 * Start webserver
 ****************************************************/
app.listen(port, () => {
    console.log(`web server  running on http://localhost:${port}`)
})