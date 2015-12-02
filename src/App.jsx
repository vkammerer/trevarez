import React from 'react';
import Room from './Room';
import AppCss from './css/App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.roomSelection = this.roomSelection.bind(this);
		this.state = {
			selectedRoom: ''
		}
	}
	roomSelection(roomName) {
		this.setState({selectedRoom: roomName});
	}
	render() {
		let rooms = {
			selectedRoom: this.state.selectedRoom,
			roomSelection: this.roomSelection
		}
		return (
			<div
				className={AppCss.app}>
				<Room
					rooms={rooms}
					room={{
						name: 'lingerie',
						top: 29,
						left: 15
					}}>
					<h1>Lingerie</h1>
					<p>
					Cet étage est le domaine de la lingère, responsable du linge de maison et éventuellement des vêtements de ses maîtres.
					</p>
					<p>
					Dans une des quatre pièces, une cheminée dispose
					d’un emplacement pour faire chauffer les fers à repasser.
					De grands placards occupent une bonne partie de l’espace,
					mais ce n’est rien comparé aux pièces du niveau inférieur qui en sont remplies.
					</p>
					<p>
					Le carnet que tient la lingère jusqu’en 1910 répertorie
					pas moins d’une centaine de draps et plus de trois cents nappes de tous types :
					grandes ou petites pour les plateaux des petits déjeuners ou les dessus de buffets,
					damassées, blanches ou décorées de guirlandes de roses…
					</p>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'argenterie',
						top: 56,
						left: 24
					}}>
					<h1>Argenterie</h1>
					<p>
						Cette pièce est le domaine réservé du maître d’hôtel ou du majordome qui est responsable de l’argenterie.
					</p>
					<p>
						Protégée par une porte blindée, la pièce est garnie de placards, gainés de tissu rouge à l’intérieur, spécialement aménagés pour ranger plats et couverts de valeur.
					</p>
					<p>
						Nichée dans l’entresol, l’argenterie est reliée aux offices de la cuisine et de la salle à manger par le passe-plat. Ainsi, plats et couverts circulent efficacement sans obliger les domestiques à emprunter l’escalier de service, ce qui en plus de les soulager, réduit les risques de casse et de vol.
					</p>
				</Room>
			</div>
		);
	}
}
