import express from 'express';
import homecontroller from '../controllers/homecontroller';


let router = express.Router();

let initWebRoutes = (app) => {
    app.get('/', homecontroller.getHomePage);
    app.get('/about', homecontroller.getAboutPage);

    app.get('/hoidanit', (req, res) => {
        return res.send("This Route hoidanit")
    });

    return app.use("/", router);
};

module.exports = initWebRoutes;