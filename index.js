const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Users Management Server is running');
})

const users =[
     {id: 1, name: 'Rovi', email: 'rovi@gmail.com'},
    {id: 2, name: 'John', email: 'john@gmail.com'},
    {id: 3, name: 'Salek', email: 'salek@gmail.com'},
]
app.get('/users', (req, res) => {
    res.send(users);
})
   


app.listen(port, () => {
    console.log(`Users Server is running on ${port}`);
})