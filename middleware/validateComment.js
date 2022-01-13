function validateComment(req, res, next) {
    try {
      let data = req.body;
  
      if (data.hasOwnProperty("text") && typeof data.text == "string") {
        return next();
      } else {
        return res.status(405).send(`Body of request not valid!`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  module.exports.validateComment = validateComment;
  