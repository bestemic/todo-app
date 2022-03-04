import './App.css';
import {Container} from "react-bootstrap";
import TasksListComponent from "./components/TasksListComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    return (
        <Container id="root" fluid>
            <HeaderComponent/>
            <Container className="content-wrap">
                <TasksListComponent/>
            </Container>
            <FooterComponent/>
        </Container>
    );
}

export default App;
