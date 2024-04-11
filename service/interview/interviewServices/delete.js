const db=require("../../../models/index");

const byId=async(id)=>{
    return await db.Interview.destroy({where:{id}});
};

module.exports={
    byId
};