import express from "express";
import homecontroller from "../controllers/homecontroller";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homecontroller.getHomePage);
  router.get("/about", homecontroller.getAboutPage);
  router.get("/CRUD", homecontroller.getCRUD);
  router.post("/post_crud", homecontroller.Postcrud);
  router.get("/get_crud", homecontroller.display_Getcrud);
  router.get("/edit_crud", homecontroller.edit_Crud);
  router.post("/put_crud", homecontroller.Putcrud);
  router.get("/delete_crud", homecontroller.Deletecrud);

  return app.use("/", router);
};

module.exports = initWebRoutes;
