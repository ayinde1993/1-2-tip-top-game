const userModel = require("../models/usersModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Register a new user
const registerUserController = async (req, res) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    try {

        const { userName, email, password, googleId, facebookId, phone, address, userType, answer } = req.body;
        // check if all fields are provided
        if (!userName || !email || !password || !password) {
            return res.status(400).json({
                success: false,
                message: 'all fields are required',
            });
        }


        //  Vérifie le format du mot de passe
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long and include uppercase, lowercase letters and a digit.",
            });
        }
        // check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'email already exists please login',
            });
        }
        // hash password
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create user                                      
        const user = await userModel.create({
            userName,
            email,
            password: hashedPassword,
            googleId,
            facebookId,
            phone,
            address,
            userType,
            answer,

        });

        user.password = undefined;

        res.status(201).json({
            success: true,
            message: 'user created successfully',
            user,
        });
    } catch (error) {
        res.status(500).json({
            message: 'error in register controller',
            error,
        });
    }

};


// logout user controller
const logoutController = async (req, res) => {
    try {
        await res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: 'logout successfully',
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error in logout controller',
            error
        });
    }
}
module.exports = { registerUserController, loginUserController, logoutController };
