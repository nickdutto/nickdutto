'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, CardBody, Input, Textarea } from '@nextui-org/react';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { type ContactPayload, ContactValidator } from '~/lib/validators/ContactValidator';
import { sendEmail } from '~/server/resend';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactPayload>({
    resolver: zodResolver(ContactValidator),
  });

  const onSubmit = async (data: ContactPayload) => {
    const loadingToast = toast.loading('Sending message...');

    const res = await sendEmail(data);

    if (res?.success) {
      toast.success('Message sent successfully, check your inbox for a confirmation email.', {
        id: loadingToast,
      });

      reset();
      return;
    }

    toast.error('An error occurred while sending the message.', { id: loadingToast });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="bg-[#0b0b0c]">
        <CardBody className="flex h-full flex-col gap-2 p-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
              type="text"
              label="Name"
              size="sm"
              radius="lg"
              classNames={{
                inputWrapper:
                  'bg-content1 data-[hover=true]:bg-content2 group-data-[focus=true]:bg-content1',
              }}
            />
            <Input
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              type="email"
              label="Email"
              size="sm"
              radius="lg"
              classNames={{
                inputWrapper:
                  'bg-content1 data-[hover=true]:bg-content2 group-data-[focus=true]:bg-content1',
              }}
            />
          </div>
          <Input
            {...register('subject')}
            isInvalid={!!errors.subject}
            errorMessage={errors.subject?.message}
            type="text"
            label="Subject"
            size="sm"
            radius="lg"
            classNames={{
              inputWrapper:
                'bg-content1 data-[hover=true]:bg-content2 group-data-[focus=true]:bg-content1',
            }}
          />
          <Textarea
            {...register('message')}
            isInvalid={!!errors.message}
            errorMessage={errors.message?.message}
            label="Message"
            minRows={10}
            maxRows={20}
            size="sm"
            radius="lg"
            classNames={{
              inputWrapper:
                'bg-content1 data-[hover=true]:bg-content2 group-data-[focus=true]:bg-content1',
            }}
          />
          <Button type="submit" radius="lg" color="primary">
            Send
          </Button>
        </CardBody>
      </Card>
    </form>
  );
};

export default ContactForm;
