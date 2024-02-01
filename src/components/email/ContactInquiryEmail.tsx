import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

type Props = {
  name: string;
  from: string;
  subject: string;
  message: string;
};

const ContactInquiryEmail = ({ name, from, subject, message }: Props) => (
  <Html>
    <Head />
    <Tailwind>
      <Body>
        <Container
          className="rounded-lg border-2 border-solid border-[#e4e4e7] bg-white p-4"
          style={{ boxShadow: '0 5px 10px rgba(20,50,70,.25)' }}
        >
          <Heading className="text-center text-xl font-bold text-[#006FEE]">
            Contact Inquiry
          </Heading>
          <Hr className="border-t-2 border-t-[#d4d4d8]" />
          <Section>
            <Row>
              <Column className="m-0 w-1/2 p-2 text-xs text-[#3f3f46]">Name</Column>
              <Column className="m-0 w-1/2 p-2 text-xs text-[#3f3f46]">{name}</Column>
            </Row>
            <Row>
              <Column className="m-0 w-1/2 p-2 text-xs text-[#3f3f46]">Email</Column>
              <Column className="m-0 w-1/2 p-2 text-xs text-[#3f3f46]">{from}</Column>
            </Row>
            <Row>
              <Column className="m-0 w-1/2 p-2 text-xs text-[#3f3f46]">Subject</Column>
              <Column className="m-0 w-1/2 p-2 text-xs text-[#3f3f46]">{subject}</Column>
            </Row>
          </Section>
          <Hr className="border-t-2 border-t-[#d4d4d8]" />
          <Text className="m-0 p-2 text-xs text-[#3f3f46]">Message</Text>
          <Text className="m-0 p-2 text-[#27272a]">{message}</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactInquiryEmail;
