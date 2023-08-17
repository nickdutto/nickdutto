'use client';

type Props = {
  name: string;
  imgSrc: string;
};

const ProjectCard = ({ name, imgSrc }: Props) => {
  return (
    <div className="m-1 border-2 border-zinc-800 text-center">
      <img src={imgSrc} alt="" className="h-[200px] bg-zinc-900/50" />
      <h3 className="bg-zinc-800">{name}</h3>
    </div>
  );
};

export default ProjectCard;
