const express=require("express")
const root_controller=require("../../controllers/root/index.js")


const root=express.Router()

root.get("/",root_controller.getRoot)
 
module.exports=root;