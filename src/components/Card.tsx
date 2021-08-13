import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface CardProps {
  selected: boolean;
  onPress: Function;
  item: {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
    description: string;
    photo: string;
  };
}

export default function Card({item, onPress, select}): CardProps {
  return (
    <TouchableOpacity
      testID="Card"
      onPress={onPress}
      style={
        item.id === select
          ? [styles.container, {backgroundColor: 'rgba(173, 216, 230,0.8)'}]
          : [styles.container]
      }
      key={item.id}>
      <Text style={styles.title}>
        <Text style={{fontWeight: 'bold'}}>{item.firstName}</Text>{' '}
        {item.lastName}
      </Text>
      <Text style={styles.role}>{item.role}</Text>
      <Text style={styles.description}>
        <Text style={{fontWeight: 'bold'}}>About me{'\n'}</Text>
        {item.description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    borderWidth: 5,
    borderColor: '#add8e6',
    borderRadius: 48,
    height: 512,
    marginVertical: 36,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 32,
  },
  role: {
    fontSize: 24,
  },
  description: {},
});
