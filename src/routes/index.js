import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
    const json = {
        "hello": "world 2"
    };
    res.send(json)
});

export default router