import React, { useEffect, useState } from 'react';
import { Container, Row, Table, Button} from "react-bootstrap";
import { getTasks } from '../requests/TasksRequests';
import { useNavigate } from "react-router-dom";

function TasksListComponent() {
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate();

    const addTask = () => {
        navigate("/add-task");
    };

    useEffect(() => {
        getTasks().then(res => {
            setTasks(res.data)
        })
    }, []);

    return (
        <Container>
            <Row>
                <Button variant="dark" onClick={addTask}>Create task</Button>
            </Row>
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