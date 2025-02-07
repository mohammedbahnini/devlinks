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
import { cn } from "@/lib/utils";
import { IconBase, IconType } from "react-icons";


type Props = {
    name: string
    color?: string
    size?: string
}


export function PlatformIcon(props: Props) {

    const { name, color, size } = props;
    let Icon: IconType | null;



    switch (name) {
        case 'TbBrandGithubFilled':
            Icon = TbBrandGithubFilled;
            break;
        case 'SiFrontendmentor':
            Icon = SiFrontendmentor;
            break;
        case 'FaTwitter':
            Icon = FaTwitter;
            break;
        case 'FaLinkedin':
            Icon = FaLinkedin;
            break;
        case 'FaYoutube':
            Icon = FaYoutube;
            break;
        case 'FaFacebook':
            Icon = FaFacebook;
            break;
        case 'FaTwitch':
            Icon = FaTwitch;
            break;
        case 'FaDev':
            Icon = FaDev;
            break;
        case 'SiCodewars':
            Icon = SiCodewars;
            break;
        case 'FaCodepen':
            Icon = FaTwitter;
            break;
        case 'FaGitlab':
            Icon = FaGitlab;
            break;
        case 'FaHashnode':
            Icon = FaHashnode;
            break;
        case 'FaStackOverflow':
            Icon = FaStackOverflow;
            break;
        default:
            Icon = null;
            break;

    }


    return (
        Icon ? <Icon className={cn(color, size)} /> : null

    )

}