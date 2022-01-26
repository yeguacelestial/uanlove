import { useRef, useState } from 'react';
import { FlatList, View, Animated} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import slides from './slides';

import NextButton from './components/NextButton';
import OnboardingItem from './components/OnboardingItem';
import Paginator from './components/Paginator';

import { MainStyles } from '../../styles/core';
import SignInButton from './components/SignInButton';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    try {
      setCurrentIndex(viewableItems[0].index);
    } catch(err) {
      console.log("@viewableItemsChanged error: ", err);
    }
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({
        index: currentIndex + 1,
      })
    } else {
      console.log('last item');

      try {
        await AsyncStorage.setItem('@viewedOnboarding', 'true');
      } catch(err) {
        console.log("@scrollTo error: ", err);
      }
    }
  };

  return (
    <View style={MainStyles.container}>
      <View style={MainStyles.fx3}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                }
              }
            }
          ], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator
        data={slides}
        scrollX={scrollX}
      />
      {
        currentIndex + 1 == slides.length ? (
          <SignInButton />
        ) : (
          <NextButton
            percentage={(currentIndex + 1) * (100 / slides.length)}
            scrollTo={scrollTo}
          />
        )
      }
    </View>
  );
};

export default Onboarding;