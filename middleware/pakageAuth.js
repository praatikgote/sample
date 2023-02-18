exports.authenticatePakage = (req, res, next) => {
    console.log(req.headers.authorization)
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "you are not authorised to access please try again**********"
    });
}
    try {
        if(req.headers.authorization=='Bearer com.turnon.wall4d'){
            next();
        }
        else{
            return res.status(401).json({
                message: `you are not authorised to access*********`
              });
        }
      } catch (error) {
        console.log(error);
        res.status(401).json({
          message: "something went wrong"
        });
      }
}