const User=require('../models/user');

//get the created data
module.exports.create= async function(req,res){
    try{
        User.create(req.body,function(err,user){
            if(err){
                console.log("error to pickup the data");
                return res.redirect('back');
            }
            req.flash('success','Added Successfully');
            return res.redirect('back');
        });
    }catch(err){
        console.log('error in data');
        return res.redirect('back');
    }
} 

//to delete the selected habit
module.exports.destroy=async function(req,res){
    try{
        console.log(req.query.info);
        for(item of req.query.info){
            await User.findByIdAndDelete(item);
        }
        //receive xhr req
        if(req.xhr){
            return res.status(200).json({
                message:'Deleted Successfully'
            });
        }
        return res.redirect('/');
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:'Internal Server Error',
        });
    }
}