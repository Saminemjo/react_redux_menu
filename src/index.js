import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import menuApp from './store/reducers/index'
import App from './components/App'
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(menuApp)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
   document.getElementById('root')
 );
registerServiceWorker();
