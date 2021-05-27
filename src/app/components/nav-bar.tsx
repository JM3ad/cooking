import React from 'react';
import homeIcon from 'icons/home.svg';
import editIcon from 'icons/edit-doc.svg';
import {Link} from 'react-router-dom';
import 'app/components/nav-bar.scss';

const NavBar: React.FC = () => {
    return <div className="nav-bar">
        <Link to="/">
            <img src={homeIcon} className="icon" alt="Home icon" />
        </Link>
        <Link to="/recipe-generator">
            <img src={editIcon} className="icon" alt="Edit icon" />
        </Link>
    </div>
};

export default NavBar;