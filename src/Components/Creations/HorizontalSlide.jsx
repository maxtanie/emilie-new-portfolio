import $ from "jquery";
import React, { Component } from "react";
import "./HorizontalSlide.scss"
export default class HorizontalSlide extends Component {
    constructor() {
        super()
        this.scroll = this.scroll.bind(this)
    }


    scroll(direction) {
        let far = $('.image-container').width() / 1.3 * direction;
        let pos = $('.image-container').scrollLeft() + far;
        $('.image-container').animate({ scrollLeft: pos }, 1000)
    }

    render() {

        const { vals, img, alt } = this.props;
        const pub = "../"

        return <div className="main">
            <div className="arrows">
                <a className="prev" onClick={this.scroll.bind(null, -1)}>&#10094;</a>
                <a className="next" onClick={this.scroll.bind(null, 1)}>&#10095;</a>
            </div>

            <div className="image-container">
                {vals.map((data, index) => {
                    return (

                        <img src={pub + data.img} className="image" />

                    )
                })}

            </div>

        </div>;
    }
}