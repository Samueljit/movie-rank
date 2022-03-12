import Router from "express";

const router = Router();

import {topPost} from '../controllers/top.js'
import { validateJWT } from "../middlewares/validate-jwt.js";


router.post('/',[validateJWT], topPost);


export default router;

