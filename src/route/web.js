import express from "express";
import homecontroller from "../controllers/homecontroller";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homecontroller.getHomePage);
  router.get("/about", homecontroller.getAboutPage);
  router.get("/CRUD", homecontroller.getCRUD);
  router.post("/post_crud", homecontroller.Postcrud);
  router.get("/get_crud", homecontroller.display_Getcrud);

  return app.use("/", router);
};

module.exports = initWebRoutes;
