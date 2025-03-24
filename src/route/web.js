import express from "express";
import homecontroller from "../controllers/homecontroller";

let router = express.Router();

let initWebRoutes = (app) => {
  app.get("/", homecontroller.getHomePage);
  app.get("/about", homecontroller.getAboutPage);
  app.get("/CRUD", homecontroller.getCRUD);
  app.post("/post_crud", homecontroller.Postcrud);

  return app.use("/", router);
};

module.exports = initWebRoutes;
