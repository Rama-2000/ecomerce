import React from 'react'
import Carousel from "react-elastic-carousel";
import './css/Main.css'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
];
function Slider() {
    return (
        <div>
            <h1>Daily Deals - Carousel</h1>
            <Carousel className="carousel_list" breakPoints={breakPoints}>
                    <div className="slider_items">
                        <img src="https://i.ebayimg.com/images/g/bvYAAOSwiglfqUSv/s-l225.webp" alt=""/>
                        <p>$30.65</p>
                    </div>
                    <div className="slider_items"> 
                        <img src="https://i.ebayimg.com/images/g/MLcAAOSw26tgHBi-/s-l225.webp" alt=""/>
                        <p>$30.65</p>
                    </div>
                    <div className="slider_items">
                        <img src="https://i.ebayimg.com/images/g/NwEAAOSwa81gAQlP/s-l225.jpg" alt=""/>
                        <p>$30.65</p>
                    </div>
                    <div className="slider_items">
                        <img src="https://i.ebayimg.com/images/g/JPsAAOSwyFBf789R/s-l225.jpg" alt=""/>
                        <p>$30.65</p>
                    </div>
                    <div className="slider_items">
                        <img src="https://i.ebayimg.com/images/g/awMAAOSwJm9cmpRY/s-l225.jpg" alt=""/>
                        <p>$30.65</p>
                    </div>
                    <div className="slider_items">
                        <img src="https://i.ebayimg.com/images/g/HDMAAOSwnPBgAQnU/s-l225.jpg" alt=""/>
                        <p>$30.65</p>
                    </div>    
                </Carousel>
        </div>
    )
}

export default Slider
