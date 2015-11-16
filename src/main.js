import React from 'react';
import ReactDOM from 'react-dom';

export default class TrevarezApp extends React.Component {
	render() {
		return (
			<div>
					Borne tactile pour l'exposition permanente "Bâtir un rêve" au château de Trévarez.
			</div>
		);
	}
}

ReactDOM.render(<TrevarezApp />, document.getElementById('root'));

if (module.hot) {
	module.hot.accept();
}
