import React from "react";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-body">
					<div className="text-center">
						<p className="texta">Hello!</p>
						<p className="texta">Halo!</p>
						<p className="texta">Hola!</p>

						<div className="dropdown">
							<button
								className="btn btn-info dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Select Your Lingo
							</button>
							<div
								className="dropdown-menu color"
								aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="#">
									English
								</a>
								<a className="dropdown-item" href="#">
									Spanish
								</a>
								<a className="dropdown-item" href="#">
									Kreyol
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
