import ProjectCards from '~/components/project/ProjectCards';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <section className="flex w-full max-w-7xl flex-col gap-4 px-0 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-default-600 sm:text-3xl">Projects</h2>
        <ProjectCards />
      </section>
    </main>
  );
};

export default Page;
