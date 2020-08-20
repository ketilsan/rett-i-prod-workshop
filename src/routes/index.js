import express from 'express';
import { superImportantService } from "../controller/super-important-service";

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send(superImportantService())
});

export default router