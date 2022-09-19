import React from "react";

const Chats = () => {
	return (
		<div className="chats">
			<div className="userChat">
				<img
					src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
				<div className="userChatInfo">
					<span>Maria</span>
					<p>Hello</p>
				</div>
			</div>
			<div className="userChat">
				<img
					src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
				/>
				<div className="userChatInfo">
					<span>John</span>
					<p>Hello</p>
				</div>
			</div>
			<div className="userChat">
				<img
					src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
				/>
				<div className="userChatInfo">
					<span>David</span>
					<p>Hello</p>
				</div>
			</div>
		</div>
	);
};

export default Chats;
