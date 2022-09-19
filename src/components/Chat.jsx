import React from "react";
import Input from "../components/Input";
import Messages from "../components/Messages";
import Add from "../img/add.png";
import Cam from "../img/cam.png";
import More from "../img/more.png";

const Chat = () => {
	return (
		<div className="chat">
			<div className="chatInfo">
				<span>Username</span>
				<div className="chatIcons">
					<img src={Cam} alt="" />
					<img src={Add} alt="" />
					<img src={More} alt="" />
				</div>
			</div>
			<Messages />
			<Input />
		</div>
	);
};

export default Chat;
