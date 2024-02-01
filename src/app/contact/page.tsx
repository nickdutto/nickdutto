import ContactForm from '~/components/contact/ContactForm';

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-2 p-4">
      <section className="flex w-full max-w-2xl flex-col gap-4 px-0 sm:px-6">
        <h1 className="text-center text-2xl font-bold text-default-600 sm:text-3xl">Contact me</h1>
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
