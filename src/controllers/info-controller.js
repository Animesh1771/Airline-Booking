const info=(req,res)=>{
    return res.json({
        sucess:true,
        message:'Api is Live',
        error:{},
        date:{}
    })
}

module.exports={
    info
}