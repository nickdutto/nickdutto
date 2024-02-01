'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, CardBody, Input, Textarea } from '@nextui-org/react';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { type ContactPayload, ContactValidator } from '~/lib/validators/ContactValidator';
import { sendEmail } from '~/server/resend';

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactPayload>({
    resolver: zodResolver(ContactValidator),
  });

  const onSubmit = async (data: ContactPayload) => {
    const res = await sendEmail(data);

    if (res?.success) {
      setSuccess(true);
      reset();

      console.log(res);
      return;
    }

    console.log(res);
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
          {success && <p>Message sent successfully, check your inbox for a confirmation email.</p>}
        </CardBody>
      </Card>
    </form>
  );
};

export default ContactForm;
