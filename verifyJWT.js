const jwt = require('jsonwebtoken');

function verifyJWT (req, res, next) {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                res.status(403).json("invalid token");
                req.user = user;
                next();
            }
        });
    } else {
        return res.status(401).json("you are not authenticated");
    }
}

module.exports = verifyJWT;