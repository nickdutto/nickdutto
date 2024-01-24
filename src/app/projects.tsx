'use client';

import { type ComponentProps } from 'react';

import ProjectCards from '~/components/project/ProjectCards';

type Props = ComponentProps<'section'>;

const ProjectSection = ({ ...props }: Props) => {
  return (
    <section {...props}>
      <h2 className="text-xl font-bold text-default-700">Projects</h2>
      <ProjectCards />
    </section>
  );
};

export default ProjectSection;
