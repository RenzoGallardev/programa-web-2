import { Router } from 'express';

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.status(200).send({
        msg: ""
    });
});

indexRouter.get("/module/:variable", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.status(200).send({
        msg: "Server arriba :), " + req.params["variable"]
    });
});

export default indexRouter;