module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;

    // res.status(err.statusCode).json({
    //     success:false,
    //     message:err.message,
    //     stack:err.stack,
    //     error:err
    // })


    if(err.name == "ValidationError"){
        let message = err.message;
        let error = new Error(message);
        message = Object.values(err.errors).map(value=>value.message);
        error = new Error(message)
        err.statusCode = 400;

        res.status(err.statusCode).json({
            success:false,
            message:error.message || "internal server error"
        })
    }
}