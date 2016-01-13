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
const reload = () => {
	unmountComponentAtNode(rootElement);
	renderApp();
};

// if document url is not starting with http or https it is running inside an electron or cordova app
let isApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
// check if the user agent is one of the mobile device
let mobilePhone = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/);

// the combination of isApp and mobilePhone is a good way to know if the app is running inside cordova
// if so, reload the app to avoid flickering
// TODO understand why it flickers
if (isApp && mobilePhone) {
	setTimeout(reload, 100);
}
else {
	let reloadTimer;
	window.addEventListener('resize', () => {
		clearTimeout(reloadTimer);
		reloadTimer = setTimeout(reload, 100);
	});
}

// Development hot reloading
if (module.hot) {
	module.hot.accept();
}
