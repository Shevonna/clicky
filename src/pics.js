import React from 'react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.png';
import img4 from './images/img4.jpg';
import img5 from './images/img5.png';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';
import img12 from './images/img12.jpg';


class Clicked extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(state => ({
            isClicked: !state.isClicked
        }));
    }

    render() {
        const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
        return (

            img.map((img) => (

                <button onClick={this.handleClick}><Image style={{ width: "16rem", height: "16rem" }} src={img} thumbnail />
                </button>
            ))
        );
    }
}

 
export default Clicked;