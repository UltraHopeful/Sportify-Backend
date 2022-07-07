const express = require("express")
const router = express.Router()

router.get("/memtest", (req,res)=>{
    try{
        return res.status(200).json({
            message : "Users retrieved",
            success: true
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Internal server error",
            success:false
        })
    }
})

module.exports = router;