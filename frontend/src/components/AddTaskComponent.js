import {Container, Card, Row} from "react-bootstrap";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {addTask} from '../requests/TasksRequests';
import {useNavigate} from "react-router-dom";

function AddTaskComponent() {
    const navigate = useNavigate();

    const initialValues = {
        title: "",
        description: "",
    };

    const onSubmitCreate = (data) => {
        addTask(data).then(res => {
            navigate("/");
        });
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Descriptions are required")
    });

    return (
        <Container>
            <Row>
                <Card className="col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Add task</h2>
                    <Card.Body>

                        <Formik initialValues={initialValues} onSubmit={onSubmitCreate}
                                validationSchema={validationSchema}>
                            <Form className="form">
                                <label>Task title</label>
                                <ErrorMessage name="title" component="span"/>
                                <Field className="input" name="title"/>

                                <label>Description</label>
                                <ErrorMessage name="info" component="span"/>
                                <Field className="input" name="description"/>

                                <button type="submit">Create task</button>
                            </Form>
                        </Formik>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default AddTaskComponent;