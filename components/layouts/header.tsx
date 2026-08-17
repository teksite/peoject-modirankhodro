'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HeaderNavItemProps, HeaderNavSubItemProps } from "@/contracts";
import { HeaderNavGroups } from "@/mocks";

export default function Header() {
    const appName: string =
        process.env.NEXT_PUBLIC_APP_NAME ?? "مدیران خودرو ۷۷۷";

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="z-50 fixed top-4 inset-x-0 flex items-center">
                <div className="relative container mx-auto">

                    {/* Desktop Header */}
                    <div
                        className="
                            hidden md:flex
                            mx-auto h-full items-center
                            bg-slate-600/90 backdrop-blur-2xl
                            py-4 px-6 rounded-2xl
                        "
                    >
                        <Image
                            src="/assets/images/logo.webp"
                            alt={appName}
                            width={70}
                            height={50}
                            loading="eager"
                            fetchPriority="high"
                        />

                        <div className="flex items-center justify-between gap-6 w-full">
                            {HeaderNavGroups.map(
                                (navItem: HeaderNavItemProps[], i) => (
                                    <nav key={i}>
                                        <ul className="flex items-center justify-center gap-3 w-full">
                                            {navItem.map(
                                                (item: HeaderNavItemProps) => (
                                                    <li
                                                        key={item.id}
                                                        className="group"
                                                    >
                                                        <span className="font-bold text-white cursor-pointer">
                                                            {item.title}
                                                        </span>

                                                        <div
                                                            className="
                                                                bg-slate-600/90
                                                                backdrop-blur-2xl
                                                                mx-auto
                                                                invisible
                                                                group-hover:z-50
                                                                group-hover:visible
                                                                translate-y-full
                                                                opacity-0
                                                                -bottom-1/4
                                                                group-hover:bottom-0
                                                                group-hover:opacity-100
                                                                transition-all
                                                                duration-150
                                                                ease-in
                                                                grid
                                                                md:grid-cols-4
                                                                absolute
                                                                inset-x-0
                                                                w-full
                                                                rounded-2xl
                                                                border
                                                                border-slate-300
                                                                p-6
                                                            "
                                                        >
                                                            {item.children.map(
                                                                (
                                                                    nav: HeaderNavSubItemProps
                                                                ) => (
                                                                    <NavItem
                                                                        {...nav}
                                                                        key={nav.id}
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </nav>
                                )
                            )}
                        </div>
                    </div>

                    {/* Mobile Header */}
                    <div
                        className="
                            md:hidden
                            mx-4
                            flex items-center justify-between
                            bg-slate-600/90 backdrop-blur-2xl
                            py-3 px-4
                            rounded-2xl
                        "
                    >
                        <Image
                            src="/assets/images/logo.webp"
                            alt={appName}
                            width={60}
                            height={45}
                            loading="eager"
                            fetchPriority="high"
                        />

                        <button
                            type="button"
                            aria-label="باز کردن منو"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="
                                flex items-center justify-center
                                w-11 h-11
                                rounded-xl
                                bg-white/10
                                text-white
                                hover:bg-white/20
                                transition
                            "
                        >
                            <span className="text-2xl leading-none">
                                ☰
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                    md:hidden
                    fixed inset-0 z-[60]
                    bg-black/50 backdrop-blur-sm
                    transition-opacity duration-300
                    ${
                    isMobileMenuOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                }
                `}
            />

            {/* Mobile Drawer */}
            <aside
                className={`
                    md:hidden
                    fixed
                    top-0 right-0
                    z-[70]
                    h-dvh
                    w-[85%] max-w-sm
                    bg-slate-700
                    shadow-2xl
                    overflow-y-auto
                    transition-transform duration-300 ease-out
                    ${
                    isMobileMenuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                }
                `}
            >
                <div className="p-5">

                    {/* Drawer Header */}
                    <div className="flex items-center justify-between mb-6">
                        <Image
                            src="/assets/images/logo.webp"
                            alt={appName}
                            width={65}
                            height={45}
                        />

                        <button
                            type="button"
                            aria-label="بستن منو"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="
                                flex items-center justify-center
                                w-10 h-10
                                rounded-xl
                                bg-white/10
                                text-white
                                text-xl
                                hover:bg-white/20
                                transition
                            "
                        >
                            ×
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav>
                        <ul className="space-y-2">
                            {HeaderNavGroups.flat().map(
                                (item: HeaderNavItemProps) => (
                                    <MobileNavItem
                                        key={item.id}
                                        item={item}
                                        onNavigate={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    />
                                )
                            )}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}


/**
 * Desktop submenu item
 */
export function NavItem({
                            title,
                            href,
                            image,
                        }: HeaderNavSubItemProps) {
    return (
        <Link
            href={href}
            className="
                flex items-center justify-center
                gap-3 flex-col
                p-3 rounded-xl
                hover:bg-white/10
                transition
            "
        >
            {image && (
                <Image
                    src={image}
                    alt={title}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="mx-auto aspect-square object-contain"
                />
            )}

            <span className="text-white font-bold text-center">
                {title}
            </span>
        </Link>
    );
}


/**
 * Mobile accordion item
 */
function MobileNavItem({
                           item,
                           onNavigate,
                       }: {
    item: HeaderNavItemProps;
    onNavigate: () => void;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;

    /**
     * Item without children
     */
    if (!hasChildren) {
        return (
            <li>
                <Link
                    href={item.href ?? "#"}
                    onClick={onNavigate}
                    className="
                        flex items-center justify-between
                        w-full
                        px-4 py-3
                        rounded-xl
                        text-white
                        font-bold
                        hover:bg-white/10
                        transition
                    "
                >
                    <span>{item.title}</span>

                    <span className="text-white/50">
                        ←
                    </span>
                </Link>
            </li>
        );
    }

    /**
     * Item with children = Accordion
     */
    return (
        <li className="rounded-xl overflow-hidden">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                className="
                    flex items-center justify-between
                    w-full
                    px-4 py-3
                    text-white
                    font-bold
                    bg-white/5
                    hover:bg-white/10
                    transition
                "
            >
                <span>{item.title}</span>

                <span
                    className={`
                        text-xl
                        transition-transform duration-200
                        ${isOpen ? "rotate-180" : ""}
                    `}
                >
                    ⌄
                </span>
            </button>

            <div
                className={`
                    grid transition-[grid-template-rows]
                    duration-300 ease-in-out
                    ${
                    isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                }
                `}
            >
                <div className="overflow-hidden">
                    <div className="p-2 space-y-1 bg-black/10">
                        {item.children.map(
                            (child: HeaderNavSubItemProps) => (
                                <Link
                                    key={child.id}
                                    href={child.href}
                                    onClick={onNavigate}
                                    className="
                                        flex items-center gap-3
                                        p-3
                                        rounded-lg
                                        text-white
                                        hover:bg-white/10
                                        transition
                                    "
                                >
                                    {child.image && (
                                        <Image
                                            src={child.image}
                                            alt={child.title}
                                            width={45}
                                            height={45}
                                            loading="lazy"
                                            className="
                                                rounded-lg
                                                object-contain
                                            "
                                        />
                                    )}

                                    <span className="font-medium">
                                        {child.title}
                                    </span>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}