var express = require('express');
var router = express.Router();

// Here is where we bring in the retrieval interface

router.route('/')
.get((req, rext) => {
  // Retrieve all resources
  res.json([{id: 'every'}, {id: 'last'}, {id: 'one'}]);
});

router.route('/:id')
.get((req, res, next) => {
  // Retrieve a specific resource
  // Also supports 'random' as a pseudo-id
  res.json({
    ...req.params
  });
})
.post((req, res, next) => {
  // Add a completely new resource
  res.json({
    ...req.params
  });
})

router.route('/:id/ratings')
.post((req, res) => {
  // Add/replace the rating on a resource
});

module.exports = router 
