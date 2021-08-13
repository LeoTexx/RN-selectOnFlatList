import React, {useContext, useRef, useEffect, useCallback} from 'react';
import {FlatList, SafeAreaView, Button} from 'react-native';
import {Context} from '../contexts/ContactContext';

import contacts from '../data/contacts.js';
import Card from './Card';

const DATA: Array<Object> = contacts;

const InfoList = () => {
  const {selectedContact, changeSelectedContact} = useContext(Context);
  const flatListRef = useRef<FlatList<any>>(null);

  useEffect(() => {
    flatListRef.current &&
      flatListRef.current.scrollToIndex({
        animated: true,
        index: selectedContact > 0 ? selectedContact - 1 : selectedContact,
      });
  }, [selectedContact]);

  const viewabilityConfig = useRef({
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 75,
  });
  const onViewableItemsChanged = useRef(({viewableItems, changed}) => {
    if (viewableItems && viewableItems.length !== 0) {
      viewableItems[0].index !== selectedContact &&
        changeSelectedContact(viewableItems[0].index);
    }
  });

  return (
    <SafeAreaView>
      <FlatList
        ref={flatListRef}
        bounces={false}
        data={DATA}
        contentContainerStyle={{paddingBottom: 256}}
        renderItem={({item}) => (
          <Card
            item={item}
            select={selectedContact}
            onPress={() => changeSelectedContact(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selectedContact}
        getItemLayout={(data, index) => ({
          length: 584,
          offset: 584 * index,
          index,
        })}
        //viewabilityConfig={viewabilityConfig.current}
        //onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </SafeAreaView>
  );
};

export default InfoList;
