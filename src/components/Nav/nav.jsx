// import logo from '../../images/argentBankLogo.png';
// import userIcon from '../../images/user.png';
// import signOut from '../../images/signout.png';
import '../../styles/nav-style/nav.css';
// import { NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { userSignOut } from '../../actions';
// import { useEffect } from 'react';

function NavBar () {

    return (
    <div className="navbar-container" id='g'>
        <div className="navLeft">
            <p>ABIDI MOAD</p>
            <div className="navRightLeft">
                <a href='#pres'>Présentation</a>
                <a href='#real'>Réalisation</a>
                <a href='#skil'>Comptétences</a>
            </div>
        </div>
        <div className="navRight">
            <a href='#foot'>Contact</a>
            <a href="#g">login</a>
        </div>
    </div>
    ) 
}

export default NavBar