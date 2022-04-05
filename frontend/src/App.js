import './App.css';
import {Container} from "react-bootstrap";
import TasksListComponent from "./components/TasksListComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddTaskComponent from './components/AddTaskComponent';

function App() {
    return (
        <Router>
            <Container id="root" fluid>
                <HeaderComponent/>
                <Container className="content-wrap">
                    <Routes>
                        <Route path="/" element={<TasksListComponent/>}/>
                        <Route path="/tasks" element={<TasksListComponent/>}/>
                        <Route path="/add-task" element={<AddTaskComponent/>}/>
                    </Routes>
                </Container>
                <FooterComponent/>
            </Container>
        </Router>
    );
}

export default App;
