const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const port = process.env.PORT;

const connectDB = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const storeRoutes = require("./routes/storeRoutes");


const app = express();
//app.use(express.urlencoded({ extended: false }));


app.use(cors({credentials: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(userRoutes);
app.use(storeRoutes);

app.use(express.static(__dirname + './controllers'));
app.use('./uploads', express.static('uploads'));



app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/store", require("./routes/storeRoutes"));


connectDB();

app.listen(port, () => console.log(`Server started on port ${port}`));
