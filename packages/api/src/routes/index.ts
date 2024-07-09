import express from 'express';

import getCompany from '../controllers/companies';
import getUser from '../controllers/users';

const router = express.Router();

router.get('/users/:id', getUser);
router.get('/companies/:ticker', getCompany);

export default router;
