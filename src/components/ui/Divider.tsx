import { Divider as NuiDivider, type DividerProps as NuiDividerProps } from '@nextui-org/react';

import { type ComponentProps } from 'react';

export type DividerProps = NuiDividerProps & {
  wrapperProps?: ComponentProps<'div'>;
};

const Divider = ({ wrapperProps, ...props }: DividerProps) => {
  return (
    <div {...wrapperProps}>
      <NuiDivider className="h-[2px] bg-default-100" {...props} />
    </div>
  );
};

export default Divider;
