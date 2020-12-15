// when i click random button  it will retreve random trick frome DB
//first stip we have to save all the tricks in the DB (manually)
//retreve its a controller function

const User = require('./userSchema.js').User;
// function or controler will reteve the trick from the DB from atlas
// exports.retrieveTrick = async (req,res)=> {
//   try{
//     console.log('ay eshe ');
//    const trick = await Trick.findById(req.params.id)
//    res.json(trick)
//   }catch(err){
//     console.log('ay eshe aaa');
//    res.send('Error' , err)
//   }
// }


exports.retrieveUser = function (req, res) {
  User.find()
      .exec( (err,User) => {
          if(err) return res.status(404).json({success:false})
          res.status(200).json(User)
      } )
};

