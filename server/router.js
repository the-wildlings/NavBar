const controller = require('./controller.js');
const router = require('express').Router();

router
  .route('/')
  .get(controller.get)
  .post(controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .delete(controller.delete)
  .put(controller.put);

module.exports = router;
