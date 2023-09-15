const usermodel = require("../models/usermodel.js")
const { comparePassword, hashPassword } = require("./../utils/authhelper.js")
const JWT = require("jsonwebtoken")


const registerController = async (req, res) => {
  try {
    const { name,password, phone } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
  
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
   

    //check user
    const exisitingUser = await usermodel.findOne({ phone });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    } 

    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new usermodel({
      name,
      phone,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

//POST LOGIN
const loginController = async (req, res) => {
  try {
    const { phone, password } = req.body;
    //validation
    if (!phone || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid phone or password",
      });
    }
    //check user
    const user = await usermodel.findOne({ phone });
    if (!user) {
      return res.status(201).send({
        success: false,
        message: "phone is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, "HGFHGEAD1212432432", {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        phone: user.phone,
        role: user.role,
        tokenn : user.tokenn,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(201).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};


module.exports = {  registerController, loginController}