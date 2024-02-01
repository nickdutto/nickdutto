import { Body, Container, Head, Heading, Hr, Html, Tailwind, Text } from '@react-email/components';

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
      <Body className="bg-white">
        <Container
          className="rounded-lg border-2 border-solid border-[#e4e4e7] bg-white p-4"
          style={{ boxShadow: '0 5px 10px rgba(20,50,70,.25)' }}
        >
          <Heading className="text-center text-xl font-bold text-[#006FEE]">
            Contact Inquiry
          </Heading>
          <Hr className="border-t-2 border-t-[#d4d4d8]" />
          <div className="grid grid-cols-2">
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">Name</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">{name}</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">Email</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">{from}</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">Subject</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">{subject}</Text>
          </div>
          <Hr className="border-t-2 border-t-[#d4d4d8]" />
          <Text className="m-0 p-2 text-xs text-[#3f3f46]">Message</Text>
          <Text className="m-0 p-2 text-[#27272a]">{message}</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactInquiryEmail;
