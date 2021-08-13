import React from 'react';
import {Link} from 'react-router-dom';
import 'app/components/nav-bar.scss';
import { NavBarLink } from 'app/models/nav-bar-link';

export interface NavBarProps {
    links: NavBarLink[];
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
    const links = props.links;
    return <div className="nav-bar">
        {
            links.map((link) => {
                return <Link key={link.pageRoute} to={link.pageRoute}>
                    <img src={link.icon} className="icon" alt={link.altText} />
                </Link>;
            })
        }
    </div>
};

export default NavBar;