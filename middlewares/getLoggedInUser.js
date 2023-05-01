const jwt = require('jsonwebtoken');
const JWT_SECRET = 'newtonSchool';

const getLoggedInUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed: Missing token.', status: 'error' });
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        const user = decodedToken;
        console.log(user)
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Authentication failed: Invalid token.', status: 'error' });
    }
};


module.exports = getLoggedInUser;