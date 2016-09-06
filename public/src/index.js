import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import MaterialApp from './components/MaterialApp';
import resultList from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//引入中间件
import resultListMiddleware from './middlewares/resultListMiddleware';
const store = createStore(
    resultList,
    applyMiddleware(resultListMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <MaterialApp/>
    </Provider>,
    document.getElementById('app')
);