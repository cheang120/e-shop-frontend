import React, { useState } from 'react'
import styles from "./Header.module.scss"
import {Link, NavLink, useNavigate} from "react-router-dom"
import {FaShoppingCart, FaTimes, FaUserCircle} from "react-icons/fa"
import {HiOutlineMenuAlt3} from "react-icons/hi"
import { logout, RESET } from "../../redux/features/auth/authSlice";
import { useDispatch } from 'react-redux'
import { ShowOnLogin, ShowOnLogout } from '../protect/hiddenLink'
import { UserName } from '../../pages/profile/Profile'

const logo = (
    <div className={styles.logo}>
                <Link to="/">
                    <h2>
                        Shop<span>Macau</span>
                    </h2>
                </Link>
    </div>
) 

const activeLink = ({isActive}) => (isActive ? `
${styles.active}` : "")

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  


    const [showMenu, setShowMenu] = useState(false)
    const [scrollPage, setScrollPage] = useState(false)

    const fixNavbar = () => {
        if (window.scrollY > 50) {
            setScrollPage(true)
        } else {
            setScrollPage(false)
        }
    }
    window.addEventListener("scroll", fixNavbar)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const hideMenu = () => {
        setShowMenu(false)
    }

    const cart = (
        <span className={styles.cart}>
            <Link to={"/cart"}>
                Cart
                <FaShoppingCart size={20} />
                <p>0</p>
            </Link>
        </span>
    )

    const goHome = () => {
        navigate("/");
      };

    const logoutUser = async () => {
        dispatch(RESET());
        await dispatch(logout());
        navigate("/login");
      };

  return (
    <header className={scrollPage ? `${styles.fixed}` : null}>
        <div className={styles.header}>
            {logo}
            <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
                
                <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}>

                </div>
                
                <ul>
                    <li className={styles["logo-mobile"]}>
                        {logo}
                        <FaTimes size={22} color="#fff" onClick={hideMenu}/>
                    </li>
                    <li>
                        <NavLink to="/shop" className={activeLink}>
                        Shop
                        </NavLink>
                    </li>
                    
                </ul>

                <div className={styles["header-right"]}>
                    <ul className='home-links'>
                        <ShowOnLogin>
                            <li className='--flex-center'>
                                <FaUserCircle size={20}/>
                                <UserName />
                            </li>
                        </ShowOnLogin>
                        <ShowOnLogout>
                            <li>
                                <button className='--btn --btn-primary'>
                                    <Link to="/login">Login</Link>
                                </button>
                            </li>
                        </ShowOnLogout>
                        <ShowOnLogin>
                            <li className='--flex-center'>
                                <NavLink className={activeLink} to="/profile">Profile</NavLink>
                            </li>
                            <li>
                                <button onClick={logoutUser} className='--btn --btn-secondary'>
                                    Logout
                                </button>
                            </li>
                        </ShowOnLogin>
                        
                        
                    </ul>
                    {/* <span className={styles.links}>
                        <NavLink to={"login"} className={activeLink}>
                            Login
                        </NavLink>
                        <NavLink to={"register"} className={activeLink}>
                            Register
                        </NavLink>
                        <NavLink to={"order-history"} className={activeLink}>
                            My Order
                        </NavLink>
                    </span> */}
                    {/* {cart} */}
                </div>
                
            </nav>
            <div className={styles["menu-icon"]}>
                {cart}
                <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
            </div>
        </div>
    </header>
  )
}

export default Header
