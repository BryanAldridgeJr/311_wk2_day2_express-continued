const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const routes = require('./routes');


app.use(express.json());
app.use(express.static('public'));


app.use('/', routes);


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
