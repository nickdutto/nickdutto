import { Card } from '@nextui-org/react';

import { type ReactNode } from 'react';

type Props = {
  name: string;
  children: ReactNode;
};

const SkillCard = ({ name, children }: Props) => {
  return (
    <Card className="flex flex-col items-center gap-2 bg-[#0b0b0c] p-3">
      {children}
      <p className="text-[10px] font-medium text-default-500 sm:text-tiny">{name}</p>
    </Card>
  );
};

export default SkillCard;
