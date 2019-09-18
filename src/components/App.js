import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import Gift from "./Gift";

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifts: []
        }
    }

    addGift = () => {
        const { gifts } = this.state;
        const ids = gifts.map(gift => gift.id);
        const maxId = gifts.length > 0 ? Math.max(...ids) : 0;
        gifts.push({ id: maxId + 1 });
        this.setState({ gifts });
    }
    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {this.state.gifts.map(gift =>
                        <div key={gift.id}>
                            <Gift />
                        </div>
                    )}
                </div>
                <Button onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;