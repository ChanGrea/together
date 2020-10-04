import React, {ReactElement, useState} from 'react';

import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

type Props = {
  data: readonly {id: string; title: string}[];
};

const Item = ({
  item,
  onPress,
  style,
}: {
  item: {
    id: string;
    title: string;
  };
  onPress: (event: GestureResponderEvent) => void;
  style: Object;
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export default function RoomList({data}: Props): ReactElement {
  const [selectedId, setSelectedId] = useState('');

  const renderItem = ({
    item,
  }: {
    item: {
      id: string;
      title: string;
    };
  }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
