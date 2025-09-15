import mongoose from "mongoose";

const {Schema} = require("mongoose");

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength:[2, "Name Must be larger than 2 Characters"],
        maxLength:[50, "Name must be lesser than 50 characters"]
    },

    email:{
        type: String,
        required:[true, "Email is required"],
        match:[/^[\w.%+-]+@[\w.]+\.[A-Za-z]{2,}$/, "Please enter a valid Emial Id"],
    },
    phone:{
        type:String,
        required: [true, "Phone is required"],

    },
    projectinterested: {
    type: String,
    enum: ["Villa", "Apartment", "Land", "Other"], // optional validation
    default: "Villa",
  },
    message:{
        type:String,
        required: [true, "Message is required"],

    },
    date:{
        type: Date,
        default: Date.now,
    },


})

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;