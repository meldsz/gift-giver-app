import React, { Component } from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
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
                        <FormControl className="gift-person"
                            onChange={(e) => this.setState({ person: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <FormControl className="gift-present"
                            onChange={(e) => this.setState({ present: e.target.value })} />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Gift;