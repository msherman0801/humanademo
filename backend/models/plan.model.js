const mongoose = require('mongoose')
const Schema = mongoose.Schema



const planSchema = new Schema({
    name: { type: String, required:true, unique: true, trim: true },
    cost: { type: Number, required: true },
    description: { type: String, required: true }
})


const Plan = mongoose.model('Plan', planSchema)


module.exports = Plan;