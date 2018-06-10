var express = require('express');
var router = express.Router();

// Here is where we bring in the retrieval interface


// Not sure where to define the response schema yet...
// And should be independent of DB schema!!
const mockPearl = {
  "id": 1,
  "attribution": {
    "type": "book",
    "title": "The Effective Engineer",
    "author": "Edmond Lau",
    "url": "http://www.effectiveengineer.com/"
  },
  "title": "Use leverage to measure your engineering effectiveness",
  "body": [
      "Leverage = Impact Produced / Time Invested",
      "Focus on what generates the highest return on investment for your time spent."
  ],
  "location": "Chapter 1 - Focus on high leverage activities",
  "tags": ["leverage", "efficiency"],
  "rating": {
    "average": 3.4,
    "count": 6
  }
};


router.route('/')
.get((req, res) => {
  // Retrieve all resources
  res.json([mockPearl]);
});

router.route('/:id')
.get((req, res) => {
  // Retrieve a specific resource
  // Also supports 'random' as a pseudo-id
  res.json(mockPearl);
})
// Commented as a placeholder until I figure out how I want to do this
// .post((req, res) => {
//   // Add a completely new resource
//   res.json({
//     ...req.params
//   });
//})

router.route('/:id/ratings')
.post((req, res) => {
  console.log(`User ${req.body.user} rated pearl ${req.params.id} a ${req.body.rating}/5`);
  res.status(200).end();
});

module.exports = router 
