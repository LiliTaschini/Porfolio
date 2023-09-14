import { Col, Container, Row } from "react-bootstrap"
import { MailForm } from "./MailForm" 
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <MailForm />
            
                <Col className="text-center">
                    <p>Let's Connect!</p>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/lilian-antonella-taschini-/"><img src={navIcon1}/></a>
                        <a href="https://www.facebook.com/LiliTaschini/"><img src={navIcon2}/></a>
                        <a href="https://www.instagram.com/lilitaschini/"><img src={navIcon3}/></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

