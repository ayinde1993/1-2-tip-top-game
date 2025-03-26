const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'userName is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        sparse: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                // Vérifie que l'email respecte le format standard (exemple simplifié)
                return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: props => `${props.value} is not a valid email address.`
        }
    },

    googleId: {
        type: String,
        default: null,
    },
    facebookId: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        trim: true,
        // On ne contrôle pas la longueur ici puisque la valeur sera hashée
        validate: {
            validator: function(value) {
                // Valide le mot de passe en clair avant le hashage :
                // - Au moins 8 caractères
                // - Au moins une majuscule, une minuscule et un chiffre
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
            },
            message: () => `Password must be at least 8 characters long and include uppercase, lowercase letters and a digit.`
        }
    },

    phone: {
        type: String,
        required: [true, 'phoneNumber is required'],
        default: "06 06 06 06 06"
    },
    address: {
        type: Array,
        default: ["Vincennes", "Paris"],
    },
    userType: {
        type: String,
        required: [true, 'userType is required'],
        default: 'client',
        enum: ['admin', 'client', 'employer'],
    },
    profile: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png',
    },
    answer: {
        type: String,
        required: [true, 'Answer is require'],
        default: "test"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
