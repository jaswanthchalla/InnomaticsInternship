const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middlewares/authMiddleware');
const Doctor = require('../models/doctorModel');

router.get("/get-all-users", authMiddleware, async(req, res) => {
    
})