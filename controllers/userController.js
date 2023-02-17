const User = require('../models/userModel');

exports.authentication = async (req, res) => {
  try {
    let {email, status, coin, deviceId, androidVersion, deviceBrand, subscription} = req.body;
    const userExist = await User.findOne({email});
    if(userExist){
      res.status(200).json({
        success: true,
        user: userExist
      })
    }
    else{
    const newUser = new User({
      role: "user",
      email: email,
      coin: 123,
      deviceId: deviceId,
      status: "FREE",
      androidVersion: androidVersion,
      deviceBrand: deviceBrand,
      subscription: 'NULL'
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json({
      success: true,
      user
    });
  }
  } catch (err) {
    res.status(500).json(err)
  }
}

// exports.login = async (req, res) => {
//     const { email, deviceId} = req.body
    
//     try {
//       if(!email && !deviceId){
//         return req.status(200).json({
//           message: "Email or device id is required"
//         })
//       }
//       if (email){
//         let user = await User.findOne({email})
//         return res.status(200).json({
//          user: user
//         });
//       }
      
//       if (deviceId){
//         let user = await User.findOne({deviceId})
//         return res.status(200).json({
//           user: user
//         })      
//       }
    
//     }
//     catch (error) {
//       res.status(400).json({
//         error: error.message
//       });    
//     }
// }


