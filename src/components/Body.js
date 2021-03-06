import React, { Component } from 'react';
import Card from './Card';
import '../css/Body.css'
import data from "../data.json"

class Body extends Component {
    state={currentPage:"Daily"}
    monAction = (plop) => {
        this.setState({currentPage:plop.target.textContent})
    }

    render() {
        return (
            <div className="parent container">
                <div className="card1"> 
                    <div className="bigcard-bot">
                        <div className="bigcard-top">
                            <div className="div1">
                                <img src='./img/image-jeremy.png' alt="bag" className="avatar"/>
                            </div>
                            <div className="div2">
                                <p className="avatartext">Report for</p>
                            </div>
                            <div className="div3">
                                <h2 className="avatarname">Jeremy Robson</h2>
                            </div>
                        </div>
                        <div className="divbutton">
                            <p onClick={this.monAction}>Daily</p>
                            <p onClick={this.monAction}>Weekly</p>
                            <p onClick={this.monAction}>Monthly</p>
                        </div>
                    </div>
                </div>

            
                {data.map((element,index)=>{
                    return(
                        <div key={index} className={`card${index+2}`}>
                            <Card card={element} currentPage={this.state.currentPage}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Body;

