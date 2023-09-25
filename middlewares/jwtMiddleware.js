const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{

try{

     // Access token from headers 
   const token=req.headers['access_token']
    // true/false  
   jwt.verify(token,"secretkey123")

   next()

}
catch{

    res.status(401).json({
        status:false,
        message:"Please Login",
        statuscode: 401
    })
}
}

module.exports={jwtMiddleware}