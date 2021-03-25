import React from "react";
import { Board } from "./Board";
import PropTypes from "prop-types";

export class ChooseYourWeapon extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<h1 className="text-center text-white">Step 1</h1>
				<div>
					<div className="mb-3 d-flex justify-content-center">
						<div className="container chooseWeapon rounded-lg">
							<form>
								<div className="form-row justify-content-center mb-4">
									<h2 className="text-white">
										CHOOSE YOUR WEAPON
									</h2>
								</div>

								<div className="form-row">
									<div className="col-md-6 mb-3">
										<input
											type="text"
											className="form-control border border-warning"
											id="validationDefault01"
											placeholder="Player 1"
											required
										/>
									</div>
									<div className="col-md-6 mb-3">
										<input
											type="text"
											className="form-control border border-info"
											id="validationDefault02"
											placeholder="Player 2"
											required
										/>
									</div>
								</div>
								<div className="form-row justify-content-around mb-4">
									<button
										className="btn btn-warning btn-lg border border-warning"
										type="button">
										X
									</button>
									<button
										className="btn btn-info btn-lg border border-info"
										type="button">
										O
									</button>
								</div>
								<div className="form-row justify-content-center">
									<button
										className="btn btn-warning btn-lg border border-warning"
										onClick={this.props.visibleToggle}
										type="button">
										Start!
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		);
	}
}
ChooseYourWeapon.propTypes = {
	visibleToggle: PropTypes.func
};
