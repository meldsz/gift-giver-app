import React, { Component } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
class Gift extends Component {
    constructor() {
        super();
        this.state = {
            person: '',
            present: ''
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        Person:
                        <br />
                        <FormControl className="gift-person"
                            onChange={(e) => this.setState({ person: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        Present:
                        <br />
                        <FormControl className="gift-present"
                            onChange={(e) => this.setState({ present: e.target.value })} />
                    </FormGroup>
                </Form>
                <Button className="btn-remove" onClick={() => this.props.removeGift(this.props.gift.id)}>Remove Gift</Button>
            </div>
        )
    }
}

export default Gift;