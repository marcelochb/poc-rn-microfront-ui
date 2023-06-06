import { ITheme } from '../../../../../../../interfaces/src/themes';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { IList } from '../Models';


export const List: React.FC<IList> = ({
  data,
  horizontal = false,
  item,
  style,
  theme,
}) => {
  if (data?.length === 0) return null
  return (
    <View style={style}>
      <FlatList
        contentContainerStyle={styles(theme).container}
        data={data}
        keyExtractor={() => Math.random().toString()}
        horizontal={horizontal}
        renderItem={item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = (theme: ITheme) => StyleSheet.create({
  container: { padding: theme.metrics.base }
})
