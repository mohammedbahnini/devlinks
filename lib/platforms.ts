import { PlatformSelectType, BasePlatformType } from "@/lib/schemas";
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
import { SiCodewars, SiFrontendmentor } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TiSocialTwitter } from "react-icons/ti";
import { FaHashnode } from "react-icons/fa6";
import { PlatformIcon } from '@/components/shared/editor/platform-icon';

export const BasePlatforms: BasePlatformType[] = [
    {
        id: '1',
        tag: 'github',
        name: 'GitHub',
        bgColor: 'bg-github',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'TbBrandGithubFilled'
    },
    {
        id: '2',
        tag: 'frontend-mentor',
        name: 'Frontend Mentor',
        bgColor: 'bg-frontend-mentor',
        textColor: 'text-black',
        arrowColor: 'text-black',
        withBorder: true,
        icon: 'SiFrontendmentor'
    },
    {
        id: '3',
        tag: 'twitter',
        name: 'Twitter',
        bgColor: 'bg-twitter',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaTwitter'
    },
    {
        id: '4',
        tag: 'linkedin',
        name: 'LinkedIn',
        bgColor: 'bg-linkedin',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaLinkedin'
    },
    {
        id: '5',
        tag: 'youtube',
        name: 'YouTube',
        bgColor: 'bg-youtube',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaYoutube'
    },
    {
        id: '6',
        tag: 'facebook',
        name: 'Facebook',
        bgColor: 'bg-facebook',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaFacebook'
    },
    {
        id: '7',
        tag: 'twitch',
        name: 'Twitch',
        bgColor: 'bg-twitch',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaTwitch'
    },
    {
        id: '8',
        tag: 'devto',
        name: 'Dev.to',
        bgColor: 'bg-devto',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaDev'
    },
    {
        id: '9',
        tag: 'codewars',
        name: 'Codewars',
        bgColor: 'bg-codewars',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'SiCodewars'
    },
    {
        id: '10',
        tag: 'freecodecamp',
        name: 'freeCodeCamp',
        bgColor: 'bg-freecodecamp',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaCodepen'
    },
    {
        id: '11',
        tag: 'getlab',
        name: 'GitLab',
        bgColor: 'bg-gitlab',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaGitlab'
    },
    {
        id: '12',
        tag: 'hashnode',
        name: 'Hashnode',
        bgColor: 'bg-hashnode',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaHashnode'
    },
    {
        id: '13',
        tag: 'stackoverflow',
        name: 'Stack Overflow',
        bgColor: 'bg-stackoverflow',
        textColor: 'text-white',
        arrowColor: 'text-white',
        withBorder: false,
        icon: 'FaStackOverflow'
    }
];

export const PlatformsSelectInitial: PlatformSelectType[] = BasePlatforms.map(item => {
    return {
        id: item.id,
        name: item.name,
        icon: item.icon,
        value: item.tag
    }
})

