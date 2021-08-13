import React from 'react';
import type {Node} from 'react';
import {Text, View} from 'react-native';

import InfoList from './src/components/InfoList';
import PictureList from './src/components/PictureList';
import {ContactsProvider} from './src/contexts/ContactContext';

const App: () => Node = () => {
  return (
    <ContactsProvider>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Contacts</Text>
      </View>
      <PictureList />
      <InfoList />
    </ContactsProvider>
  );
};
export default App;
