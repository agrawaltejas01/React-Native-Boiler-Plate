/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import CTTouchable from 'src/components/atoms/Text';

import CTText from 'src/components/atoms/Text';
// import CTText from '@components/atoms/Text';
import CTView from 'src/components/atoms/View';

const Home = () => {
  return (
    <CTView>
      <CTTouchable marginTop={20} backgroundColor="red">
        <CTText paddingBottom={10}>Hello World</CTText>
      </CTTouchable>
    </CTView>
  );
};

export default Home;
