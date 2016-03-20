'use strict';

import {Router} from 'express';
import * as controller from './recipe.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/categories', auth.isAuthenticated(), controller.categories);
router.get('/', auth.isAuthenticated(), controller.findAll);
router.post('/', auth.isAuthenticated(), controller.create);


export default router;
