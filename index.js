const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB connection successful!"))
.catch((err) => console.log(err));

app.listen(5050, () => {
    console.log(`you are connected to server listening on port 5050`);
});