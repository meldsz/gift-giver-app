import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import Gift from "./Gift";
import { max_number } from "./helper";

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifts: []
        }
    }

    addGift = () => {
        const { gifts } = this.state;
        gifts.push({ id: max_number(gifts.map(gift => gift.id)) + 1 });
        this.setState({ gifts });
    }

    removeGift = (id) => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({ gifts });
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {this.state.gifts.map(gift =>
                        <Gift key={gift.id} gift={gift} removeGift={(id) => this.removeGift(id)} />
                    )}
                </div>
                <Button onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;