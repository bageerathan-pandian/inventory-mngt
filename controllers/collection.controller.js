
const CollectionModel = require('../models/collection.model');
const CustomerModel = require('../models/customer.model');

/**
 * get users list
 */
exports.getAllUsers = (req, res) => {
  CollectionModel.find({}, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  }).populate('company_details_id')
}

/**
 * get users list
 */
exports.getAllUsersByCompany = (req, res) => {
  CollectionModel.find({ company_details_id: req.params.id }, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  }).populate('company_details_id').sort({ updatedAt: -1 })
}



/**
 * get users list
 */
exports.getAllUsersByCustomer = (req, res) => {
  CollectionModel.find({ $and : [{company_details_id: req.params.com_id }, {customer_details_id: req.params.cust_id}] }, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  }).populate('company_details_id').sort({ updatedAt: -1 })
}

/**
 * get groupByCompany list
 */
exports.groupByCompany = (req, res) => {
  CollectionModel.aggregate([{
    $group: {
      _id: "$_id",
      count: { $sum: "$like.count" }
    }
  }], (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  })
}

exports.addUser = (req, res) => {
  console.log('add user1', req.body);
  if (req.body._id === null) {
    delete req.body._id;
  }
  CollectionModel.create(req.body, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      let custData = {
        total_paid_amt: Number(req.body.total_paid_amt) + Number(req.body.collection_amt),
        total_pending_amt: Number(req.body.total_pending_amt) - Number(req.body.collection_amt)
      }
      console.log('custData', custData)
      CustomerModel.findByIdAndUpdate(req.body.customer_details_id, custData, (e, result3) => {
        if (e) return res.status(500).json(e);
      });
      return res.json(result);
    }
  });
}

exports.updateUser = (req, res) => {
  CollectionModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  });
}

exports.deleteUser = (req, res) => {
  CollectionModel.findByIdAndRemove(req.params.id, req.body, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  });
}

exports.userStatusUpdate = (req, res) => {
  CollectionModel.save({}, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  })
}

