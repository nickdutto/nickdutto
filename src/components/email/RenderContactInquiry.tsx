import ContactInquiryEmail from '~/components/email/ContactInquiryEmail';

const RenderContactInquiry = () => {
  return (
    <ContactInquiryEmail
      name="Nick Dutton"
      from="nick@acme.dev"
      subject="Inquiry about your web development services"
      message="Hello, I came across your portfolio and I'm interested in your web development services. Could you please provide more information about your rates and availability? Looking forward to hearing from you"
    />
  );
};

export default RenderContactInquiry;
