import db from "../models/index";
import crud_service from "../services/crud_service";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let Postcrud = async (req, res) => {
  let message = await crud_service.createNewUser(req.body);
  console.log(message);
  return res.send("Post CRUD From Server");
};

let display_Getcrud = async (req, res) => {
  let data = await crud_service.getallUser();
  console.log("======================");
  console.log(data);
  console.log("=======================");

  return res.render("display_crud.ejs", {
    dataTable: data,
  });
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  Postcrud: Postcrud,
  display_Getcrud: display_Getcrud,
};
