const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Health_Condition: String,
    Test_Name: String,
    Test_Description: String,
    Prize: Number,
    Lab_Name_Address: String
})

const UserModel = mongoose.model("Pathlogy".UserSchema)
module.exports = UserModel