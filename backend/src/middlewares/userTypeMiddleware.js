
const userTypeMiddleware = (...allowedUserTypes) => {
    return (req, res, next) => {
        if (!req.user || !allowedUserTypes.includes(req.user.userType)) {
            return res.status(403).json({
                success: false,
                message: 'Access forbidden: insufficient permissions'
            });
        }
        next();
    };
};

module.exports = { userTypeMiddleware };
