import { createValidator, updateValidator } from './schoolValidator';
import { getAll, getOne, createNewSchool, updateOneSchool, deleteOneSchool } from './schoolController'

const express = require('express');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/',createNewSchool, createValidator);
router.patch('/:id', updateOneSchool, updateValidator);
router.delete('/:id', deleteOneSchool);

export default router;