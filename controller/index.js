import User from "../schema/User.js";
import hash from "../middleware/hashpassword.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
// import cloud from "../utility/cloudinary.js";
cloudinary.config({
  cloud_name: 'dxbes4v75',
  api_key: '995821619138789',
  api_secret:'3P07AQMiuJSXJcQUvrhh1-oX0f4',
});
const createUser = async (req, res) => {
  let mail = await User.findOne({ email: req.body.email });
  if (mail) {
    res.send("mail already exits");
  } else {
    let hashPassword = await hash.hashPassword(req.body.password);
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });

    let result = await newUser.save();
    console.log("user", result);
    res.send({ message: "Created" });
  }
};

const userLogin = async (req, res) => {
  try {
    let { password, username } = req.body;
    let user_name = await User.findOne({ username: username });
    let Mail = await User.findOne({ email: username });
    if (user_name) {
      let Password = await hash.hashValidater(password, user_name.password);
      if (!Password) {
        return res.send({ message: "worng password" });
      } else {
        let token = jwt.sign({ id: user_name._id }, "qqqq",{expiresIn:'12h'});
        res.header("tmdb-auth-token", token).json({ message: "login successfully", token: token });
      }
    }
    if (Mail) {
      let Password = await hash.hashValidater(password, Mail.password);
      if (!Password) {
        return res.send({ message: "worng password" });
      } else {
        let token = jwt.sign({ id: Mail._id }, "qqqq",{expiresIn:'12h'});
        res.status(200).send({ message: "login successful" ,token:token});
      }
    }
    if (!user_name && !Mail) {
      res.send({ message: "Invalid User" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const userUpdate = async (req, res) => {
  try {
    let newdata = req.body;
    console.log(req.query.id, "id");
    let data = await User.findByIdAndUpdate(
      { _id: req.query.id },
      { $set: newdata },
      { new: true }
    );
    console.log(newdata, "data");
    res.send({message:"Updated"})
  } catch (error) {
    console.log(error.message);
  }
};

const uploadImg = async (req,res) => {
  try {
    let newdata = req.body;
    let id = req.body.id
    console.log(newdata,"id");
    let data = await User.findByIdAndUpdate(
      { _id: id },
      { $set: {newdata} },
      { new: true }
    );
    console.log(data, "data");
    res.send({message:"Updated"})
} catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
}
}

const getUser = async (req, res) => {
  try {
    let id = req.query.id
    let data = await User.findById(id).select('-password');
    res.status(200).send({message:"Ok",data:data});
  } catch (error) {
    console.log(error.message);
  }
};

export default { createUser, userLogin, userUpdate,uploadImg, getUser };
