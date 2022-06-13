import ContactForm from "../components/ContactForm";
import { Container, Row, Col, Card } from "react-bootstrap";

function ContactPage() {
  return (
    <Container>
      <Row className="Justify-content-center " style={{ height: "100vh" }}>
        <Col md={6} className="mx-auto my-auto">
          <Card>
            <Card.Body>
              <Card.Title
                className="text-center fw-bold fs-3"
                style={{ color: "#2b2d2f" }}
              >
                Contact Form
              </Card.Title>
              <Card.Text>
                I am looking for job opportunities, and would love to connect!
                Drop me an email and I will get back to you.
              </Card.Text>
              <ContactForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
