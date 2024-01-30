import mongoose from "mongoose";

const DBconfig = async() =>{
    try {
        await mongoose.connect("mongodb+srv://Jas-13:123@jasper.cclnzjl.mongodb.net/TMDB")
        .then(()=>{
            console.log("DB connected");
        })
        .catch((error)=>{
            console.log(error.message);
        })
    } catch (error) {
        console.log(error.message);
    }
}
export default DBconfig