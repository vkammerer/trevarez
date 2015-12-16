import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './css/global';
import App from './components/App/App';
import reducers from './store/reducers';

// create redux store from the reducer
let store = createStore(reducers);

// wrap the top level component inside the react-redux Provider
let rootElement = document.querySelector('.root');
const renderApp = () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		rootElement
	);
};

renderApp();

// Teleporter doesnt rerender components on page resize for now
// so we do it manually here for now.
let reloadTimer;
const reload = () => {
	unmountComponentAtNode(rootElement);
	renderApp();
};

window.addEventListener('resize', () => {
	clearTimeout(reloadTimer);
	reloadTimer = setTimeout(reload, 100);
});

// Development hot reloading
if (module.hot) {
	module.hot.accept();
}
