import './App.css';
import {Container} from "react-bootstrap";
import ListTaskComponent from "./components/ListTaskComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
    return (
        <Container id="root" fluid>
            <HeaderComponent/>
            <Container>
                <ListTaskComponent/>
            </Container>
        </Container>
    );
}

export default App;
