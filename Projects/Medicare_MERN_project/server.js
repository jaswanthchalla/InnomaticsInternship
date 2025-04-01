const express = require('express');
const app = express();
require('dotenv').config()
const dbConfig = require('./config/dbConfig');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/userRoute");
app.use('/api/user',userRoute);

const adminRoute = require("./routes/adminRoute");
app.use('/api/admin',adminRoute);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));