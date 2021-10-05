import React from 'react';
import Setting, { SettingProps } from '../Setting';

const SettingButton: React.FC<SettingProps> = ({
  labelStyle = {},
  ...props
}: SettingProps) => {
  return (
    <Setting
      labelStyle={{
        textAlign: 'center',
        ...labelStyle
      }}
      {...props}
    />
  );
};

export default SettingButton;
