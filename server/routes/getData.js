const express = require('express');
const router = express.Router();

/* GET list data. */
router.get('/list', function(req, res, next) {
  const limit = Number(req?.query?.limit) || 10
  const page = Number(req?.query?.page) || 0
  const sort = Number(req?.query?.sort)
  try {
    const {tempData} = res.locals;
    const parsedData = sort === -1 ? tempData.reverse() : tempData;
    res.send({
      data: parsedData.slice(page*limit, page*limit+limit),
      count: parsedData.length
    })
  } catch (err) {
    next(err)
  } 
});
module.exports = router;
