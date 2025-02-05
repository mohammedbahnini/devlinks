import { BasePlatforms } from "@/lib/platforms";
import { BasePlatformType } from "@/lib/schemas";
import { IconType } from "react-icons";
import {
    FaCodepen,
    FaDev,
    FaFacebook,
    FaFreeCodeCamp,
    FaGitlab,
    FaLinkedin, FaStackOverflow,
    FaTwitch,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiCodewars, SiFrontendmentor } from "react-icons/si";
import { FaHashnode } from "react-icons/fa6";



export const GetPlatformByTag = (tag: string): BasePlatformType => {
    return BasePlatforms.find((item: BasePlatformType) => item.tag === tag);
}


export const GetIconByName = (name: string): IconType | null => {
    switch (name) {
        case 'TbBrandGithubFilled':
            return TbBrandGithubFilled;
        case 'SiFrontendmentor':
            return SiFrontendmentor;

        case 'FaTwitter':
            return FaTwitter;

        case 'FaLinkedin':
            return FaLinkedin;

        case 'FaYoutube':
            return FaYoutube;

        case 'FaFacebook':
            return FaFacebook;

        case 'FaTwitch':
            return FaTwitch;

        case 'FaDev':
            return FaDev;

        case 'SiCodewars':
            return SiCodewars;

        case 'FaCodepen':
            return FaCodepen;

        case 'FaGitlab':
            return FaGitlab;

        case 'FaHashnode':
            return FaHashnode;

        case 'FaStackOverflow':
            return FaStackOverflow;

        default:
            return null;
    }
}