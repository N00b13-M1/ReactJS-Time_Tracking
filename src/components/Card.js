import React, { Component } from 'react';
import '../css/Card.css'
import Bag from '../img/icon-work.svg'
import Points from '../img/icon-ellipsis.svg'

class Card extends Component {
    render() {
        return (
            <div className="">
                <div className="div-bot">
                    <img src={Bag} alt=""class="bag"/>
                <div className="div-top">
                    <div className="row1">
                        <div className="col-8">
                            <span>
                                Work
                            </span>
                        </div>
                        <div className="col-4">
                            <img src={Points} alt="bag" className="points"/>
                        </div>
                    </div>
                    <div className="row2">
                        <h2>32hrs</h2>
                    </div>
                    <div className="row3">
                        <p>Last Week - 36hrs</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Card;