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

const ContactConfirmationEmail = ({ name, from, subject, message }: Props) => (
  <Html>
    <Head />
    <Tailwind>
      <Body>
        <Container
          className="rounded-lg border-2 border-solid border-[#e4e4e7] bg-white p-4"
          style={{ boxShadow: '0 5px 10px rgba(20,50,70,.25)' }}
        >
          <Heading className="text-center text-xl font-bold text-[#007bff]">
            Contact Confirmation
          </Heading>
          <Text className="text-[#27272a]">
            Hello {name}, thank you for your inquiry. I have received your message and I will get
            back to you as soon as possible. Cheers, Nick!
          </Text>
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
            <Row>
              <Column className="m-0 w-1/2 p-2 text-xs text-[#3f3f46]">Message</Column>
              <Column className="m-0 w-1/2 p-2 text-xs text-[#3f3f46]">{message}</Column>
            </Row>
          </Section>
          <Hr className="border-t-2 border-t-[#d4d4d8]" />
          <Section>
            <Row>
              <Column>
                <Text className="m-0 font-semibold text-[#007bff]">Nick Dutton</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text className="m-0 text-[#71717a]">Full Stack Web Developer</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text className="m-0 align-middle text-[#71717a]">
                  <img
                    src="https://signaturehound.com/api/v1/png/map/default/007bff.png"
                    alt=""
                    width="16"
                    height="16"
                    className="align-middle"
                  />
                  <span className="pl-1.5 align-middle">Canberra, Australia</span>
                </Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text className="m-0 align-middle text-[#71717a]">
                  <img
                    src="https://signaturehound.com/api/v1/png/email/default/007bff.png"
                    alt=""
                    width="16"
                    height="16"
                    className="align-middle"
                  />
                  <a
                    href="mailto:nick@nickdutto.dev"
                    className="pl-1.5 align-middle font-medium text-[#007bff] no-underline"
                  >
                    nick@nickdutto.dev
                  </a>
                </Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text className="m-0 align-middle text-[#71717a]">
                  <img
                    src="https://signaturehound.com/api/v1/png/website/default/007bff.png"
                    alt=""
                    width="16"
                    height="16"
                    className="align-middle"
                  />
                  <a
                    href="https://nickdutto.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="pl-1.5 align-middle font-medium text-[#007bff] no-underline"
                  >
                    nickdutto.dev
                  </a>
                </Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text className="m-0 align-middle text-[#71717a]">
                  <img
                    src="https://signaturehound.com/api/v1/png/github/default/007bff.png"
                    alt=""
                    width="16"
                    height="16"
                    className="align-middle"
                  />
                  <a
                    href="https://github.com/ZippyIO"
                    target="_blank"
                    rel="noreferrer"
                    className="pl-1.5 align-middle font-medium text-[#007bff] no-underline"
                  >
                    ZippyIO
                  </a>
                </Text>
              </Column>
            </Row>
          </Section>
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
