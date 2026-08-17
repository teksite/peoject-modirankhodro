import {LucideIcon} from "lucide-react";
import {Icon} from "next/dist/lib/metadata/types/metadata-types";
import {features, magazineTags} from "@/mocks";

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



export type MagazineTagId =
    | 'tag_discount'
    | 'tag_news'
    | 'tag_industry'
    | 'tag_education'
    | 'tag_technology';

export interface MagazineItemType {
    id: string;
    title: string;
    href: string;
    image: string;
    excerpt: string;
    date: string;
    tagId: MagazineTagId;
}


export interface magazineTagsType {
    id: MagazineTagId;
    title: string;
    color: string;
}

export interface ServicesType {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    href: string;
    image:string
}


export interface FeaturesType {
    icon: LucideIcon
    title: string
    description: string,
}