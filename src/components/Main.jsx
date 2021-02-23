import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/Main.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider from './Slider';

export class Main extends Component {
    render(){
        return (
            <div className="main_content">
                <div className="list">
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Saved</Link></li>
                        <li><Link>Electronics</Link></li>
                        <li><Link>Fashion</Link></li>
                        <li><Link>Health & Beauty</Link></li>
                        <li><Link>Motors</Link></li>
                        <li><Link>Collectibles</Link></li>
                        <li><Link>Sports</Link></li>
                        <li><Link>Home & Garden</Link></li>
                        <li><Link>Deals</Link></li>
                        <li><Link>Under $10</Link></li>
                    </ul>
                </div>
                <Carousel>
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
