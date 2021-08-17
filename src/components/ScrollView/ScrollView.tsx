import React from 'react';
import { ScrollView as ScrollViewBase } from 'react-native';

const ScrollView = (props: any) => {
  return (
    <ScrollViewBase
      style={{
        paddingBottom: 60
      }}
    >
      {props.children}
    </ScrollViewBase>
  );
};

export default ScrollView;
