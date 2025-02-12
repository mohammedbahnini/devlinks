import prisma from "@/lib/db";

type userInfosType = {

}

export  const GetUSerInfos = async (userId : string)   => {
    return prisma.user.findMany({
        where : {
            id : userId
        } ,
        include : {

        }

    })
}

type UpdateUserInfoType = {
    userId : string;
    firstName : string;
    lastName : string ;
    email  : string ;
}


export const UpdateUserInfo = async (params : UpdateUserInfoType)=> {

    const user = await prisma.user.update({
        where : {
            id : params.userId
        } ,
        data : {
            firstName : params.firstName ,
            lastName : params.lastName ,
            email : params.email
        }
    })

    return user;
}

type UpdateUserPlatformsType = {
    userId : string ;
    platforms : {
        userId : string ;
        platformId : string;
        link : string
    }[]
}

export const UpdateUserPlatforms = async (params : UpdateUserPlatformsType) =>  {

    // reset the platforms for the user
    await prisma.userPlatforms.deleteMany({
        where : {
            userId : params.userId
        }
    });

    // create all user platforms
    await prisma.userPlatforms.createMany({
        data : [...params.platforms]
    });
}