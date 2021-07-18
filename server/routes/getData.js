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

    let data = {
      data: parsedData.slice(page*limit, page*limit+limit),
      count: parsedData.length
    }
    res.send(data)
  } catch (err) {
    next(err)
  } 
});

router.get('/post', function(req, res, next) {
  console.log('req', req)
  const postId = Number(req?.query?.id)
  let data
  try {
    if (postId) {
      const {tempData} = res.locals;
      data = tempData.find((item) => item.id === postId)
      res.send(data)
    } else {
      throw 'Error 404: missing id'
    }
  } catch (err) {
    next({
      message: err,
      status: 404
    })
  }
});

module.exports = router;
