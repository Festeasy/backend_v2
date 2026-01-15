const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {
        user_id: user.id,
        rol: user.rol
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateToken,
    verifyToken
};
