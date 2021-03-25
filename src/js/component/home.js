import React, { useState } from "react";

//Components
import { ChooseWeapon } from "./ChooseWeapon";

export function Home() {
	return (
		// Div madre de todo
		<>
			<div className="titles my-4">
				{/* Div titulos */}
				<div>
					<h1 className="text-white text-center">
						Tic Tac Toe in React.JS
					</h1>
				</div>

				<ChooseWeapon />
			</div>
		</>
	);
}
