import {LucideIcon} from "lucide-react";

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