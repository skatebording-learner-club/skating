// when i click random button  it will retreve random trick frome DB
//first stip we have to save all the tricks in the DB (manually)
//retreve its a controller function
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const auth = require("./auth")

const User = require('./userSchema.js');

const userSchema = joi.object({
    fullName: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
});
const loginSchema = joi.object({
    email: joi.string().min(5).required().email(),
    password: joi.string().min(5).required(),
});

exports.signup = async (req, res) => {
  console.log(req.body);
    // this validate methode to check the requirement data
    const { error } = userSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    //findOne to check if email exit or not in database
    console.log("validationnnnnnnnnnnnnnnnnnn");

    const isEmailExsist = await User.findOne({ email: req.body.email })
    if (isEmailExsist) return res.status(400).send("email already exist")
    console.log("findoneeeeeeeeeeeeeeeeeeeeeeeeee");

    // to hashPassword to be more secure.
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    //make make new document(user) in mongoDB.
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashPassword,
    });
  
    try {
      //save document(user) in mongoDB
      console.log("tryyyyyyyyyyyyyyyyy")

      const savedUser = await user.save();
      const token = await jwt.sign({ _id: user._id }, process.env.TOKEN);
      res.header("login", token)
      res.json({ token, userId: savedUser._id })
    }
    catch (err) {
      console.log(err)
      res.status(400).send(err);
    }
  }

  exports.signin = async (req, res) => {
    console.log('req', req.body)
    const user = await User.findOne({ email: req.body.email })
    // console.log('user',user);
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("password is wrong");
  
    const token = await jwt.sign({ _id: user._id }, process.env.TOKEN);
    //console.log(token);
    res.header("login", token).json({ token, userId: user._id });
  }
  
  exports.userlogout = (req, res) => {
    res.cookie('login', '')
    res.status(200).send(req.user);
  }


  exports.auth = (req, res) => {
    res.json({
      id: req.user._id,
      fullName: req.user.fullName,
      email: req.user.email,
      success: true
    })
  }


exports.retrieveUser = function (req, res) {
  User.find()
      .exec( (err,User) => {
          if(err) return res.status(404).json({success:false})
          res.status(200).json(User)
      } )
};

