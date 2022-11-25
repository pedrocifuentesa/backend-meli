const Item = require('../models/item.model');

function errorHandler(err, next, item) {
    if(err){
      return next(err);
    }
    if(!item){
      const error = new Error('No existe');
      error.statusCode = 500;
      return next(error);
    }
}

function getitem(req, res,next) {
    Item.getitem((err, items) => {      
        if (err || !items) return errorHandler(err, next, items);
        res.json({
          result: true,
          data: items
        });
    
      })
  }

module.exports={
  getitem
}
