import PortfolioCard from '~/components/PortfolioCard';
import ProjectCard from '~/components/ProjectCard';

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PortfolioCard>
        <h1 className="p-2 pl-4 text-lg text-white">Projects</h1>
        <div className="border-b-2 border-zinc-800" />
        <div className="grid grid-cols-2 p-2">
          <ProjectCard name="Next Weather" imgSrc="/projects/next-weather-preview.jpg" />
          <ProjectCard name="CapturCMS" imgSrc="/projects/capturcms-preview.jpg" />
        </div>
      </PortfolioCard>
    </main>
  );
};

export default Projects;
