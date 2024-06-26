"use client"

import Link                       from "next/link";
import styles                     from './styles/nav-link.module.css'
import { FC, ReactNode }          from "react";
import { usePathname }            from "next/navigation";

interface NavLinkProps {
    route: string,
    highlightActive: boolean
    children: ReactNode
}

const Navlink: FC<NavLinkProps> = (props) => {
    const path = usePathname();
    const className = path.startsWith(`/${props.route}`) ? `${styles.link} ${styles.active} ${props.highlightActive}` : `${styles.link}`;

    return (
        <Link href={`/${props.route}`} className={className}>{props.children}</Link>
    )
}

export default Navlink