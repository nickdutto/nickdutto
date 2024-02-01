import { Body, Container, Head, Heading, Hr, Html, Tailwind, Text } from '@react-email/components';

import { LinkIcon, MailIcon, MapPinIcon } from 'lucide-react';

import GithubIcon from '~/components/icon/GithubIcon';

type Props = {
  name: string;
  from: string;
  subject: string;
  message: string;
};

const ContactConfirmationEmail = ({ name, from, subject, message }: Props) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white">
        <Container
          className="rounded-lg border-2 border-solid border-[#e4e4e7] bg-white p-4"
          style={{ boxShadow: '0 5px 10px rgba(20,50,70,.25)' }}
        >
          <Heading className="text-center text-xl font-bold text-[#006FEE]">
            Contact Confirmation
          </Heading>
          <Text className="text-[#27272a]">
            Hello {name}, thank you for your inquiry. I have received your message and I will get
            back to you as soon as possible. Cheers, Nick!
          </Text>
          <Hr className="border-t-2 border-t-[#d4d4d8]" />
          <div className="grid grid-cols-2">
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">Name</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">{name}</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">Your Email</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">{from}</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">Subject</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">{subject}</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">Message</Text>
            <Text className="m-0 p-2 text-xs text-[#3f3f46]">{message}</Text>
          </div>
          <Hr className="border-t-2 border-t-[#d4d4d8]" />
          <div className="flex flex-col items-start">
            <Text className="m-0 font-semibold text-[#006FEE]">Nick Dutton</Text>
            <Text className="m-0 text-[#71717a]">Full Stack Web Developer</Text>
            <Text className="m-0 flex items-center gap-1.5 text-[#71717a]">
              <MapPinIcon strokeWidth={2.5} size={14} className="text-[#006FEE]" /> Canberra,
              Australia
            </Text>
            <Text className="m-0 flex items-center gap-1.5">
              <MailIcon strokeWidth={2.5} size={14} className="text-[#006FEE]" />
              <a
                href="mailto:nick@nickdutto.dev"
                className="font-medium text-[#006FEE] no-underline"
              >
                nick@nickdutto.dev
              </a>
            </Text>
            <Text className="m-0 flex items-center gap-1.5">
              <LinkIcon strokeWidth={2.5} size={14} className="text-[#006FEE]" />
              <a
                href="https://nickdutto.dev"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#006FEE] no-underline"
              >
                nickdutto.dev
              </a>
            </Text>
            <Text className="m-0 flex items-center gap-1.5">
              <GithubIcon className="size-4 fill-[#006FEE]" />
              <a
                href="https://github.com/ZippyIO"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#006FEE] no-underline"
              >
                ZippyIO
              </a>
            </Text>
          </div>
          <Hr className="border-t-2 border-t-[#d4d4d8]" />
          <Text className="m-0 text-xs text-[#71717a]">
            This email was sent from a notification-only address that cannot accept incoming email.
            Please do not reply to this message.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactConfirmationEmail;
