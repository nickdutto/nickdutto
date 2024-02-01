import ContactConfirmationEmail from '~/components/email/ContactConfirmationEmail';

const RenderContactConfirmation = () => {
  return (
    <ContactConfirmationEmail
      name="Nick Dutton"
      from="nick@acme.dev"
      subject="Inquiry about your web development services"
      message="Hello, I came across your portfolio and I'm interested in your web development services. Could you please provide more information about your rates and availability? Looking forward to hearing from you"
    />
  );
};

export default RenderContactConfirmation;
