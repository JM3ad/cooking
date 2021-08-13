import homeIcon from 'icons/home.svg';
import editIcon from 'icons/edit-doc.svg';
import thermometerIcon from 'icons/thermometer.svg';

export interface NavBarLink {
    pageRoute: string;
    icon: string;
    altText: string;
}

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