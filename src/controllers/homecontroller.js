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

  return res.render("display_crud.ejs", {
    dataTable: data,
  });
};

let edit_Crud = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (userId) {
    let userData = await crud_service.getUserInfoById(userId);
    //chech userData not found
    return res.render("edit_crud.ejs", {
      user: userData,
    });
  } else {
    return res.send("User Not Found");
  }
};

let Putcrud = async (req, res) => {
  let data = req.body;
  let allUser = await crud_service.updateUserData(data);
  return res.render("display_crud.ejs", {
    dataTable: allUser,
  });
};

let Deletecrud = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await crud_service.deleteUserById(id);
    return res.send("Delete User Succeed!!");
  } else {
    return res.send("User Not Found!!");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  Postcrud: Postcrud,
  display_Getcrud: display_Getcrud,
  edit_Crud: edit_Crud,
  Putcrud: Putcrud,
  Deletecrud: Deletecrud,
};
