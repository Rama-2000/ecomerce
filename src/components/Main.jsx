import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/Main.css'
import Menu from './img/menu_icon.png'
import Close from './img/close_icon.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider from './Slider';

export class Main extends Component {

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render(){
        const {toggle} = this.state;
        return (
            <div className="main_content">
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <nav>
                    <ul id="main_ul" className={toggle ? "toggle" : ""}>
                        <li><Link>Home</Link></li>
                        <li><Link to="/Saved">Saved</Link></li>
                        <li><Link to="/Electronics">Electronics</Link></li>
                        <li><Link to="/Fashion">Fashion</Link></li>
                        <li><Link to="/Health">Health & Beauty</Link></li>
                        <li><Link to="/Motors">Motors</Link></li>
                        <li><Link to="/Saved">Collectibles</Link></li>
                        <li><Link to="/Saved">Sports</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                                <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                </nav>
                <Carousel className="carousel_images">
                    <div>
                        <img src="https://i.ebayimg.com/images/g/7lcAAOSwM4heTPGu/s-l960.webp" />
                        <p className="legend">Shop Items from Japanese Sellers</p>
                    </div>
                    <div>
                        <img src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/inYAAOSwiKlbVvTY/$_57.JPG" />
                        <p className="legend"> The Home of Fashion</p>
                    </div>
                </Carousel>
                <h1>Explore Popular Categories</h1>
                <div className="popular_Categories">  
                    <ul className="popular_list">
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/-1UAAOSwzH9f4xc5/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/91EAAOSwFZpf4xc6/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/I~oAAOSwHXRf4xc6/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/p30AAOSw1A1f4xc6/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li> 
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/JVwAAOSw5c5f4xc6/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/VHcAAOSwimhf4xc5/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>    
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/mTcAAOSwPzVf4xc4/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Slider />
                <h1>Explore Popular Categories</h1>
                <div className="popular_Categories">  
                    <ul className="popular_list">
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/T38AAOSwPGBeJrV1/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/BkwAAOSwpfpeJrV0/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/uIAAAOSw7PNeJrV1/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/dLMAAOSwwS5eJrV0/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/pq0AAOSwOFFeJrV0/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/atoAAOSwZzVeJrV1/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                        <li>    
                            <Link className="popular_link">
                                <div className="popular_listImage">
                                    <img src="https://i.ebayimg.com/images/g/j-MAAOSwaBJeJrV1/s-l200.webp" alt=""/>
                                </div>
                                <h3>Sneakers</h3>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        
    )
    }
    
}

export default Main
