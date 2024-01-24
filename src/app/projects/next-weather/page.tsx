import ImagesSection from '~/app/projects/next-weather/images';
import Divider from '~/components/ui/Divider';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <div className="flex max-w-2xl flex-col gap-2">
        <h2 className="text-center text-xl font-bold text-default-600 sm:text-3xl">NextWeather</h2>
        <Divider />
        <p className="text-default-500">
          A dynamic weather application built with Next.js offering comprehensive local weather &
          water information around Canberra, Australia. Utilizing Tomorrow.io Weather API for
          precise weather forecasts and the Australian Bureau of Meteorology (BOM) WaterData Online
          Portal to provide current & historical waterway insights, the app presents data in
          user-friendly cards, charts, and tables.
        </p>
        <ImagesSection />
      </div>
    </main>
  );
};

export default Page;
