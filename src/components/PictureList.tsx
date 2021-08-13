import React, {useContext, useRef, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import contacts from '../data/contacts.js';
import {Context} from '../contexts/ContactContext';

const DATA: Array<Object> = contacts;

const Item = ({item, onPress, select}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Image
        source={item.photo}
        resizeMode={'cover'}
        style={item.id === select ? styles.selectedImage : styles.image}
      />
    </TouchableOpacity>
  );
};

const PictureList = () => {
  const {selectedContact, changeSelectedContact} = useContext(Context);
  const flatListRef = useRef<FlatList<any>>(null);

  useEffect(() => {
    flatListRef.current &&
      flatListRef.current.scrollToIndex({
        animated: true,
        index: selectedContact > 0 ? selectedContact - 1 : selectedContact,
        viewPosition: 0.5,
      });
  }, [selectedContact]);

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => changeSelectedContact(item.id)}
        select={selectedContact}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        ref={flatListRef}
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedContact}
        styles={{borderBottom: '1px solid black'}}
        scrollToIndex={{
          index: selectedContact,
          viewPosition: 0.5,
        }}
        getItemLayout={(data, index) => ({
          length: 128,
          offset: 128 * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  selectedImage: {
    borderWidth: 5,
    borderColor: '#add8e6',
    borderRadius: 48,
    width: 96,
    height: 96,
  },
  image: {
    width: 96,
    height: 96,
  },

  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default PictureList;
