const schoolController = require('./schoolController');
const schoolValidator = require('./schoolValidator');

const express = require('express');

const router = express.Router();

router.get('/', schoolController.getList);
router.get('/:id', schoolController.getDetailById);
router.post('/',schoolController.createSchool, schoolValidator.createValidator);
router.patch('/:id', schoolController.updateSchoolById, schoolValidator.updateValidator);
router.delete('/:id', schoolController.deleteSchoolById);

module.exports = router;