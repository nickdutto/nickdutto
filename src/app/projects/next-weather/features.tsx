import { Link } from '@nextui-org/react';

const Features = () => {
  return (
    <section>
      <h2>Features</h2>
      <ul>
        <li>
          Weather information from{' '}
          <Link
            href="https://www.tomorrow.io/weather-api/"
            isExternal
            underline="always"
            color="secondary"
            className="!my-0"
          >
            Tomorrow.io - Weather API
          </Link>
          <ul>
            <li>Current Weather Information</li>
            <li>Table - Future Weather Forecast</li>
            <li>Chart - Future Weather Forecast</li>
          </ul>
        </li>
        <li>
          Water information from the{' '}
          <Link
            href="http://www.bom.gov.au/waterdata"
            isExternal
            underline="always"
            color="secondary"
            className="!my-0"
          >
            Bureau of Meteorology (BOM) - Water Data Online
          </Link>
          <ul>
            <li>Water Data Station Info</li>
            <li>Current & Historical data</li>
            <li>Charts - Watercourse Discharge & Level</li>
            <li>Tables - Watercourse Discharge & Level</li>
            <li>Interactive Map of Water Data stations.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Features;
