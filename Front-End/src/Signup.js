import { useState, useTransition } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import SignupStyles from "./styleModules/Signup.module.css";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";
import { FiLock } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signp = () => {
	/* STATES */
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState("!! User name already exist !!");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [confirmedPassword, setConfirmedPswrd] = useState("");

	const history = useHistory();
	/* FUNCTIONS */
	const displayError = (errorMsg) =>{
		setError(errorMsg);
		setIsError(true);
		// setTimeout(() => {
		// 	setIsError(false);
		// 	setError("");
		// }, 2000);
	}

	const handleSignup = (e) => {
		e.preventDefault();
		if (password !== confirmedPassword) {
			displayError("The password confirmation does not match !!")
		} 
		else {
			let data = {userName : userName , email : email , password :password}
			try {
				axios({
					url: "/user/create",
					method: "POST",
					data: data,
				})
					.then((res) => {

						// console.log("user Create succesfully " , res.status , " " ,res.statusText);
						if(res.status === 201)
							history.push("/");
					})
					.catch((err) => {
						console.log("==> ",err);
						displayError(err.response.data.message)
					})
					.finally(() => {

					});
			} catch {}
		}

		// let data = {userName : userName , password : }
	};

	/* COMPONENT*/
	
	return (
		<div className={SignupStyles.signup}>
			<h1>Signup</h1>
			<form onSubmit={handleSignup}>
				<div className={SignupStyles.input_text}>
					<IconContext.Provider
						value={{ className: SignupStyles.icons }}
					>
						<BsEnvelope />
					</IconContext.Provider>
					<input
						placeholder="Email"
						type="text"
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>

				<div className={SignupStyles.input_text}>
					<IconContext.Provider
						value={{ className: SignupStyles.icons }}
					>
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
				<div className={SignupStyles.input_text}>
					<IconContext.Provider
						value={{ className: SignupStyles.icons }}
					>
						<FiLock />
					</IconContext.Provider>
					<input
						placeholder="Password"
						type="password"
						required
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className={SignupStyles.input_text}>
					<IconContext.Provider
						value={{ className: SignupStyles.icons }}
					>
						<RiLockPasswordLine />
					</IconContext.Provider>
					<input
						placeholder="Confirmed password"
						type="password"
						value={confirmedPassword}
						onChange={(e) => setConfirmedPswrd(e.target.value)}
						required
					/>
				</div>
				<div className="error_msg">
					{" "}
					<p>{isError && error}</p>
				</div>
				{<button>signup</button>}
			</form>
		</div>
	);
};

export default Signp;
