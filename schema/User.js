import mongoose from "mongoose";

const user = {
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: false
    },
    password:{
        type: String,
        required: true
    },
    profileimg:{
        type: String,
        required: false
    }
}

const User = mongoose.model("User",user)
export default User