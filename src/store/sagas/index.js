import {all, takeLatest} from 'redux-saga/effects';

import {Types as BooksTypes} from '../../store/ducks/books';

import {getBooks} from './books';

export default function* rootSaga() {
  return yield all([takeLatest(BooksTypes.GET_REQUEST, getBooks)]);
}
