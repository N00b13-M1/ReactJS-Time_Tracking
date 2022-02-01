import React, { Component } from 'react';
import Card from './Card';
import '../css/Body.css'
import Picture from '../img/image-jeremy.png'

class Body extends Component {
    render() {
        return (
            <div className="parent container">
                <div className="card1"> 
                    <div className="bigcard-bot">
                        <div className="bigcard-top">
                            <div className="div1">
                                <img src={Picture} alt="bag" className="avatar"/>
                            </div>
                            <div className="div2">
                                <p className="avatartext">Report for</p>
                            </div>
                            <div className="div3">
                                <h2 className="avatarname">Jeremy Robson</h2>
                            </div>
                        </div>
                        <div className="divbutton">
                            <p>Daily</p>
                            <p>Weekly</p>
                            <p>Montly</p>
                        </div>
                    </div>
                </div>
                <div class="card2">
                    <Card/>
                </div>
                <div class="card3"> 
                    <Card/>
                </div>
                <div class="card4">
                    <Card/>
                </div>
                <div class="card5">
                    <Card/>
                </div>
                <div class="card6">
                    <Card/>
                </div>
                <div class="card7">
                    <Card/>
                </div>
            </div>
        );
    }
}

export default Body;