// when i click random button  it will retreve random trick frome DB
//first stip we have to save all the tricks in the DB (manually)
//retreve its a controller function

const Trick = require('./trickSchema').Trick;
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
exports.retrieveTricks = function (req, res) {
  Trick.find()
      .exec( (err,tricks) => {
          if(err) return res.status(404).json({success:false})
          res.status(200).json(tricks)
      } )

};



exports.addTrick =  async(req, res) => {
  const trick = new Trick({
    trickName: req.body.trickName,
    photo: req.body.photo,
    description:req.body.description
  });

  try {
    const savedTrick = await trick.save();
    res.json({savedTrick} );
  }
  catch (err) {
    res.status(400).send(err);
  }
}