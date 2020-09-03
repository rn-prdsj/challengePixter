import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  TextInput,
  FlatList,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {Header, Card} from 'react-native-elements';

export default class Search extends Component {
  constructor(props) {
    super(props);
    (this.books = []),
      (this.state = {
        query: '',
        isLoading: false,
        errorMessage: '',
      });
  }
  SearchBook() {
    Keyboard.dismiss();
    this.setState({isLoading: true});
    const query = this.state.query;
    for (var i = 0; i < query.length; i++) {
      if (query[i] == ' ') {
        query[i] = '+';
      }
    }
    if (query.length != 0) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=15`,
      )
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.items) {
            this.books = responseData.items;
            this.setState({isLoading: false});
          } else {
            this.setState({errorMessage: 'No results found', isLoading: false});
          }
        })
        .catch((error) =>
          this.setState({
            isLoading: false,
            errorMessage: error,
          }),
        )
        .done();
    } else {
      alert('You must write a book title !');
    }
  }

  keyExtractor = (index) => index.toString();

  renderItem = ({item}) => (
    <Card
      title={item.volumeInfo.title}
      vote={item.volumeInfo.averageRating}
      description={item.volumeInfo.description}
      date={item.volumeInfo.publishedDate}
      picture={
        item.volumeInfo.imageLinks === undefined
          ? null
          : `${item.volumeInfo.imageLinks.thumbnail}`
      }
    />
  );

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Header
            centerComponent={
              <TextInput
                placeholder="Search.."
                style={styles.searchInput}
                placeholderTextColor="#7F7F7F"
                returnKeyType="search"
                onChangeText={(bookTitle) => this.setState({bookTitle})}
              />
            }
            placement="left"
            rightComponent={{
              icon: 'search',
              color: '#FFAEA5',
              onPress: () => this.SearchBook(),
            }}
            statusBarProps={{translucent: true}}
            backgroundColor="#ffffff"
          />
          <View style={{marginTop: 15, alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#e74c3c" />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            centerComponent={
              <TextInput
                placeholder="Search.."
                style={styles.searchInput}
                placeholderTextColor="#101010"
                returnKeyType="search"
                onChangeText={(bookTitle) => this.setState({bookTitle})}
              />
            }
            // placement="left"
            rightComponent={{
              icon: 'search',
              color: '#101010',
              onPress: () => this.SearchBook(),
            }}
            containerStyle={{
              backgroundColor: '#ffdd0d',
              borderBottomWidth: 0,
            }}
            statusBarProps={{translucent: true}}
          />
          <ScrollView>
            <FlatList
              keyExtractor={this.keyExtractor}
              numColumns={3}
              data={this.books}
              renderItem={this.renderItem}
            />
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdd0d',
  },
  textInput: {
    borderColor: '#ffdd0d',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    color: '#101010',
    backgroundColor: '#fff',
  },
});
