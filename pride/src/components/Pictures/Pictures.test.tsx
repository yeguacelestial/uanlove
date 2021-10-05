import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Pictures from './Pictures';
import { View, Text } from 'react-native';

describe('<Pictures />', () => {
  const pictures = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Red.svg/1024px-Red.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Color_icon_Cornflower_blue.svg/1200px-Color_icon_Cornflower_blue.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Black_Colour.svg/1280px-Black_Colour.svg.png'
  ];

  const Component = ({ initialPicture = 0 }: { initialPicture?: number }) => {
    const [picture, setPicture] = useState(initialPicture);

    return (
      <View>
        <Pictures
          picture={picture}
          pictures={pictures}
          setPicture={setPicture}
        />
        <Text accessibilityLabel="picture">{picture}</Text>
      </View>
    );
  };

  it('shows all pictures from start to end', () => {
    const { getByA11yLabel } = render(<Component />);

    const next = getByA11yLabel('next-picture');

    expect(getByA11yLabel('visible-picture-1').props.source.uri).toBe(
      pictures[0]
    );
    fireEvent.press(next);

    expect(getByA11yLabel('visible-picture-2').props.source.uri).toBe(
      pictures[1]
    );
    fireEvent.press(next);

    expect(getByA11yLabel('visible-picture-3').props.source.uri).toBe(
      pictures[2]
    );
  });

  it('shows all pictures from end to start', () => {
    const { getByA11yLabel } = render(
      <Component initialPicture={pictures.length - 1} />
    );

    const prev = getByA11yLabel('previous-picture');

    expect(getByA11yLabel('visible-picture-3').props.source.uri).toBe(
      pictures[2]
    );
    fireEvent.press(prev);

    expect(getByA11yLabel('visible-picture-2').props.source.uri).toBe(
      pictures[1]
    );
    fireEvent.press(prev);

    expect(getByA11yLabel('visible-picture-1').props.source.uri).toBe(
      pictures[0]
    );
  });

  it('does not try to show non existing picture', () => {
    const { getByA11yLabel } = render(<Component />);

    const prev = getByA11yLabel('previous-picture'),
      next = getByA11yLabel('next-picture');

    expect(getByA11yLabel('visible-picture-1').props.source.uri).toBe(
      pictures[0]
    );
    fireEvent.press(prev);
    fireEvent.press(prev);

    expect(getByA11yLabel('visible-picture-1').props.source.uri).toBe(
      pictures[0]
    );
    fireEvent.press(next);
    fireEvent.press(next);

    expect(getByA11yLabel('visible-picture-3').props.source.uri).toBe(
      pictures[2]
    );
    fireEvent.press(next);
    fireEvent.press(next);
    fireEvent.press(next);

    expect(getByA11yLabel('visible-picture-3').props.source.uri).toBe(
      pictures[2]
    );
  });

  it('does not break when pressing next a lot', () => {
    const { getByA11yLabel } = render(<Component />);

    const next = getByA11yLabel('next-picture');
    for (let i = 0; i < pictures.length + 1000; ++i) fireEvent.press(next);

    expect(
      getByA11yLabel(`visible-picture-${pictures.length}`).props.source.uri
    ).toBe(pictures[pictures.length - 1]);
  });

  it('does not break when pressing previous a lot', () => {
    const { getByA11yLabel } = render(
      <Component initialPicture={pictures.length - 1} />
    );

    const prev = getByA11yLabel('previous-picture');
    for (let i = 0; i < pictures.length + 1000; ++i) fireEvent.press(prev);

    expect(getByA11yLabel('visible-picture-1').props.source.uri).toBe(
      pictures[0]
    );
  });

  it('shows correct initial picture', () => {
    let renderAPI = render(<Component initialPicture={0} />);
    expect(renderAPI.getByA11yLabel('visible-picture-1').props.source.uri).toBe(
      pictures[0]
    );

    renderAPI = render(<Component initialPicture={1} />);
    expect(renderAPI.getByA11yLabel('visible-picture-2').props.source.uri).toBe(
      pictures[1]
    );

    renderAPI = render(<Component initialPicture={2} />);
    expect(renderAPI.getByA11yLabel('visible-picture-3').props.source.uri).toBe(
      pictures[2]
    );
  });

  // eslint-disable-next-line max-len
  it('setPicture is called and updates state', () => {
    const { getByA11yLabel } = render(<Component />);

    const prev = getByA11yLabel('previous-picture'),
      next = getByA11yLabel('next-picture');

    expect(getByA11yLabel('picture').children[0]).toBe('0');

    fireEvent.press(prev);
    expect(getByA11yLabel('picture').children[0]).toBe('0');

    fireEvent.press(next);
    expect(getByA11yLabel('picture').children[0]).toBe('1');

    fireEvent.press(next);
    expect(getByA11yLabel('picture').children[0]).toBe('2');

    fireEvent.press(next);
    expect(getByA11yLabel('picture').children[0]).toBe('2');
  });

  it('ignore initial picture if index is out of range', () => {
    let renderAPI = render(
      <Component initialPicture={pictures.length + 1000} />
    );

    expect(renderAPI.getByA11yLabel('picture-1').props.source.uri).toBe(
      pictures[0]
    );

    renderAPI = render(<Component initialPicture={-1} />);

    expect(renderAPI.getByA11yLabel('picture-1').props.source.uri).toBe(
      pictures[0]
    );
  });
});
