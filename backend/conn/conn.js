const mongoose=require('mongoose');
const conn = async(req,res) => {
    try
    {
        await mongoose
        .connect('mongodb+srv://user:todo123@cluster0.7ysbqzv.mongodb.net/')
        .then(() => 
        {
            console.log('Connected to database');
        });
    }
    catch(error)
    {
        res.status(400).json({
            message : "Not connected to database"});
        //console.log('Cannot connect to database');
    }
};
conn();