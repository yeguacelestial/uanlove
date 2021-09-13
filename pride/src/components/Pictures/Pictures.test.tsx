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

  it('shows all pictures', () => {
    const { getByA11yLabel } = render(<Pictures pictures={pictures} />);

    const next = getByA11yLabel('next-picture');

    expect(getByA11yLabel('picture-1').props.source.uri).toBe(pictures[0]);
    fireEvent.press(next);

    expect(getByA11yLabel('picture-2').props.source.uri).toBe(pictures[1]);
    fireEvent.press(next);

    expect(getByA11yLabel('picture-3').props.source.uri).toBe(pictures[2]);
  });

  it('does not try to show non existing picture', () => {
    const { getByA11yLabel } = render(<Pictures pictures={pictures} />);

    const prev = getByA11yLabel('previous-picture'),
      next = getByA11yLabel('next-picture');

    expect(getByA11yLabel('picture-1').props.source.uri).toBe(pictures[0]);
    fireEvent.press(prev);
    fireEvent.press(prev);

    expect(getByA11yLabel('picture-1').props.source.uri).toBe(pictures[0]);
    fireEvent.press(next);
    fireEvent.press(next);

    expect(getByA11yLabel('picture-3').props.source.uri).toBe(pictures[2]);
    fireEvent.press(next);
    fireEvent.press(next);
    fireEvent.press(next);

    expect(getByA11yLabel('picture-3').props.source.uri).toBe(pictures[2]);
  });

  it('does not break when pressing next a lot', () => {
    const { getByA11yLabel } = render(<Pictures pictures={pictures} />);

    const next = getByA11yLabel('next-picture');
    for (let i = 0; i < 1000; ++i) fireEvent.press(next);

    expect(getByA11yLabel('picture-3').props.source.uri).toBe(pictures[2]);
  });

  it('does not break when pressing previous a lot', () => {
    const { getByA11yLabel } = render(<Pictures pictures={pictures} />);

    const prev = getByA11yLabel('previous-picture');
    for (let i = 0; i < 1000; ++i) fireEvent.press(prev);

    expect(getByA11yLabel('picture-1').props.source.uri).toBe(pictures[0]);
  });

  it('shows correct initial picture', () => {
    let renderAPI = render(<Pictures initialPicture={0} pictures={pictures} />);
    expect(renderAPI.getByA11yLabel('picture-1').props.source.uri).toBe(
      pictures[0]
    );

    renderAPI = render(<Pictures initialPicture={1} pictures={pictures} />);
    expect(renderAPI.getByA11yLabel('picture-2').props.source.uri).toBe(
      pictures[1]
    );

    renderAPI = render(<Pictures initialPicture={2} pictures={pictures} />);
    expect(renderAPI.getByA11yLabel('picture-3').props.source.uri).toBe(
      pictures[2]
    );
  });

  // eslint-disable-next-line max-len
  it('onPicturesChange callback receives updated picture index when pressing previous or next', () => {
    const Component: React.FC = () => {
      const [index, setIndex] = useState(0);

      return (
        <View>
          <Pictures pictures={pictures} onPictureChange={setIndex} />
          <Text accessibilityLabel="picture-index">{index}</Text>
        </View>
      );
    };

    const { getByA11yLabel } = render(<Component />);

    const prev = getByA11yLabel('previous-picture'),
      next = getByA11yLabel('next-picture');

    expect(getByA11yLabel('picture-index').children[0]).toBe('0');

    fireEvent.press(prev);
    expect(getByA11yLabel('picture-index').children[0]).toBe('0');

    fireEvent.press(next);
    expect(getByA11yLabel('picture-index').children[0]).toBe('1');

    fireEvent.press(next);
    expect(getByA11yLabel('picture-index').children[0]).toBe('2');

    fireEvent.press(next);
    expect(getByA11yLabel('picture-index').children[0]).toBe('2');
  });
});
