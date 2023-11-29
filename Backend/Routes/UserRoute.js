const express=require("express");
const app=express();
const router=express.Router();
const userController=require("../Controller/UserController")
router.post("/createuser",userController.createuser);
router.get("/getusers",userController.getusers);
router.get("/getuser/:id",userController.getUser);
router.put("/updateuser/:id",userController.UpdateUser);
router.delete("/deleteuser/:id",userController.DeleteUser);
app.use("",router);
module.exports=app