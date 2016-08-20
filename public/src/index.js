import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import App from './components/App';
import resultList from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    resultList
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
);