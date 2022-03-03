import React, {Component} from 'react';
import {Container, Row, Table} from "react-bootstrap";

class ListTaskComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    render() {
        return (
            <Container>
                <h2 className="text-center"> List of Tasks</h2>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.tasks.map(task =>
                            <tr key={task.id}>
                                <td>task.title</td>
                                <td>task.description</td>
                            </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

export default ListTaskComponent;