import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">Chat</span>
			<div className="user">
				<img
					src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
				<span>Maria</span>
				<button>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
