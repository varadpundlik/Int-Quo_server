const db=require("../../../models/index");

const byId=async(id)=>{
    return await db.User.destroy({where:{id}});
};

module.exports={
    byId
};