const express = require('express');
const app = express();

app.get('/' , (req , res) => {
    res.send('This is the homepage')
})

app.listen(3000 , () => {
    console.log('listening on port 3000 ...')
})



// "test": "echo \"Error: no test specified\" && exit 1"