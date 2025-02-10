import prisma from "@/lib/db";

type userInfosType = {

}

export  const GetUSerInfos = async (userId : string)   => {
    return prisma.user.findMany({
        where : {
            id : userId
        } ,
        select : {
            email : true ,
            firstName : true ,
            lastName : true ,
            Platforms : true 
        }

    })
}