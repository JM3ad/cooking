import { NavBarLink } from "app/models/nav-bar-link";
import homeIcon from 'icons/home.svg';
import editIcon from 'icons/edit-doc.svg';
import thermometerIcon from 'icons/thermometer.svg';

export const NavBarLinks: NavBarLink[] = [
    {
        pageRoute: '/',
        icon: homeIcon,
        altText: "Home icon"
    },
    {
        pageRoute: '/recipe-generator',
        icon: editIcon,
        altText: 'Edit icon'
    },
    {
        pageRoute: '/useful-charts',
        icon: thermometerIcon,
        altText: 'Thermometer icon'
    }
];