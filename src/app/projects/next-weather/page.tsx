import Features from './features';
import Header from './header';
import Screenshots from './screenshots';
import Tech from './tech';

import Divider from '~/components/ui/Divider';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center p-6">
      <div className="flex max-w-7xl">
        <article className="prose prose-base prose-neutral prose-invert sm:prose-base prose-h2:mb-2 prose-h2:mt-6">
          <Header />
          <Divider className="!my-4 h-[1px] bg-default-100" />
          <Features />
          <Tech />
          <Screenshots />
        </article>
      </div>
    </main>
  );
};

export default Page;
