import {LucideIcon} from "lucide-react";
import {Icon} from "next/dist/lib/metadata/types/metadata-types";

export interface FooterNavItemType {
    id: string
    title: string
    href: string
}

export interface FooterColItemType {
    id: string
    title: string
    children: FooterNavItemType[]
}

export interface FooterSocialNavIType {
    id: string,
    title: string,
    href: string,
    icon?: LucideIcon,
}


export interface HeaderNavItemProps {
    id: string
    title: string
    href: string
    children: HeaderNavSubItemProps[]
}


export interface HeaderNavSubItemProps {
    id: string;
    title: string,
    href: string,
    image?: string
}

export interface MagazineItemType {
    id: string
    title: string
    href: string
    image: string
}


export interface ServicesType {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    href: string;
}