import {Container} from "react-bootstrap";

function FooterComponent() {
    return (
        <footer id="main-footer">
            <Container>
                <span>{new Date().getFullYear()} | Todo App | All rights reserved | Przemek Pawlik</span>
            </Container>
        </footer>
    );
}

export default FooterComponent