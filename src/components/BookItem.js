import React from 'react';
import {TouchableHighlight, Image} from 'react-native';

const BookItem = ({book, onPress}) => (
  <TouchableHighlight onPress={onPress}>
    <Image
      style={{height: 130, width: 100}}
      source={{
        uri:
          book.volumeInfo.imageLinks === undefined
            ? null
            : `${book.volumeInfo.imageLinks.thumbnail}`,
      }}
    />
  </TouchableHighlight>
);

export default BookItem;
