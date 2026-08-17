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
    image: string
}


export interface FeaturesType {
    icon: LucideIcon
    title: string
    description: string,
}

export interface CarListItemType {
    id: number | string,
    value: string,
    label: string,
}
export interface PaymentConditionItemType {
    id: number | string,
    value: string,
    label: string,
}

export interface ConsultTimeItemType {
    id: number | string,
    value: string,
    label: string,
}