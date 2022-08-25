import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {GoPerson} from "react-icons/go"

const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="login">
			<h2>Login</h2>
			<form>
				<div className="text_input">
					<i><GoPerson/></i>
					<input
						type="text"
						required
						value={userName}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
				</div>
				<div className="text_input">
					<label>password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				{/* <label className="pass"> Forgot password ?</label> */}

				{<button>Login</button>}
				<div className="signup_link">
					<p>You are new here</p>
					<Link to="/signup">
						 <label> signup </label>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
