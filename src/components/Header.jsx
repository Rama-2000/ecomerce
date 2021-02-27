import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from './img/basket_icon.png'
import Notification from './img/notification.png'
import './css/Header.css'


function Header() {
    return (
        <div>
            <header>
                <div className="header_top">
                    <div className="header__right">
                        <nav>
                            <ul>
                                <li><Link to="/online-store">Sign In</Link></li>
                                <li><Link to="/product">Sign Up</Link></li>
                                <li><Link to="/contact">Daily Deals</Link></li>
                                <li><Link to="/about">Help & Contact</Link></li>        
                            </ul>
                        </nav>
                    </div>
                    <div className="nav-icons">
                        <Link to="/notification">
                            <img className="notification_icon" src={Notification} alt="noti" width="25"/>
                        </Link>
                        <Link to="/cart">
                            <img src={CartIcon} alt="cart" width="25"/>
                        </Link>
                        <span>{0}</span>      
                    </div>
                </div>
                <div className="header_buttom">
                    <Link>
                        <img  className="header_logo" src="https://w7.pngwing.com/pngs/486/458/png-transparent-web-development-e-commerce-logo-electronic-business-ecommerce.png" alt="Logo"/>
                    </Link>
                    <div className="header_search">
                        <input type="text" className="header_searchInput"/>
                        <select className="header_searchSelect" name="cars" id="cars">
                            <option value="All">All Categories</option>
                            <option value="Art">Art</option>
                            <option value="Book">Book</option>
                            <option value="Baby">Baby</option>
                        </select>
                    </div>
                    <button className="search_button">
                        Search
                    </button>
                        
                </div>  
            </header>
        </div>
    )
}

export default Header
