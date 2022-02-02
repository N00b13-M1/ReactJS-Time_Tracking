import React, { Component } from 'react';
import '../css/Card.css'


class Card extends Component {
    render() {
        return (
            <div className="frame">
                <div className="div-bot">
                    <img src={`./img/icon-${this.props.card.title.replace(' ','-')}.svg`} alt="" class="bag" />
                    <div className="div-top">
                        <div className="row1">
                            <div className="col-8">
                                <span>
                                    {this.props.card.title}
                                </span>
                            </div>
                            <div className="col-4">
                                <img src="./img/icon-ellipsis.svg" alt="bag" className="points" />
                            </div>
                        </div>
                        {this.props.currentPage === "Daily" &&
                            <>
                                <div className="row2">
                                    <h2>{this.props.card.timeframes.daily.current} hrs</h2>
                                </div>
                                <div className="row3">
                                    <p>Yesterday - {this.props.card.timeframes.daily.previous} hrs</p>
                                </div>
                            </>
                        }
                        {this.props.currentPage === "Weekly" &&
                            <>
                                <div className="row2">
                                    <h2>{this.props.card.timeframes.weekly.current} hrs</h2>
                                </div>
                                <div className="row3">
                                    <p>Last Week - {this.props.card.timeframes.weekly.previous} hrs</p>
                                </div>
                            </>
                        }
                        {this.props.currentPage === "Monthly" &&
                            <>
                                <div className="row2">
                                    <h2>{this.props.card.timeframes.monthly.current} hrs</h2>
                                </div>
                                <div className="row3">
                                    <p>Last Month - {this.props.card.timeframes.monthly.previous} hrs</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

