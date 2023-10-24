const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const port = process.env.PORT;

const connectDB = require("./db/db");
const routes = require("./routes/userRoutes");
const boardingRoutes = require('./routes/LL-boarding-routes');
const paymentRoutes = require('./routes/LL-payment-route');
const cardRoutes = require('./routes/LL-card-details');
const commentRoutes = require('./routes/commentRoutes');


const app = express();
//app.use(express.urlencoded({ extended: false }));


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes);

app.use("/api/user", require("./routes/userRoutes"));
app.use('/api', boardingRoutes);
app.use('/api', paymentRoutes);
app.use('/api',cardRoutes);
app.use('/api/comments', commentRoutes);



connectDB();

app.listen(port, () => console.log(`Server started on port ${port}`));
