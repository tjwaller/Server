const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/api/items');

app.use('/api/items', items);
app.use(cors({origin: true, credentials: true}));
app.get('/', (req, res) => res.send('Hello world!'));


const conn_str = 'mongodb+srv://tjwaller0328:epicDatabasePassword852@cluster0.jozq0wm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB Connection Succeeded...');
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});




