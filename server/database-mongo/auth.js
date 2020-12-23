const jwt = require('jsonwebtoken');
const User = require('./userSchema.js').User;

module.exports  =  async (req, res, next)=> {
    const token  = req.header("login")
    // console.log(token)

    if (!token) {
        return res.status(401).send('accses faild ')
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN)
        // console.log(verified)
        const user = await User.findOne({_id: verified._id})

         req.user = user;
        //  console.log(user);
        // res.header('login', token)dt8
        next()
    }
    catch (err) {
        res.status(400).send('invalid Token')

    }
};

