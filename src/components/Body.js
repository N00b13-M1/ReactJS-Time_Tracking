import React, { Component } from 'react';
import Card from './Card';
import '../css/Body.css'
import Picture from '../img/image-jeremy.png'

class Body extends Component {
    render() {
        return (
            <div class="parent">
                <div class="card1"> 
                    <div className="bigcard-top">
                        <img src={Picture} alt="bag" className="avatar"/>
                        <p>Report for</p>
                        <h2>Jeremy Robson</h2>
                        <div className="bigcard-top">
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