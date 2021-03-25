import React from "react";

export class ChooseWeapon extends React.Component {
	// Inicia la lógica de la clase
	constructor() {
		super();
		this.state = {
			visible: ""
		};
	}

	// Le cambia el valor a state a traves de setState
	ponerInvisible = () => {
		this.setState({ visible: "d-none" });
	};

	render() {
		return (
			<>
				<div className={this.state.visible}>
					<h2
						className={
							"text-white text-center" + this.state.visible
						}>
						Pick A Weapon
					</h2>
					<div className="row m-0 justify-content-center">
						<div className="contTic p-4">
							<h3 className="text-white text-center mb-3">
								Choose Your Weapon
							</h3>
							<form>
								<div className="form-row">
									<div className="col">
										<input
											type="text"
											className="form-control"
											placeholder="Player 1: Type Your Name"
										/>
									</div>

									<div className="col">
										<input
											type="text"
											className="form-control"
											placeholder="Player 2: Type Your Name"
										/>
									</div>
								</div>
								<div className="form-row justify-content-around mt-3">
									<button
										type="button"
										className="btn btn-outline-light btn-lg">
										X
									</button>
									<button
										type="button"
										className="btn btn-outline-light btn-lg">
										O
									</button>
								</div>
							</form>
							<div className="row justify-content-center mt-4">
								<button
									type="button"
									onClick={this.ponerInvisible}
									className="btn btn-lg btn-warning">
									Start!
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
