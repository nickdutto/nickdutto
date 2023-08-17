import PortfolioCard from '~/components/PortfolioCard';

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PortfolioCard>
        <h1 className="text-3xl font-bold text-white">Projects</h1>
      </PortfolioCard>
    </main>
  );
};

export default Projects;
