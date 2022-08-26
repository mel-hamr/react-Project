import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FaUserAlt , FaLock} from "react-icons/fa"
import {AiOutlineUser} from "react-icons/ai"
import { IconContext } from "react-icons";
import { FiLock } from "react-icons/fi"
import LoginStyles from "./styleModules/Login.module.css"
const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={LoginStyles.login}>
			<h1>Login</h1>
			<form>
				<div className={LoginStyles.text_input}>
				<IconContext.Provider value={{ className: LoginStyles.icons }}>
					<AiOutlineUser />
				</IconContext.Provider>
					<input
					placeholder="User name"
						type="text"
						required
						value={userName}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
						/>
				</div>
				<div className={LoginStyles.text_input}>
				<IconContext.Provider value={{ className: LoginStyles.icons }}>
					<FiLock/>
				</IconContext.Provider>
					<input
					placeholder="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						/>
				</div>
				{/* <label className="pass"> Forgot password ?</label> */}

				{<button>Login</button>}
				<div className={LoginStyles.signup_link}>
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
