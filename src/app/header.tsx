import { type ComponentProps } from 'react';

type Props = ComponentProps<'section'>;

const HeaderSection = ({ ...props }: Props) => {
  return (
    <section {...props}>
      <h2 className="text-2xl font-bold text-default-700 sm:text-3xl">
        Hi, I&apos;m{' '}
        <span className="bg-gradient-to-r from-fuchsia-500 to-blue-600 bg-clip-text text-transparent">
          Nick Dutton
        </span>
        <br />
        Full Stack Web Developer
      </h2>
      <p className="text-default-500">
        I&apos;m based in Australia. I love building things with React, Next.js, Node.js and
        TypeScript.
      </p>
    </section>
  );
};

export default HeaderSection;
