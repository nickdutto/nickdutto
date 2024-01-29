import { Link } from '@nextui-org/react';

const Tech = () => {
  return (
    <section>
      <h2>Tech</h2>
      <ul>
        <li>
          <Link
            href="https://nextjs.org"
            isExternal
            underline="always"
            color="secondary"
            className="!my-0"
          >
            Next.js
          </Link>
        </li>
        <li>
          <Link
            href="https://mantine.dev/"
            isExternal
            underline="always"
            color="secondary"
            className="!my-0"
          >
            Mantine
          </Link>
        </li>
        <li>
          <Link
            href="https://nivo.rocks/"
            isExternal
            underline="always"
            color="secondary"
            className="!my-0"
          >
            Nivo
          </Link>
        </li>
        <li>
          <Link
            href="https://visgl.github.io/react-map-gl/"
            isExternal
            underline="always"
            color="secondary"
            className="!my-0"
          >
            React Map GL
          </Link>
        </li>
        <li>
          <Link
            href="https://tanstack.com/query/latest"
            isExternal
            underline="always"
            color="secondary"
            className="!my-0"
          >
            TanStack Query (React Query)
          </Link>
        </li>
        <li>
          <Link
            href="https://tanstack.com/table/v8"
            isExternal
            underline="always"
            color="secondary"
            className="!my-0"
          >
            TanStack Table
          </Link>
        </li>
        <li>
          <Link
            href="https://tailwindcss.com"
            isExternal
            underline="always"
            color="secondary"
            className="!my-0"
          >
            Tailwind CSS
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Tech;
