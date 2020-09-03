import React, {Component} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as BooksActions} from '../store/ducks/books';

import BookItem from '../components/BookItem';
// import Search from '../components/Search';

class List extends Component {
  componentDidMount() {
    this.onRefresh();
  }

  onRefresh = () => {
    const {getBooksRequest} = this.props;
    getBooksRequest();
  };

  render() {
    const {
      books: {data, loading, refreshing},
      navigation: {navigate},
    } = this.props;
    return (
      <>
        <StatusBar backgroundColor="#ffdd0d" barStyle="dark-content" />
        <View style={{backgroundColor: '#ffdd0d', flex: 1}}>
          {/* <Search /> */}
          <Header
            centerComponent={{
              text: 'Pixter Books',
              style: {
                color: '#101010',
                fontSize: 20,
                fontFamily: 'Open Sans',
                fontWeight: '800',
              },
            }}
            rightComponent={
              <Icon
                name="magnify"
                size={28}
                color="#101010"
                style={styles.icon}
              />
            }
            containerStyle={{
              backgroundColor: '#ffdd0d',
              borderBottomWidth: 0,
            }}
          />
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#2c2605"
              style={styles.loading}
            />
          ) : (
            <FlatList
              style={{paddingTop: 20}}
              data={data}
              numColumns={3}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => (
                <BookItem
                  onPress={() => navigate('Details', {book: item})}
                  book={item}
                />
              )}
              columnWrapperStyle={styles.columnWrapper}
              onRefresh={this.onRefresh}
              refreshing={refreshing}
            />
          )}
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(BooksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10 * 3,
    marginHorizontal: 10 * 2,
  },
  loading: {
    paddingTop: 20 * 2,
  },
});
