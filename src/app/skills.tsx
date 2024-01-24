import { type ComponentProps } from 'react';

import GithubIcon from '~/components/icon/GithubIcon';
import LogosCssIcon from '~/components/icon/logos/LogosCssIcon';
import LogosHtmlIcon from '~/components/icon/logos/LogosHtmlIcon';
import LogosJavascriptIcon from '~/components/icon/logos/LogosJavascriptIcon';
import LogosNextjsIcon from '~/components/icon/logos/LogosNextjsIcon';
import LogosNodejsIcon from '~/components/icon/logos/LogosNodejsIcon';
import LogosPlaywrightIcon from '~/components/icon/logos/LogosPlaywrightIcon';
import LogosReactIcon from '~/components/icon/logos/LogosReactIcon';
import LogosTailwindcssIcon from '~/components/icon/logos/LogosTailwindcssIcon';
import LogosTypescriptIcon from '~/components/icon/logos/LogosTypescriptIcon';
import SkillCard from '~/components/skill/SkillCard';

type Props = ComponentProps<'section'>;

const SkillsSection = ({ ...props }: Props) => {
  return (
    <section {...props}>
      <h2 className="text-xl font-semibold text-default-700">Skills</h2>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
        <SkillCard name="HTML">
          <LogosHtmlIcon className="h-full w-full" />
        </SkillCard>
        <SkillCard name="CSS">
          <LogosCssIcon className="h-full w-full" />
        </SkillCard>
        <SkillCard name="JavaScript">
          <LogosJavascriptIcon className="h-full w-full" />
        </SkillCard>
        <SkillCard name="TypeScript">
          <LogosTypescriptIcon className="h-full w-full" />
        </SkillCard>
        <SkillCard name="Tailwind">
          <LogosTailwindcssIcon className="h-full w-full" />
        </SkillCard>
        <SkillCard name="React">
          <LogosReactIcon className="h-full w-full" />
        </SkillCard>
        <SkillCard name="NextJS">
          <LogosNextjsIcon className="h-full w-full" />
        </SkillCard>
        <SkillCard name="Playwright">
          <LogosPlaywrightIcon className="h-full w-full fill-default-600" />
        </SkillCard>
        <SkillCard name="NodeJS">
          <LogosNodejsIcon className="h-full w-full" />
        </SkillCard>
        <SkillCard name="GitHub">
          <GithubIcon className="h-full w-full fill-default-600" />
        </SkillCard>
      </div>
    </section>
  );
};

export default SkillsSection;
