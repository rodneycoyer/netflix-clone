const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authenticationRouter = require('./routes/authenticationRoutes');
const userRouter = require('./routes/userRoutes');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB connection successful!"))
.catch((err) => console.log(err));
// parse json requests
app.use(express.json());

// router routes
app.use("/api/v1/auth/", authenticationRouter);
app.use("/api/vi/users", userRouter);

app.listen(5050, () => {
    console.log(`you are connected to server listening on port 5050`);
});