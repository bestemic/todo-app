import React, {useEffect, useState} from 'react';
import {Container, Row, Table} from "react-bootstrap";
import {getTasks} from '../requests/TasksRequests';

function TasksListComponent() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks().then(res => {
            setTasks(res.data)
        })
    }, []);

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
                        tasks.map(task =>
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default TasksListComponent;