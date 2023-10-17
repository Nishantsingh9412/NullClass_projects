import jwt from 'jsonwebtoken'

const auth = (req, res, next ) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
                                //  token , secret (given in controllers/auth.js)
        let decodeData = jwt.verify(token,'test');
        req.userID = decodeData?.id;
        
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;     // imported in routes/Questions , routes/Answers