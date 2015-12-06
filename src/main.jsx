import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import globalCss from './css/global';
import App from './App';
import reducers from './reducers';

// create redux store from the reducer
let store = createStore(reducers);

// wrap the top level component inside the react-redux Provider
let rootElement = document.querySelector('.root');
render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);

if (module.hot) {
	module.hot.accept();
}
