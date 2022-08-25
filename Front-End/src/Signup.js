import { useState } from "react";
import{MdOutlineAlternateEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
const Signp = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [confirmedPassword, setConfirmedPswrd] = useState("");
	return (
		
		<div className="signup">
			<h2>Signup</h2>
			<form>
				<label><i><MdOutlineAlternateEmail/></i>Email</label>
				<input
					type="text"
					required
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
                <label>UserName</label>
				<input
					type="text"
					required
					value={userName}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<label><i><RiLockPasswordFill/></i>password</label>
				<input
					type="text"
					required
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<label>Confirmed password</label>
				<input
					type="text"
					value={confirmedPassword}
					onChange={(e) => setConfirmedPswrd(e.target.value)}
					required
				/>
				{<button>signup</button>}
			</form>
		</div>
	);
};

export default Signp;
