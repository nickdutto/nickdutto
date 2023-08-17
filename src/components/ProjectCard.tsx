'use client';

type Props = {
  name: string;
  imgSrc: string;
};

const ProjectCard = ({ name, imgSrc }: Props) => {
  return (
    <div className="m-1 rounded-md border border-zinc-800 bg-zinc-800/40 text-center">
      <h3 className="py-2 text-lg">{name}</h3>
      <img src={imgSrc} alt="" className="rounded-b-md bg-zinc-900/50" />
    </div>
  );
};

export default ProjectCard;
