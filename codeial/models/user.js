const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({

    description: {
            type:String,
            required :true,
    },
    category: {
            type:String,
            required:true
    },
    duedate: {
            type:Date,
            required:true
    },
    duetime:{
            type:String
    }


},{
    timestamps:true
});

const user=mongoose.model('User',userSchema);
module.exports=user;