import { Chip, Link } from '@nextui-org/react';

import { LinkIcon } from 'lucide-react';

import GithubIcon from '~/components/icon/GithubIcon';

const Header = () => {
  return (
    <section>
      <h1 className="!mb-4">NextWeather</h1>
      <div className="flex gap-2">
        <Chip
          as={Link}
          href="https://weather.nickdutto.dev/"
          isExternal
          startContent={<LinkIcon className="text-default-600" size={16} />}
          radius="md"
          variant="faded"
          className="!my-0 gap-1 border-content2 bg-content1 px-3 py-4 text-default-600"
        >
          Website
        </Chip>
        <Chip
          as={Link}
          href="https://weather.nickdutto.dev/"
          isExternal
          startContent={<GithubIcon className="fill-default-600" size={16} />}
          radius="md"
          variant="faded"
          className="!my-0 gap-1 border-content2 bg-content1 px-3 py-4 text-default-600"
        >
          Source
        </Chip>
      </div>
      <p>
        A dynamic weather application built with Next.js offering comprehensive local weather &
        water information around Canberra, Australia. Utilizing Tomorrow.io Weather API for precise
        weather forecasts and the Australian Bureau of Meteorology (BOM) WaterData Online Portal to
        provide current & historical waterway insights, the app presents data in user-friendly
        cards, charts, and tables.
      </p>
    </section>
  );
};

export default Header;
