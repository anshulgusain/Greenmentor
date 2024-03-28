var jwt = require('jsonwebtoken');

const authenticate=(req,res,next)=>{
const token=req.headers.authorization.split(" ")[1]
jwt.verify(token, 'shhhhh', function(err, decoded) {
    if(err){
        console.log("Invalid token")
        res.send("Token in invalid")
       next()
    }else{
        const {userid}=decoded
        req.userid=userid
        next()
    }
});

}
module.exports={
    authenticate
}