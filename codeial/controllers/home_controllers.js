const User=require('../models/user');

//render the home page and send the data to show in the home page
module.exports.home= async function(req,res){

    try{
        let lists=await User.find({})
        .sort('-createdAt');
        return res.render('home',{
            title:"ToDo App",
            lists:lists
        });

    }catch(err){
        console.log('Error',err);
        return;
    }
    
}