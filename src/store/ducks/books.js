export const Types = {
  GET_REQUEST: 'books/GET_REQUEST',
  GET_SUCCESS: 'books/GET_SUCCESS',
  GET_FAILURE: 'books/GET_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
  refreshing: false,
  filter: [],
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {...state, loading: true, refreshing: true, filter: action.payload.filter};
    case Types.GET_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        refreshing: false,
        error: false,
      };
    case Types.GET_FAILURE:
      return {...state, loading: false, error: action.payload.error};
    default:
      return state;
  }
}

export const Creators = {
  getBooksRequest: (filter) => ({
    type: Types.GET_REQUEST,
    payload: {filter},
  }),

  getBooksSuccess: (data) => ({
    type: Types.GET_SUCCESS,
    payload: {data},
  }),

  getBooksFailure: (error) => ({
    type: Types.GET_FAILURE,
    payload: {error},
  }),
};
