const jwt = require('jsonwebtoken');
const User = require('../models/user')


const auth =(req , res , next) =>{
    try {
        const token = req.cookies.token;
        

        if(!token || token.length === 0){
            throw new Error('Token no found')
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        if(!decode){
            throw new Error('Invalid token');
        }

        const user = await.User.findOne({_id: decoded.id});

        if(!user){
            throw new Error('User not found');
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);

        return res.status(401).json({message: error.message});
        
    }
}