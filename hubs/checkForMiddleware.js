module.exports = 

function check(prop) {

    return function checkFor(req, res, next) {
  
      if(req.body[prop]) {
        next();
  
      } else {
  
        res.status(400).json({ errorMessage: `required ${prop}` });
      }
    }
  }