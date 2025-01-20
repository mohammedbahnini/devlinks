import {PlatformSelectType, PlatformType} from "@/lib/schemas";
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
import {SiCodewars, SiFrontendmentor} from "react-icons/si";
import {TbBrandGithubFilled} from "react-icons/tb";
import {TiSocialTwitter} from "react-icons/ti";
import {FaHashnode} from "react-icons/fa6";

export const InitialPlatforms : PlatformType[] = [
    {
        id : '1' ,
        name : 'GitHub' ,
        color : 'black' ,
        textColor : 'text-white' ,
        arrowColor : 'text-color' ,
        withBorder : false
    } ,
    {
        id : '2' ,
        name : 'Frontend Mentor' ,
        color : 'bg-white' ,
        textColor : 'text-black' ,
        arrowColor : 'text-black' ,
        withBorder : true
    }
];



export const PlatformsSelectInitial : PlatformSelectType[] = [
    {
        id : '1' ,
        name : 'GitHub' ,
        value : 'github',
        icon : TbBrandGithubFilled
    } ,
    {
        id : '2' ,
        name : 'Frontend Mentor' ,
        value : 'frontend-mentor',
        icon : SiFrontendmentor
    } ,
    {
        id : '3' ,
        name : 'Twitter' ,
        value : 'twitter',
        icon : FaTwitter
    } ,
    {
        id : '4' ,
        name : 'LinkedIn' ,
        value : 'linkedin',
        icon : FaLinkedin
    },
    {
        id : '5' ,
        name : 'YouTube' ,
        value : 'youtube',
        icon : FaYoutube
    },
    {
        id : '6' ,
        name : 'Facebook' ,
        value : 'facebook',
        icon : FaFacebook
    },
    {
        id : '7' ,
        name : 'Twitch' ,
        value : 'twitch',
        icon : FaTwitch
    },
    {
        id : '8' ,
        name : 'Dev.to' ,
        value : 'dev.to',
        icon : FaDev
    },
    {
        id : '9' ,
        name : 'Codeward' ,
        value : 'codewars',
        icon : SiCodewars
    },
    {
        id : '10' ,
        name : 'Codepen' ,
        value : 'codepen',
        icon : FaCodepen
    },
    {
        id : '11' ,
        name : 'freeCodeCamp' ,
        value : 'freecodecamp',
        icon : FaFreeCodeCamp
    },
    {
        id : '12' ,
        name : 'GitLab' ,
        value : 'gitlab',
        icon : FaGitlab
    },
    {
        id : '13' ,
        name : 'Hashnode' ,
        value : 'hashnode',
        icon : FaHashnode
    },
    {
        id : '14' ,
        name : 'Stack Overflow' ,
        value : 'stackoverflow',
        icon : FaStackOverflow
    }
]