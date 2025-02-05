'use server';
import prisma from "@/lib/db";
import { BasePlatforms } from "@/lib/platforms";


export const AddPlatformToDB = async () => {
    const p = BasePlatforms[0];
    console.log(p);

    const result = await prisma.platform.create({
        data: {
            arrowColor: p.arrowColor,
            displayName: p.name,
            bgColor: p.bgColor,
            icon: 'TbBrandGithubFilled',
            tag: p.tag,
            textColor: p.textColor,
            withBorder: p.withBorder
        }
    });
    console.log(result);
}