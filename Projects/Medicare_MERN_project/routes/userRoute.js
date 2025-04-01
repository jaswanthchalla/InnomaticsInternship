const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middlewares/authMiddleware');
const Doctor = require('../models/doctorModel');


router.post('/register', async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(400).send({ message: 'User already exists', success: false });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;

        const newUser = new User(req.body);

        await newUser.save();
        res.status(200).send({ message: 'User created successfully', success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error creating user', success: false, error });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).send({ message: 'User doesnot exist', success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(200).send({ message: 'Password is incorrect', success: false });
        }
        else {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
            return res.status(200).send({ message: 'Login successfull', success: true, data: token });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error logging in', success: false, error });

    }
});

router.post('/get-user-info-by-id', authMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.body.userId });
        user.password = undefined;
        if (!user) {
            return res.status(200).send({ message: "User does not exist", success: false });
        } else {
            return res.status(200).send({ success: true, data: user });
        }
    } catch (error) {
        res.status(500).send({ message: "Error getting user info", success: false, error });
    }
});

router.post('/apply-doctor-account', authMiddleware, async (req, res) => {
    try {
        const newdoctor = new Doctor({ ...req.body, status: "pending" });
        await newdoctor.save();
        const adminUser = await User.findOne({ isAdmin: true });

        const unseenNotifications = adminUser.unseenNotifications;
        unseenNotifications.push({
            type: "new-doctor-request",
            message: `${newdoctor.firstName} ${newdoctor.lastName} has applied for a doctor account`,
            data: {
                doctorId: newdoctor._id,
                name: newdoctor.firstName + " " + newdoctor.lastName,
            },
            onClickPath: '/admin/doctors',
        })
        await User.findByIdAndUpdate(adminUser._id, { unseenNotifications });
        res.status(200).send({ success: true, message: 'Doctor account applied successfully' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error applying doctor account', success: false, error });
    }
});

router.post('/mark-all-notifications-as-seen', authMiddleware, async (req, res) => {
    try {
        // const user = await User.findOne({ _id: req.body.userId });
        // const unseenNotifications = user.unseenNotifications;
        // const seenNotifications = user.seenNotifications;
        // seenNotifications.push(...unseenNotifications);
        // user.unseenNotifications = [];
        // user.seenNotifications = seenNotifications;
        // const updatedUser = await User.save();
        // updatedUser.password = undefined;
        const user = await User.findById(req.body.userId);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Move all unseen to seen using atomic operations
        const updatedUser = await User.findByIdAndUpdate(
            req.body.userId,
            {
                $push: { seenNotifications: { $each: user.unseenNotifications } },
                $set: { unseenNotifications: [] }
            },
            { new: true }
        ).select("-password");
        res.status(200).send({ success: true, message: "All notifications marked as read", data: updatedUser })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error marking notifications as read', success: false, error });
    }
});

router.post('/delete-all-notifications', authMiddleware, async (req, res) => {
    try {
        // const user = await findOne({ _id: req.body.userId });
        // user.seenNotifications = [];
        // user.unseenNotifications = [];

        // const updatedUser = await User.save();
        // updatedUser.password = undefined;
        const user = await User.findById(req.body.userId);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Use findByIdAndUpdate for atomic operation
        const updatedUser = await User.findByIdAndUpdate(
            req.body.userId,
            {
                $set: {
                    seenNotifications: [],
                    unseenNotifications: []
                }
            },
            { new: true }
        ).select("-password");
        res.status(200).send({ success: true, message: "All notifications are deleted", data: updatedUser })
    } catch (error) {
        console.error("Delete notifications error:", error);
        res.status(500).json({
            success: false,
            message: "Error deleting notifications",
            error: error.message
        });
    }
});

module.exports = router;