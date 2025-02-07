import { BasePlatforms } from "@/lib/platforms";
import { BasePlatformType } from "@/lib/schemas";



export const GetPlatformByTag = (tag: string): BasePlatformType => {
    return BasePlatforms.find((item: BasePlatformType) => item.tag === tag);
}

