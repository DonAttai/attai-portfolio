import { useForm, ValidationError } from "@formspree/react";
import { Form, Button } from "react-bootstrap";
function ContactForm() {
  const [state, handleSubmit] = useForm("myyovylp");

  if (state.succeeded) {
    return <p>Thanks for contacting me, I will get back to you shortly!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="email">Your email address</Form.Label>
        <Form.Control id="email" type="email" name="email" className="mb-3" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="message">Your message</Form.Label>
        <Form.Control
          as="textarea"
          id="message"
          name="message"
          className="mb-3"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button
          type="submit"
          disabled={state.submitting}
          style={{ background: "#2b2d2f", border: "none" }}
          size="lg"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}
export default ContactForm;
